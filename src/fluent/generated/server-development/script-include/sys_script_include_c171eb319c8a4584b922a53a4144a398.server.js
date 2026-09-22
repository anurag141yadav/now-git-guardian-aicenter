var McProvisionService = Class.create();
McProvisionService.prototype = {

    initialize: function() {
        this.systemCode = 'ALERT-MC-01';
        this.logger = new AlertGuardianLogger(' McProvisionService:: ');
    },

    // ── Config ────────────────────────────────────────────────────────────
    getParam: function(propertyName) {
        var gr = new GlideRecordSecure('x_aleen_snguardian_system_parameters');
        gr.addQuery('type', 'OTHERS');
        gr.addQuery('property_name', propertyName);
        gr.setLimit(1);
        gr.query();
        return gr.next() ? (gr.getValue('property_value') || '') : '';
    },

    getSecureParam: function(propertyName) {
        var gr = new GlideRecordSecure('x_aleen_snguardian_system_parameters');
        gr.addQuery('type', 'OTHERS');
        gr.addQuery('property_name', propertyName);
        gr.setLimit(1);
        gr.query();
        if (gr.next() && !gr.getElement('secure_property_value').nil()) {
            return gr.getElement('secure_property_value').getDecryptedValue();
        }
        return '';
    },

    getHidConfig: function() {
        return {
            env: this.getParam('HID-APPLE-ENV') || 'production',
            appId: this.getParam('HID-APPLE-APP-ID'),
            jwsUrl: this.getParam('HID-APPLE-JWS-URL'),
            partnerId: this.getParam('HID-PARTNER-ID')
        };
    },

    getSystemNumber: function() {
        var gr = new GlideRecordSecure('x_aleen_snguardian_system');
        gr.addQuery('code', this.systemCode);
        gr.setLimit(1);
        gr.query();
        return gr.next() ? gr.getValue('number') : '';
    },

    // ── Identity ──────────────────────────────────────────────────────────
    resolveIdentity: function(email) {
        var result = { sysid: null, email: null, userName: null, status: null, image: null };
        var gr = new GlideRecordSecure('x_aleen_snguardian_identity');
        gr.addQuery('email', email ? email : gs.getUser().getEmail());
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            result.sysid = gr.getUniqueValue();
            result.email = gr.getValue('email');
            result.userName = gr.getValue('full_name');
            result.status = gr.getDisplayValue('status') ? gr.getDisplayValue('status') : 'ACTIVE';
            result.image = gr.getValue('photo') ? gr.getValue('photo') : '';
        } else {
            this.logger.warn('resolveIdentity :: No identity record for user ' + gs.getUserID());
        }
        return result;
    },

    // ── Session payload (identity + badges + wallet config) ───────────────
    getSession: function(email) {
        var identity = this.resolveIdentity(email);
        var systemNumber = this.getSystemNumber();
        var provHelper = new ProvisioningHelper(systemNumber);

        var badgeResponse = provHelper.execute({
            systemCode: this.systemCode,
            identity_sysid: identity.sysid,
            email: identity.email
        }, 'GET-USER-BADGES', { 'SKIP_QUEUE': true });

        var hasBadges = badgeResponse && badgeResponse.count && badgeResponse.count > 0;
        return {
            userName: identity.userName,
            email: identity.email,
            status: identity.status,
            image: identity.image,
            identitySysId: identity.sysid,
            hidConfig: this.getHidConfig(),
            googleClientId: this.getParam('CLIENT-KEY'),
            googleRedirectUri: this.getParam('GOOGLE-REDIRECT-URI'),
            badges: hasBadges ? badgeResponse.badges : [],
            count: hasBadges ? badgeResponse.count : 0
        };
    },

    // ── ADD-BADGE (Wavelynx / provisioning link) ──────────────────────────
    addToWallet: function(identityId, sourceId) {
        var systemNumber = this.getSystemNumber();
        var provHelper = new ProvisioningHelper(systemNumber);
        return provHelper.execute({
            identityId: identityId,
            sourceId: sourceId,
            systemNumber: systemNumber,
            isWebProv: true
        }, 'ADD-BADGE', { 'SKIP_QUEUE': true });
    },

    // ── GET-EVENTS (issuance + provisioning tokens) ───────────────────────
    getProvisioningTokens: function(email, identityId, sourceId) {
        var systemNumber = this.getSystemNumber();
        var provHelper = new ProvisioningHelper(systemNumber);
        return provHelper.execute({
            email: email,
            identityId: identityId,
            sourceId: sourceId,
            systemNumber: systemNumber,
            isWebProv: true
        }, 'GET-EVENTS', { 'SKIP_QUEUE': true });
    },

    // ── Google Wallet provisioning ────────────────────────────────────────
    provisionGoogle: function(code, identityId, sourceId) {
        var identity = this.resolveIdentity();
        var hidConfig = this.getHidConfig();

        var tokenRes = this._exchangeCodeForToken(
            code,
            this.getParam('CLIENT-KEY'),
            this.getSecureParam('CLIENT-AUTH'),
            this.getParam('GOOGLE-REDIRECT-URI')
        );
        var tokenInfo = this._getTokenInfo(tokenRes.id_token);
        var linkingTokenObject = this._getLinkingTokenObject(tokenInfo.sub, tokenInfo.aud);

        var issuanceResponse = this.getProvisioningTokens(identity.email, identityId, sourceId);
        if (!issuanceResponse || !issuanceResponse.issuanceToken) {
            throw new Error('Issuance token missing');
        }

        return this._provisionGoogleWallet(
            hidConfig.jwsUrl,
            issuanceResponse.provisioningToken,
            hidConfig.appId,
            issuanceResponse.issuanceToken,
            linkingTokenObject
        );
    },

    _exchangeCodeForToken: function(code, clientId, clientSecret, redirectUri) {
        var r = new sn_ws.RESTMessageV2();
        r.setHttpMethod('POST');
        r.setEndpoint('https://oauth2.googleapis.com/token');
        r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        r.setRequestBody(
            'grant_type=authorization_code' +
            '&code=' + encodeURIComponent(code) +
            '&client_id=' + encodeURIComponent(clientId) +
            '&client_secret=' + encodeURIComponent(clientSecret) +
            '&redirect_uri=' + encodeURIComponent(redirectUri)
        );
        var body = JSON.parse(r.execute().getBody());
        if (!body.id_token) {
            throw new Error('Token exchange failed: ' + JSON.stringify(body));
        }
        return body;
    },

    _getTokenInfo: function(idToken) {
        var r = new sn_ws.RESTMessageV2();
        r.setHttpMethod('GET');
        r.setEndpoint('https://oauth2.googleapis.com/tokeninfo?id_token=' + idToken);
        var body = JSON.parse(r.execute().getBody());
        if (!body.sub) {
            throw new Error('Tokeninfo failed: ' + JSON.stringify(body));
        }
        return body;
    },

    _getLinkingTokenObject: function(sub, aud) {
        var nonce = gs.generateGUID();
        var hashedUserId = new GlideDigest().getSHA256Hex(sub + nonce).toLowerCase();
        var json = '{"nonce":"' + nonce + '","hashedUserId":"' + hashedUserId + '","aud":"' + aud + '"}';
        return gs.base64Encode(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    },

    _provisionGoogleWallet: function(hidProvisioningUrl, hidAccessToken, hidApplicationId, issuanceToken, linkingTokenObject) {
        var r = new sn_ws.RESTMessageV2();
        r.setHttpMethod('POST');
        r.setEndpoint(hidProvisioningUrl);
        r.setRequestHeader('Content-Type', 'application/json');
        r.setRequestHeader('Authorization', 'Bearer ' + hidAccessToken);
        r.setRequestHeader('Application-ID', hidApplicationId);
        r.setRequestHeader('x-requestId', gs.generateGUID());
        r.setRequestBody(JSON.stringify({
            issuanceToken: issuanceToken,
            applicationId: hidApplicationId,
            web: { language: 'en-US' },
            googleWallet: { type: 'CORPORATE_ID_WEB', version: 'V1', linkingTokenObject: linkingTokenObject }
        }));
        var body = JSON.parse(r.execute().getBody());
        var blob = body.provisioningData && body.provisioningData.googleWallet && body.provisioningData.googleWallet.blob;
        if (!blob) {
            throw new Error('HID provision failed: ' + JSON.stringify(body));
        }
        return { success: true, blob: blob };
    },

    type: 'McProvisionService'
};
