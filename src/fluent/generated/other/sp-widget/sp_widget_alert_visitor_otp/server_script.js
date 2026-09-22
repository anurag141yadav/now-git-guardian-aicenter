(function() {
    data.is_logged_in = gs.getSession().isLoggedIn();
    var logger = new AlertGuardianLogger(" Alert Visitor OTP:: ");
    var resetRetry = false;
    var userSession;
    var retryMap;
    var retryJson;
    var retryMapInit;
    var currTime;
    var allowedTime;
    var currentTime;
    if (input && input.action) {
        if (input.action == "requestOTP") {
            try {
                userSession = gs.getSession();
                if (userSession.getClientData('retryOTPRequest')) {
                    retryMapInit = userSession.getClientData('retryOTPRequest');
                    retryJson = retryMapInit === "" ? {} : JSON.parse(retryMapInit);
                    if (retryMapInit != "" && retryJson.hasOwnProperty(input.email) && retryJson[input.email] == 0) {
                        data.retryBlock = true;
                        return data;
                    } else if (retryMapInit != "" && retryJson.hasOwnProperty(input.email) && typeof retryJson[input.email] == 'string') {
                        currTime = new GlideDateTime();
                        allowedTime = new GlideDateTime(retryJson[input.email]);
                        if (allowedTime.after(currTime)) {
                            data.retryBlock = true;
                            return data;
                        }
                    }
                }
            } catch (e) {
                logger.error("User Session Data (REQUEST OTP) Exception :: " + e + " \nStack\n " + e.stack);
            }
            if (resetRetry) {
                try {
                    userSession = gs.getSession();
                    if (userSession.getClientData('retryOTPRequest')) {
                        retryMapInit = userSession.getClientData('retryOTPRequest');
                        retryJson = retryMapInit === "" ? {} : JSON.parse(retryMapInit);
                        if (retryMapInit != "" && retryJson.hasOwnProperty(input.email) && typeof retryJson[input.email] == 'string') {
                            retryJson[input.email] = 4;
                            userSession.putClientData('retryOTPRequest', JSON.stringify(retryJson));
                        }
                    }
                } catch (e) {
                    logger.error("USER SESSION REACTIVATION FAILURE(REQUEST OTP) (REQUEST OTP) Exception :: " + e + " \nStack\n " + e.stack);
                }
            }

            var otp = "";
            var grTemplate = new GlideRecordSecure('x_aleen_snguardian_visitor_nda_email_templates');
            grTemplate.addQuery('name', 'OTP Email');
            grTemplate.setLimit(1);
            grTemplate.query();
            if (grTemplate.next()) {
                var template = grTemplate.getValue('template').toString();
                otp = GlideSecureRandomUtil.getSecureRandomIntBound(900000) + 100000;
                var otpData = {};
                otpData.otp = otp;
                var newTemplate = new StringUtil().replacePlaceholders(template, otpData);

                var grEmail = new GlideRecordSecure('sys_email');
                grEmail.initialize();
                grEmail.subject = "Login Authentication Code";
                grEmail.body = newTemplate;
                grEmail.recipients = input.email;
                grEmail.type = "send-ready";
                grEmail.insert(); // This queues the email to be sent

            }

            var grVisitVisitor = new GlideRecordSecure('x_aleen_snguardian_identity');
            grVisitVisitor.addQuery('email', input.email);
            grVisitVisitor.addQuery('is_deleted', false);
            grVisitVisitor.setLimit(1);
            grVisitVisitor.query();
            if (grVisitVisitor.next()) {
                var grVisitNotification = new GlideRecordSecure('x_aleen_snguardian_visitor_notification');
                grVisitNotification.initialize();
                grVisitNotification.to = input.email;
                grVisitNotification.body = otp;
                grVisitNotification.type = "otp";
                grVisitNotification.insert();
                data.sendOTPSuccessful = true;
                return data;
            } else {
                data.sendOTPSuccessful = false;
                return data;
            }
        }
        if (input.action == "resendOTP") {
            try {
                userSession = gs.getSession();
                if (userSession.getClientData('retryOTPRequest')) {
                    retryMapInit = userSession.getClientData('retryOTPRequest');
                    retryJson = retryMapInit === "" ? {} : JSON.parse(retryMapInit);
                    if (retryMapInit != "" && retryJson.hasOwnProperty(input.email) && retryJson[input.email] == 0) {
                        data.retryBlock = true;
                        return data;
                    } else if (retryMapInit != "" && retryJson.hasOwnProperty(input.email) && typeof retryJson[input.email] == 'string') {
                        currTime = new GlideDateTime();
                        allowedTime = new GlideDateTime(retryJson[input.email]);
                        if (allowedTime.after(currTime)) {
                            data.retryBlock = true;
                            return data;
                        }
                    }
                }
            } catch (e) {
                logger.error("USER SESSION DATA NOT FOUND (RESEND OTP) Exception :: " + e + " \nStack\n " + e.stack);
            }
            if (resetRetry) {
                try {
                    userSession = gs.getSession();
                    if (userSession.getClientData('retryOTPRequest')) {
                        retryMapInit = userSession.getClientData('retryOTPRequest');
                        retryJson = retryMapInit === "" ? {} : JSON.parse(retryMapInit);
                        if (retryMapInit != "" && retryJson.hasOwnProperty(input.email) && typeof retryJson[input.email] == 'string') {
                            retryJson[input.email] = 4;
                            userSession.putClientData('retryOTPRequest', JSON.stringify(retryJson));
                        }
                    }
                } catch (e) {
                    logger.error("USER SESSION REACTIVATION FAILURE (RESEND OTP) Exception :: " + e + " \nStack\n " + e.stack);
                }
            }
            var otpRetry = "";
            var grTemplateRetry = new GlideRecordSecure('x_aleen_snguardian_visitor_nda_email_templates');
            grTemplateRetry.addQuery('name', 'OTP Email');
            grTemplateRetry.setLimit(1);
            grTemplateRetry.query();
            if (grTemplateRetry.next()) {
                var templateRetry = grTemplateRetry.getValue('template').toString();
                otpRetry = GlideSecureRandomUtil.getSecureRandomIntBound(900000) + 100000;
                var otpDataRetry = {};
                otpDataRetry.otp = otpRetry;
                var newTemplateRetry = new StringUtil().replacePlaceholders(templateRetry, otpDataRetry);

                var grEmailRetry = new GlideRecordSecure('sys_email');
                grEmailRetry.initialize();
                grEmailRetry.subject = "Login Authentication Code";
                grEmailRetry.body = newTemplateRetry;
                grEmailRetry.recipients = input.email;
                grEmailRetry.type = "send-ready";
                grEmailRetry.insert(); // This queues the email to be sent

            }

            var grVisitresendOTPNotification = new GlideRecordSecure('x_aleen_snguardian_visitor_notification');
            grVisitresendOTPNotification.initialize();
            grVisitresendOTPNotification.to = input.email;
            grVisitresendOTPNotification.type = "otp";
            grVisitresendOTPNotification.body = otpRetry;
            grVisitresendOTPNotification.insert();
            data.resendOTPSuccessful = true;
            return data;
        } else if (input.action == "verifyOTP") {
            try {
                var grVisitVerifyOTP = new GlideRecordSecure('x_aleen_snguardian_identity');
                grVisitVerifyOTP.addQuery('email', input.email);
                grVisitVerifyOTP.addQuery('is_deleted', false);
                grVisitVerifyOTP.setLimit(1);
                grVisitVerifyOTP.query();
                if (grVisitVerifyOTP.next()) {
                    var otpInDB = parseInt(grVisitVerifyOTP.getElement('otp').getDecryptedValue()).toString();
                    var visitor_status_code = grVisitVerifyOTP.visitor_status ? grVisitVerifyOTP.visitor_status.code : grVisitVerifyOTP.status.code;
                    var visitor_id = grVisitVerifyOTP.getUniqueValue();
                    var visitor_first_name = grVisitVerifyOTP.first_name;
                    var visitor_full_name = grVisitVerifyOTP.full_name ? grVisitVerifyOTP.full_name : "";
                    if (otpInDB == input.otp.toString()) {
                        data.verifyOTPSuccessful = true;
                        data.verifyOTPError = "OTP verified successfully!";
                        data.visitor = {
                            visitorId: String(visitor_id),
                            email: input.email,
                            status: String(visitor_status_code),
                            first_name: String(visitor_first_name),
                            full_name: String(visitor_full_name)
                        };
                    } else {
                        data.verifyOTPSuccessful = false;
                        data.verifyOTPError = "Invalid OTP";
                        userSession = gs.getSession();
                        if (!userSession.getClientData('retryOTPRequest') || userSession.getClientData('retryOTPRequest') === "") {
                            var obj = {};
                            var strObj = JSON.stringify(obj);
                            userSession.putClientData('retryOTPRequest', strObj);
                            data.retryBlock = false;
                        } else {
                            retryMap = userSession.getClientData('retryOTPRequest') === "" ? {} : JSON.parse(userSession.getClientData('retryOTPRequest'));
                            if (!retryMap.hasOwnProperty(input.email)) {
                                retryMap[input.email] = 4;
                                var newObj = JSON.stringify(retryMap);
                                userSession.putClientData('retryOTPRequest', newObj);
                            } else if (typeof retryMap[input.email] == 'string') {
                                currTime = new GlideDateTime();
                                allowedTime = new GlideDateTime(retryMap[input.email]);
                                if (allowedTime.before(currTime)) {
                                    data.retryBlock = false;
                                    retryMap[input.email] = 4;
                                    userSession.putClientData('retryOTPRequest', JSON.stringify(retryMap));
                                } else {
                                    data.retryBlock = true;
                                }
                            } else if (retryMap[input.email] <= 0) {
                                data.retryBlock = true;
                                currentTime = new GlideDateTime();
                                currentTime.addSeconds(3600);
                                allowedTime = currentTime.getValue();
                                retryMap[input.email] = allowedTime.toString();
                                userSession.putClientData('retryOTPRequest', JSON.stringify(retryMap));
                            } else {
                                retryMap[input.email] = retryMap[input.email] - 1;
                                userSession.putClientData('retryOTPRequest', JSON.stringify(retryMap));
                                data.retryBlock = false;
                            }
                        }
                    }
                } else {
                    data.verifyOTPSuccessful = false;
                    data.verifyOTPError = "Invalid Email";
                }
            } catch (ex) {
                logger.error("Exception :: " + e + " \nStack\n " + e.stack);
            }
            return data;
        }
    }
})();