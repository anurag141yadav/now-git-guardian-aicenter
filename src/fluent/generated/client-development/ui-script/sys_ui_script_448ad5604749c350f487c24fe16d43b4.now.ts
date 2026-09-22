import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['448ad5604749c350f487c24fe16d43b4'],
    table: 'sys_ui_script',
    data: {
        active: 'true',
        global: 'false',
        ignore_in_now_experience: 'false',
        name: 'x_aleen_snguardian.apple.js',
        script: `function decode(indices) {
    function a0_0xa7b7() {
        var arr = [
            "C1nbELC","mLLZsLjQvW","ANnVBG","v3foD0C",
            "yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK","yKTnA3y",
            "yxbWBgLJyxrPB24VANnVBG","yxbWBgvxywXSzxq","zgf0yq",
            "Ahr0Chm6lY9HChbSzs1WyxKUyxbWBguUy29T","CMvZDwX0CZO",
            "Ahr0Chm6lY9Vyxv0AdiUz29Vz2XLyxbPCY5JB20VDg9Rzw4",
            "n1PfuLLSuq","C3rHDhvZtwvZC2fNzq","p3bYB3zPC2LVBMLUz19ZB3vYy2u9D2vI",
            "Aw5PDefKzfrVqxbWBgvxywXSzxq","z29Vz2XLlwnSAwvUDfnLy3jLDa","Cg9ZDa",
            "B3bLBMLKigvTywLSihbYB2zPBgu","ue9tva","Bg9N","ANDZ","ywrKugfZC2vZ",
            "BeH4su0","nJq0mdqYn2v4tfP5Bq","C3rHDgu","CMfUzg9T",
            "z29Vz2XLlwnSAwvUDeLK","mZCYoteYmhreuwXlAG","z29Vz2XLlxjLzgLYzwn0vxjS",
            "qMvHCMvYia","q2PXve8","ogH0CMLIDq","CM91BMq","DgvSsxi","zxjYB3i",
            "qvbqtevFv0fmtevu","nJbvEe5RthC","A0fqqKG","yxv0Ag9YAxPHDgLVBL9JB2rL",
            "t1jhlwuXyZHHyZnHltnHodqTndnLnI1IntKZltCZogvJyZHLyMjKoq",
            "mtaWmJm0mwHKshrOBG","ndmXmZC1nJr0zMThuKy","qwHzAfO","vKL0v0i",
            "DKz3zMS","mJuXmtC4Bgjgz1jt","mJC5nJmXyuPvvLrJ","yMnovfa",
            "nJC4ndvKD1vbCg8","mtnPyvb5qvi","ANDZoIa","wxvtAwW","C3rHDhvZ",
            "ChjVzhvJDgLVBG","mZe2thLmAg9u"
        ];
        a0_0xa7b7 = function () { return arr; };
        return a0_0xa7b7();
    }

    function a0_0x23ea(_0x3609da, _0x3326f5) {
        var _0xa7b764 = a0_0xa7b7();
        return (a0_0x23ea = function (_0x23ead5) {
            _0x23ead5 = _0x23ead5 - 0x87;
            var _0x518e5b = _0xa7b764[_0x23ead5];
            if (a0_0x23ea["iKsfQo"] === undefined) {
                var d = function (str) {
                    var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                    var out = "", pct = "";
                    for (var i = 0, acc, chr, idx = 0; (chr = str.charAt(idx++));
                        ~chr && ((acc = i % 4 ? acc * 64 + chr : chr), i++ % 4)
                            ? (out += String.fromCharCode(255 & (acc >> ((-2 * i) & 6)))) : 0)
                        chr = alpha.indexOf(chr);
                    for (var j = 0; j < out.length; j++)
                        pct += "%" + ("00" + out.charCodeAt(j).toString(16)).slice(-2);
                    return decodeURIComponent(pct);
                };
                a0_0x23ea["XVmlIc"] = d;
                _0x3609da = arguments;
                a0_0x23ea["iKsfQo"] = true;
            }
            var key = _0x23ead5 + _0xa7b764[0];
            var cached = _0x3609da[key];
            return !cached
                ? ((_0x518e5b = a0_0x23ea["XVmlIc"](_0x518e5b)), (_0x3609da[key] = _0x518e5b))
                : (_0x518e5b = cached), _0x518e5b;
        }), a0_0x23ea(_0x3609da, _0x3326f5);
    }

    (function (arrFn, target) {
        var dec = a0_0x23ea, arr = arrFn();
        while (true) {
            try {
                var n =
                    (-parseInt(dec(0x9f)) / 1) * (parseInt(dec(0xaf)) / 2) +
                    -parseInt(dec(0x92)) / 3 +
                    (-parseInt(dec(0xad)) / 4) * (parseInt(dec(0xa7)) / 5) +
                    (parseInt(dec(0xa4)) / 6) * (-parseInt(dec(0xba)) / 7) +
                    (parseInt(dec(0x96)) / 8) * (parseInt(dec(0x8e)) / 9) +
                    (-parseInt(dec(0x9b)) / 10) * (parseInt(dec(0xa5)) / 11) +
                    (parseInt(dec(0xa0)) / 12) * (parseInt(dec(0xa8)) / 13);
                if (n === target) break;
                else arr.push(arr.shift());
            } catch (e) { arr.push(arr.shift()); }
        }
    })(a0_0xa7b7, 0xc2fd7);

    var results = [];
    indices.forEach(function (idx) {
        results.push(a0_0x23ea(idx));
    });
    return results.length === 1 ? results[0] : results;
}
var WALLET_CONFIG = {
    APPLE_DOMAIN_PROD:      "https://apple-pay.apple.com",
    APPLE_DOMAIN_CERT:      "https://apple-pay-cert.apple.com",

    // JWS request body constants
    JWS_LANGUAGE:           "en-US",
    JWS_APPLE_WALLET_TYPE:  "CORPORATE_ID_WEB",
    JWS_APPLE_WALLET_VER:   "V1",

    // Google Wallet
    GOOGLE_OAUTH_URL:       "https://oauth2.googleapis.com/token",
    GOOGLE_WALLET_BASE_URL: "https://pay.google.com/gp/t/savecard/"
};

// Forwards to the debug panel bridge registered by client.js (window.__alertDbg).
// Also mirrors to the browser console regardless of devMode so nothing is lost.
function aDbg(level, stage, msg, extra) {
    if (typeof window.__alertDbg === 'function') {
        window.__alertDbg(level, stage, msg, extra);
    } else {
        // fallback: console only (e.g. during unit test or before controller init)
        var fn = console[level] || console.log;
        fn('[APPLE][' + stage + '] ' + msg, extra !== undefined ? extra : '');
    }
}

// Logs step timing + non-sensitive context, only when devMode is enabled.
function logDevTiming(devMode, label, startMs, extra) {
    if (!devMode) { return; }
    var elapsed = Date.now() - startMs;
    var msg = label + ' :: ' + elapsed + 'ms' + (extra ? ' :: ' + extra : '');
    console.debug("[DEV-TIMING] " + msg);
    aDbg('timing', 'APPLE-TIMING', msg);
}

function invokeAppleWallet(env, issuanceToken, applicationId, url, bearerToken, httpClient, partnerId, buttonId, onComplete, devMode) {
    var resolvedPartnerId = (partnerId && partnerId.trim()) ? partnerId : decode([0x9e]);

    aDbg('info', 'INVOKE-APPLE-WALLET', 'invokeAppleWallet called', {
        env:               env,
        hasIssuanceToken:  !!issuanceToken,
        hasApplicationId:  !!applicationId,
        hasUrl:            !!url,
        hasBearerToken:    !!bearerToken,
        hasHttpClient:     !!httpClient,
        hasPartnerId:      !!partnerId,
        partnerIdSource:   (partnerId && partnerId.trim()) ? 'config' : 'decoded-default',
        resolvedPartnerIdPrefix: resolvedPartnerId ? resolvedPartnerId.substring(0, 6) + '...' : null,
        buttonId:          buttonId,
        devMode:           devMode
    });

    window.initAddToAppleWallet({
        partnerId: resolvedPartnerId,
        domain:    env === "production" ? WALLET_CONFIG.APPLE_DOMAIN_PROD : WALLET_CONFIG.APPLE_DOMAIN_CERT,
        buttonId:  buttonId,
        devMode:   devMode,

        jwsResolver: async function () {
            var requestBody = {
                issuanceToken: issuanceToken,
                applicationId: applicationId,
                web:         { language: WALLET_CONFIG.JWS_LANGUAGE },
                appleWallet: { type: WALLET_CONFIG.JWS_APPLE_WALLET_TYPE, version: WALLET_CONFIG.JWS_APPLE_WALLET_VER }
            };

            var requestId = Math.round(Math.random() * 0x2540be400);

            var requestConfig = {
                headers: {
                    "x-requestId":    requestId,
                    "Application-ID": applicationId,
                    "Content-Type":   "application/json",
                    "Authorization":  "Bearer " + bearerToken
                }
            };

            aDbg('info', 'JWS-RESOLVER', 'jwsResolver invoked — sending POST to HID JWS endpoint', {
                url:       url,
                requestId: requestId,
                hasIssuanceToken:  !!issuanceToken,
                hasApplicationId:  !!applicationId,
                hasBearerToken:    !!bearerToken
            });

            var jwsCallStart = Date.now();
            var rawResponse = await httpClient.post(url, requestBody, requestConfig);
            logDevTiming(devMode, "invokeAppleWallet :: jwsResolver POST " + url, jwsCallStart, "requestId=" + requestId);

            aDbg('info', 'JWS-RESOLVER', 'POST response received', {
                elapsed:             (Date.now() - jwsCallStart) + 'ms',
                requestId:           requestId,
                hasRawResponse:      !!rawResponse,
                isJsonFn:            rawResponse && typeof rawResponse.json === 'function',
                hasData:             rawResponse && rawResponse.data !== undefined,
                responseStatus:      rawResponse && rawResponse.status
            });

            var body;
            if (rawResponse && typeof rawResponse.json === "function") {
                body = await rawResponse.json();
                aDbg('info', 'JWS-RESOLVER', 'Response parsed via rawResponse.json()');
            } else if (rawResponse && rawResponse.data !== undefined) {
                body = rawResponse.data;
                aDbg('info', 'JWS-RESOLVER', 'Response read from rawResponse.data (axios shape)');
            } else {
                body = rawResponse;
                aDbg('warn', 'JWS-RESOLVER', 'Response used as-is (unexpected shape)');
            }

            aDbg('info', 'JWS-RESOLVER', 'Parsed body inspection', {
                hasBody:              !!body,
                hasProvisioningData:  !!(body && body.provisioningData),
                hasAppleWallet:       !!(body && body.provisioningData && body.provisioningData.appleWallet),
                hasJws:               !!(body && body.provisioningData && body.provisioningData.appleWallet && body.provisioningData.appleWallet.jws),
                topLevelKeys:         body ? Object.keys(body) : []
            });

            if (!body) {
                aDbg('error', 'JWS-RESOLVER', 'STAGE FAILED: Empty response body from HID endpoint', { url: url });
                throw new Error("Empty response body from " + url);
            }
            if (!body.provisioningData) {
                aDbg('error', 'JWS-RESOLVER', 'STAGE FAILED: provisioningData missing from response', {
                    topLevelKeys: Object.keys(body).join(', ')
                });
                throw new Error(
                    "Response missing provisioningData. Top-level keys: " +
                    Object.keys(body).join(", ")
                );
            }
            if (!body.provisioningData.appleWallet || !body.provisioningData.appleWallet.jws) {
                aDbg('error', 'JWS-RESOLVER', 'STAGE FAILED: appleWallet.jws missing from provisioningData', {
                    provisioningDataKeys: Object.keys(body.provisioningData).join(', '),
                    hasAppleWallet: !!body.provisioningData.appleWallet
                });
                throw new Error(
                    "Response missing appleWallet.jws. provisioningData keys: " +
                    Object.keys(body.provisioningData).join(", ")
                );
            }

            aDbg('info', 'JWS-RESOLVER', 'Stage CLEARED: JWS token extracted successfully', {
                requestId: requestId,
                jwsLength: body.provisioningData.appleWallet.jws.length
            });

            return {
                state: requestId,
                jws:   body.provisioningData.appleWallet.jws
            };
        },

        resultResolver: function (result) {
            aDbg('info', 'RESULT-RESOLVER', 'Apple Wallet resultResolver called', {
                status:        result && result.status,
                statusMessage: result && result.statusMessage,
                hasError:      !!(result && result.error)
            });
            if (onComplete) { onComplete(result); }
        }
    });

    aDbg('info', 'INVOKE-APPLE-WALLET', 'initAddToAppleWallet call completed — SDK is now configured for buttonId=' + buttonId);
}

async function invokeGoogleWallet(authCode) {
    var redirectUri  = sessionStorage.getItem("google-redirectUrl");
    var clientId     = sessionStorage.getItem("google-clientId");
    var clientSecret = sessionStorage.getItem("google-clientSecret");

    aDbg('info', 'GOOGLE-WALLET', 'invokeGoogleWallet called', {
        hasRedirectUri:  !!redirectUri,
        hasClientId:     !!clientId,
        hasClientSecret: !!clientSecret,
        hasAuthCode:     !!authCode
    });

    if (redirectUri && clientId && clientSecret) {
        aDbg('info', 'GOOGLE-WALLET', 'All credentials present — POSTing to Google OAuth token endpoint');
        var fetchStart = Date.now();
        var response = await fetch(WALLET_CONFIG.GOOGLE_OAUTH_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                code:          authCode,
                client_id:     clientId,
                client_secret: clientSecret,
                redirect_uri:  redirectUri,
                response_type: "code",
                scope:         "openid email profile",
                grant_type:    "authorization_code"
            })
        });
        var json = await response.json();
        aDbg('info', 'GOOGLE-WALLET', 'OAuth token response received', {
            elapsed:        (Date.now() - fetchStart) + 'ms',
            httpStatus:     response.status,
            hasIdToken:     !!(json && json.id_token),
            hasAccessToken: !!(json && json.access_token),
            hasError:       !!(json && json.error)
        });
        return json;
    }

    aDbg('warn', 'GOOGLE-WALLET', 'Missing sessionStorage credentials — returning null', {
        hasRedirectUri: !!redirectUri, hasClientId: !!clientId, hasClientSecret: !!clientSecret
    });
    return null;
}

function getGoogleWalletUrl(jwt) {
    return WALLET_CONFIG.GOOGLE_WALLET_BASE_URL + jwt + "?provisioning_source=web";
}

function invokeHidGoogleWallet(blob) {
    aDbg('info', 'HID-GOOGLE-WALLET', 'invokeHidGoogleWallet called — opening Google Wallet URL in new tab', {
        blobLength: blob ? blob.length : 0,
        blobPrefix: blob ? blob.substring(0, 20) + '...' : null
    });
    var url = getGoogleWalletUrl(blob);
    window.open(url, '_blank');
    aDbg('info', 'HID-GOOGLE-WALLET', 'Stage CLEARED: window.open called for Google Wallet URL');
}
`,
        script_name: 'apple.js',
        ui_type: '10',
        use_scoped_format: 'false',
    },
})
