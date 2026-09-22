function onLoad() {
    //g_form.clearValue('lobby_config');
    var location = g_form.getValue('visit_location');

    if (location) {
        var gaLobbyConfig = new GlideAjax('VisitorClientScriptHelper');
        gaLobbyConfig.addParam('sysparm_name', 'getLobbyConfig');
        gaLobbyConfig.addParam('sysparm_location', location);
        gaLobbyConfig.getXMLAnswer(function(response) {
            processLobbyConfig(response);
        });


        var visitId = g_form.getValue('visit_id');
        if (visitId) {
            var gaVisitorStatus = new GlideAjax('VisitorClientScriptHelper');
            gaVisitorStatus.addParam('sysparm_name', 'getVisitData');
            gaVisitorStatus.addParam('sysparm_visitId', visitId);
            gaVisitorStatus.getXMLAnswer(function(result) {
                processVisitorStatus(result);
            });
        }

        // Fetch lobby action config
        var userRole = g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin') ? "LOBBYADMIN" : (g_user.hasRoleExactly('x_aleen_snguardian.kiosk') ? "KIOSK" : "");
        var gaLobbyActionConfig = new GlideAjax('VisitorClientScriptHelper');
        gaLobbyActionConfig.addParam('sysparm_name', 'getLobbyActionConfig');
        gaLobbyActionConfig.addParam('sysparm_location', location);
        gaLobbyActionConfig.addParam('sysparm_role', userRole);
        gaLobbyActionConfig.addParam('sysparm_type', "CHECKIN");
        gaLobbyActionConfig.getXMLAnswer(function(answer) {
            processLobbyActionConfig(answer);
        });



    }
}

function processLobbyActionConfig(answer) {
    try {
        if (answer) {
            g_form.setValue('action_config', answer);

            var actionConfig = g_form.getValue('action_config');
            var actionConfigObj = JSON.parse(JSON.parse(actionConfig));

            var visitDetails = JSON.parse(g_form.getValue('visit_details_metadata'));
            // ID scan variable set - mandatory / based on visitor status
            if (actionConfigObj && actionConfigObj.idScan && actionConfigObj.idScan.includes("mandatory")) {
                g_form.setDisplay('visitor_id_scan', true);
            } else {
                if (visitDetails['visitor.visitor_status.code'] == 'VERIFIED') {
                    g_form.setDisplay('visitor_id_scan', false);
                } else {
                    g_form.setDisplay('visitor_id_scan', true);
                }
            }

            // Health questionnaire - mandatory / not required
            if (actionConfigObj && actionConfigObj.healthQuestion && actionConfigObj.healthQuestion.includes("mandatory")) {
                g_form.setDisplay('health_questions', true);
            } else {
                g_form.setDisplay('health_questions', false);
            }

            // NDA and sign 
            if (actionConfigObj && actionConfigObj.ndaSign && actionConfigObj.ndaSign.indexOf("mandatory") != -1) {
                g_form.setDisplay('nda_sign', true);
            }else if(actionConfigObj && actionConfigObj.ndaSign && actionConfigObj.ndaSign.indexOf("not") != -1){
				g_form.setDisplay('nda_sign', false);
			}else{
				processVisitNdaExpiry(visitDetails['nda_sign_expiry_date_time']);
			}

        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
}

function processLobbyConfig(response) {
    try {
        if (response) {
			var responseObj = JSON.parse(response);
            g_form.setValue('lobby_config', response);
            g_form.setValue('need_host_confirmation', 'No');
			//parse response - get value of reqd_visitor_photo -> set visibility 
			if(responseObj.visitorPhotoRequired== true || responseObj.visitorPhotoRequired=="true"){
				g_form.setDisplay('visitor_image',true);
			}else{
				g_form.setDisplay('visitor_image',false);
			}
        } else {
            console.error("Empty response for lobby config.");
        }
    } catch (e) {
        console.error("Error processing lobby config: ", e, "Response: ", response);
    }
}

function processVisitorStatus(result) {
    try {
        if (result) {
            g_form.setValue('visit_details_metadata', result);

            //check if early check is allowed
            var earlyDuration = JSON.parse(g_form.getValue('lobby_config'))['earlybirdTimeAllowed'].toString();
            var gaEarlyDuration = new GlideAjax('VisitorClientScriptHelper');
            gaEarlyDuration.addParam('sysparm_name', 'getEarlyDurationalTime');
            gaEarlyDuration.addParam('sysparm_duration', earlyDuration);
            gaEarlyDuration.addParam('sysparm_start_time', JSON.parse(result)['start_date']);
			gaEarlyDuration.addParam('sysparm_location',g_form.getValue('visit_location'));
            gaEarlyDuration.getXMLAnswer(function(notAllowedDateTime) {
				g_form.setValue('able_to_submit',notAllowedDateTime);
            });
        }
    } catch (e) {
        console.error("Error processing visitor status: ", e, "Result: ", result);
    }
}

function processVisitNdaExpiry(expiryDate) {
    if (expiryDate) {
        var gaCheckExpiry = new GlideAjax('VisitorClientScriptHelper');
        gaCheckExpiry.addParam('sysparm_name', 'compareFromCurrentTime');
        gaCheckExpiry.addParam('sysparm_expiry', expiryDate);
        gaCheckExpiry.getXMLAnswer(function(response) {
            if (response == "1") {
                g_form.showFieldMsg('visit_nda', " NDA Verification required");
                g_form.setDisplay('nda_sign', true);
            } else {
                g_form.setDisplay('nda_sign', false);
            }
        })
    } else {
        g_form.setDisplay('nda_sign', true);
    }
}