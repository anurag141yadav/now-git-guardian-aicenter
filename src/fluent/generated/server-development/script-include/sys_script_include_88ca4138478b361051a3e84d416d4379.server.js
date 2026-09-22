var AuthenticationTokenHelper = Class.create();
AuthenticationTokenHelper.prototype = {
    initialize: function(number) {
		this.guardian_credential = "x_aleen_snguardian_connector_credntial";
        this.system_id = number;
        this.API_KEY_METHOD = "USERNAMEPASSOWRD";
        this.OAUTH_METHOD = "OAUTH";
        this.system = new SystemUtil(number).getSystem();
        this.tokenExpiry = this.system.getElement("credential") ? this.system.getElement("credential").token_expiry : "";
        this.authenticationMethod = this.system.getValue("authentication");
        this.CREDENTIAL = this.system.getValue("credential");
        this.type = this.system.getElement("credential") ? this.system.getElement("credential").token_type : "";
        this.oauth_entity_profile = this.system.getValue("oauth_entity_profile");
        this.oauth_context = "ae.oauth";
        this.mid_server = this.system.mid_server ? this.system.mid_server.name : "";
        this.API_KEY_TYPE = "API_KEY";
        this.logger = new AlertGuardianLogger(" AuthenticationTokenHelper:: ");
        this.logger.debug(
            '[AUTH DEBUG]' +
            '\nSystem ID: ' + this.system_id +
            '\nSystem: ' + (this.system ? this.system.getDisplayValue() : 'null') +
            '\nAuth Method: ' + this.authenticationMethod +
            '\nCred : ' + this.CREDENTIAL +
            '\nOauth Entity Profile: ' + this.oauth_entity_profile +
            '\nToken Expiry: ' + this.tokenExpiry +
            '\n type' + this.type
        );
    },
    getStoredToken: function() {
        try {
            if (this.authenticationMethod == this.API_KEY_METHOD) {
                var isTokenValid = this.validateTokenExpiry();
                if (isTokenValid) {
                    var apiKeyObj = this.getApiKeyToken();
                    return apiKeyObj ? this.getAuthResponse(true, apiKeyObj, "Auth Success") : this.getNewToken();
                } else {
					this.logger.debug("Generating New Token");
                    return this.getNewToken();
                }
            } else if (this.authenticationMethod == this.OAUTH_METHOD) {
                var token = this.getOauthToken();
                if (token) {
                    return this.getAuthResponse(true, token, "Successful Authentication");
                } else {
                    if (this.oauth_entity_profile) {
                        return this.createOauthToken();
                    } else {
                        throw new Error("getStoredToken() :: OAUTH-ENTITY-PROFILE-NOT-FOUND-EXCEPTION");
                    }
                }
            }
        } catch (e) {
            this.logger.error("getStoredToken Exception :: " + e + " \nStack\n " + e.stack);
            return this.getErrorObject(e);
        }
    },
    validateTokenExpiry: function() {
        try {
            var now = new GlideDateTime();
            var expirationDateTime = new GlideDateTime(this.tokenExpiry);
            var isTokenValid = now.before(expirationDateTime);
            this.logger.debug("ValidateTokenExpiry() now " + now.getValue() + " exipy " + expirationDateTime.getValue());
            this.logger.debug("ValidateTokenExpiry() is token valid " + isTokenValid);
            return isTokenValid;
        } catch (e) {
            this.logger.error("validateTokenExpiry Exception >> " + e + " stack " + e.stack, {});
            return null;
        }
    },
    getApiKeyToken: function() {
        try {
            if (this.CREDENTIAL && this.type == this.API_KEY_TYPE) {
                var encrypted_token = this.system.credential ? this.system.getElement("credential.token") : "";
                return encrypted_token.getDecryptedValue();
            } else {
                return null;
            }
        } catch (e) {
            this.logger.error("GetApiKeyToken Exception :: " + e + " stack " + e.stack);
            return this.getErrorObject(e);
        }

    },
    getOauthToken: function() {
        try {
            if (this.oauth_entity_profile) {
                var returningToken = new sn_auth.GlideOAuthClient().getToken(this.system_id, this.oauth_entity_profile);
                if (returningToken) {
                    return returningToken.getAccessToken();
                } else {
                    return null;
                }
            } else {
                throw new Error("getOauthToken() :: OAUTH-ENTITY-PROFILE-NOT-FOUND-EXCEPTION");
            }
        } catch (e) {
            this.logger.error("getOauthToken Exception :: " + e + " stack " + e.stack);
            return this.getErrorObject(e);
        }
    },
    saveToken: function(token, token_expires_in, authResponse) {
        try {
            var tokenExpires = new GlideDateTime();
            tokenExpires.addSeconds(token_expires_in);
            if (authResponse) {
                for (var key in authResponse) {
                    if (authResponse.hasOwnProperty(key)) {
                        var params = authResponse[key];
                        for (var innerKey in params) {
                            if (params.hasOwnProperty(innerKey)) {
                                var value = params[innerKey];
                                var grSystemParameters = new GlideRecordSecure("x_aleen_snguardian_system_parameters");
                                grSystemParameters.addQuery("system.number", this.system_id);
                                grSystemParameters.addQuery("type", key);
                                grSystemParameters.addQuery("property_name", innerKey);
                                grSystemParameters.setLimit(1);
                                grSystemParameters.query();
                                if (grSystemParameters.next()) {
                                    grSystemParameters.setValue("property_value", value);
                                    grSystemParameters.update();
                                }
                            }
                        }
                    }
                }
            }
            if (this.authenticationMethod == this.API_KEY_METHOD) {
                if (this.CREDENTIAL && this.CREDENTIAL.token_type == this.API_KEY_TYPE) {
                    var apiKeyGr = new GlideRecordSecure(this.guardian_credential);
                    apiKeyGr.addQuery("sys_id", this.CREDENTIAL);
                    apiKeyGr.query();
                    if (apiKeyGr.next()) {
                        apiKeyGr.setValue("token_expiry", tokenExpires.getValue());
                        apiKeyGr.token.setDisplayValue(token);
                        apiKeyGr.update();
                    }
                } else {
                    var apiKeyGrNew = new GlideRecordSecure(this.guardian_credential);
                    apiKeyGrNew.addQuery("name", this.system_id);
                    apiKeyGrNew.addQuery("system", this.system.getUniqueValue());
                    apiKeyGrNew.query();
                    if (apiKeyGrNew.next()) {
                        apiKeyGrNew.setValue("token_expiry", tokenExpires.getValue());
                        apiKeyGrNew.token.setDisplayValue(token);
                        apiKeyGrNew.update();
                        this.updateSystemCredential(apiKeyGrNew.getUniqueValue());
                    } else {
                        apiKeyGrNew.initialize();
						apiKeyGrNew.setValue("name", this.system_id);
                        apiKeyGrNew.setValue("system", this.system.getUniqueValue());
                        apiKeyGrNew.setValue("token_expiry", tokenExpires.getValue());
                        apiKeyGrNew.token.setDisplayValue(token);
                        apiKeyGrNew.setValue("type", "api_key");
                        apiKeyGrNew.setValue("token_type", this.API_KEY_TYPE);
                        var apiKeyIdNew = apiKeyGrNew.insert();
                        this.updateSystemCredential(apiKeyIdNew);
                    }
                }
            }
        } catch (e) {
            this.logger.error(" SaveToken :: Exception => " + e + " stack " + e.stack);
        }
    },
    generateOauthToken: function() {
        try {
            var request = new sn_auth.GlideOAuthClientRequest();
            request.setParameter('oauth_requestor_context', this.oauth_context);
            request.setParameter('oauth_requestor', this.system_id);
            request.setParameter('oauth_provider_profile', this.oauth_entity_profile);
            if (this.mid_server) {
                request.setParameter("use_mid", true);
                request.setParameter("mid_server", this.mid_server);
            }
            var client = new sn_auth.GlideOAuthClient();
            var response = client.requestTokenByRequest(this.oauth_context, request);
            if (response) {
                if (response.getResponseCode() == "200" && response.getBody()) {
                    return this.getAuthResponse(true, response.getToken().getAccessToken(), "Tokens Generated Successfully");
                } else {
                    if (!response.getBody()) {
                        throw new Error("generateOauth() NO-RESPONSE-BODY-OAUTH-EXCEPTION");
                    } else {
                        throw new Error("generateOauth() REQUEST-FAILED ERROR RESPONSE" + response.getResponseCode() + " ERROR-CODE " + response.getErrorMessage());
                    }
                }
            } else {
                throw new Error("GenerateOauthTokens NO-RESPONSE_EXCEPTION");
            }
        } catch (e) {
            this.logger.error("generateOauthToken Exception => " + e + " stack " + e.stack);
            return this.getAuthResponse(false, null, "Authentication Failure " + e);
        }
    },
    createOauthToken: function() {
        try {
            var grOauthCred = new GlideRecordSecure("oauth_2_0_credentials");
            grOauthCred.addQuery('name', this.system_id + "_OAUTH_CRED");
            grOauthCred.query();
            if (!grOauthCred.hasNext()){
                var grOauthCredNew = new GlideRecordSecure("oauth_2_0_credentials");
                grOauthCredNew.initialize();
                grOauthCredNew.setValue("name", this.system_id + "_OAUTH_CRED");
                grOauthCredNew.setValue("classification", "oauth_2_0");
                grOauthCredNew.setValue("active", true);
                grOauthCredNew.setValue("integration_type", "system");
                grOauthCredNew.setValue("oauth_entity_profile", this.oauth_entity_profile);
                grOauthCredNew.setValue("type", "oauth_2_0");
                grOauthCredNew.insert();
            }
            var grOauth = new GlideRecordSecure('oauth_credential');
            grOauth.addQuery('oauth_requestor_profile.requestor_id', this.system_id);
            grOauth.addQuery('oauth_requestor_profile.oauth_entity_profile', this.oauth_entity_profile);
            grOauth.addQuery('type', "access_token");
            grOauth.query();
            if (grOauth.next()) {
                if (grOauth.type == 'access_token') {
                    var isTokenExpired = new GlideDateTime(grOauth.expires).before(new GlideDateTime());
                    if (!isTokenExpired) {
                        return this.getAuthResponse(true,this.getOauthToken(),"Token Fetched Successfully");
                    }
                }
            }
            return this.generateOauthToken();
        } catch (e) {
            this.logger.error("CreateOauthToken Exception e " + e + " stack " + e.stack);
            return this.getAuthResponse(false, null, "CreateOauthTokenException " + e);
        }
    },
    updateSystemCredential(id) {
        try {
            if (id) {
                this.system.setValue("credential", id);
                this.system.update();
            } else {
                this.logger.error("updateSystemCredential :: No id passed in for updation in system");
            }
        } catch (e) {
            this.logger.error("error", "updateSystemCredential Exception => " + e + " stack " + e.stack);
        }
    },
    getNewToken: function() {
        var connectionkeyValueArray = {};
        var headerkeyValueArray = {};
        var systemParametersGr = new GlideRecordSecure("x_aleen_snguardian_system_parameters");
        systemParametersGr.addQuery('system.number', this.system_id);
        systemParametersGr.query();
        while (systemParametersGr.next()) {
            if (systemParametersGr.getValue('type').toLowerCase?.() == 'connection') {
                key = systemParametersGr.getValue('type').toLowerCase() + "." + systemParametersGr.getValue('property_name').toLowerCase();
                value = systemParametersGr.getValue('property_value');
                connectionkeyValueArray[key] = value;
            }
            if (systemParametersGr.getValue('type').toLowerCase?.() == 'login_req_header') {
                key = systemParametersGr.getValue('property_name');
                value = systemParametersGr.getValue('property_value');
                headerkeyValueArray[key] = value;
            }
        }
        var login_systemapiinfo = new SystemUtil(this.system_id).getFunction('LOGIN');
        var login_request_type = "POST";
        var login_request_body = "";
        var login_request_url = "";
        try {
            if (login_systemapiinfo.next()) {
                login_request_type = login_systemapiinfo.type.toLowerCase();
                login_request_body = login_systemapiinfo.getValue('payload');
                login_request_url = login_systemapiinfo.getValue('url');

                var grSystem = new GlideRecordSecure('x_aleen_snguardian_system');
                if (grSystem.get('number', this.system_id)) {
                    connectionkeyValueArray['connection.host'] = grSystem.getValue('host');
                    connectionkeyValueArray['connection.username'] = grSystem.getValue('username');
                    connectionkeyValueArray['connection.password'] = grSystem.getElement('password').getDecryptedValue();
                    if (grSystem.getValue('mid_server') != null) {
                        connectionkeyValueArray['mid.server'] = grSystem.mid_server.name;
                    }
                }
                var data = {};
                var evaluator = new GlideScopedEvaluator();
                evaluator.putVariable('data', connectionkeyValueArray);
                payload_handler_response = evaluator.evaluateScript(login_systemapiinfo, 'payload_handler', null);
                for (var payloadKey in payload_handler_response) {
                    data[payloadKey] = payload_handler_response[payloadKey];
                }
                try {
                    var login_endpoint = connectionkeyValueArray['connection.host'] + login_request_url;
                    var login_request = new sn_ws.RESTMessageV2();
                    login_request.setHttpMethod(login_request_type);
                    login_request.setEndpoint(login_endpoint);
                    if (connectionkeyValueArray['mid.server'] != null && connectionkeyValueArray['mid.server'] != "") {
                        login_request.setEccParameter("skip_sensor", "true");
                        login_request.setMIDServer(connectionkeyValueArray['mid.server']);
                    }
                    for (var key in headerkeyValueArray) {
                        if (headerkeyValueArray.hasOwnProperty(key)) {
                            var value = headerkeyValueArray[key];
                            if (null != value && value.indexOf('${') !== -1) {
                                var stringUtilNew = new StringUtil();
                                var headerValue = stringUtilNew.replacePlaceholders(value, data);
                                login_request.setRequestHeader(key, headerValue);
                            } else {
                                login_request.setRequestHeader(key, value);
                            }
                        }
                    }
                    var replacer = new StringUtil();
                    var login_requestBody = replacer.replacePlaceholders(login_request_body, connectionkeyValueArray);
                    login_request.setRequestBody(login_requestBody);
                    var login_response = login_request.executeAsync();
                    var login_responseBody = login_response.getBody();
                    var httpStatus = login_response.getStatusCode();
                    if (httpStatus == 200) {
                        var successResponseEvaluator = new GlideScopedEvaluator();
                        successResponseEvaluator.putVariable('data', this.system_id);
                        successResponseEvaluator.putVariable('requestdata', data);
                        successResponseEvaluator.putVariable('responseBody', login_responseBody);
                        successResponseEvaluator.putVariable('login_response', login_response);
                        var processedSuccessResponse = successResponseEvaluator.evaluateScript(login_systemapiinfo, 'success_response_handler', null);
                        if (processedSuccessResponse['success'] == true) {
                            this.saveToken(processedSuccessResponse['token'], processedSuccessResponse['token_expires_in'], processedSuccessResponse['addlInfo']);
                        }
                        login_systemapiinfo.last_success_datetime = new GlideDateTime();
                        login_systemapiinfo.update();
                        return processedSuccessResponse; // success and token already returned
                    } else {
                        var ErrorResponseEvaluator = new GlideScopedEvaluator();
                        ErrorResponseEvaluator.putVariable('data', this.system_id);
                        ErrorResponseEvaluator.putVariable('responseBody', login_responseBody);
                        var ErrorResponse = ErrorResponseEvaluator.evaluateScript(login_systemapiinfo, 'error_response_handler', null);
                        login_systemapiinfo.last_failure_datetime = new GlideDateTime();
                        login_systemapiinfo.update();
                        return ErrorResponse;
                    }
                } catch (e) {
                    this.logger.error("newToken() Exception => " + e + " \n stack => \n" + e.stack);
                    return this.getErrorObject(e);
                }
            } else {
                return {
                    "success": true,
                    "message": "Test Connection is Successful",
                    "token": ""
                };
            }
        } catch (e) {
            this.logger.error(" Newtoken() Exception " + e + " stack " + e.stack);
            return this.getErrorObject(e);
        }
    },
    getErrorObject: function(e) {
        return {
            'success': false,
            'message': "There has been a problem in authentication Exception => " + e
        };
    },
    getAuthResponse: function(success, token, message) {
        return {
            'success': success ? success : false,
            'token': token ? token : null,
            'message': message ? message : "Authentication Failure"
        };
    },
    type: 'AuthenticationTokenHelper'
};