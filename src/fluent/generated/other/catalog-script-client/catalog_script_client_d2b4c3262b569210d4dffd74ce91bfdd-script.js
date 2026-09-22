function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var userRole = g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin') ? "LOBBYADMIN" : (g_user.hasRoleExactly('x_aleen_snguardian.kiosk') ? "KIOSK" : "");
    if (newValue != null) {
        var gaLobbyActionConfig = new GlideAjax('VisitorClientScriptHelper');
        gaLobbyActionConfig.addParam('sysparm_name', 'getLobbyActionConfig');
        gaLobbyActionConfig.addParam('sysparm_location', newValue);
        gaLobbyActionConfig.addParam('sysparm_role', userRole);
        gaLobbyActionConfig.addParam('sysparm_type', "WALKIN");
        gaLobbyActionConfig.getXMLAnswer(getLobbyActionResponse);

        var gaLobbyConfig = new GlideAjax('VisitorClientScriptHelper');
        gaLobbyConfig.addParam('sysparm_name', 'getLobbyConfig');
        gaLobbyConfig.addParam('sysparm_location', newValue);
        gaLobbyConfig.getXMLAnswer(getLobbyConfig);

        var gaLocationData = new GlideAjax('VisitorClientScriptHelper');
        gaLocationData.addParam('sysparm_name', 'getLocationData');
        gaLocationData.addParam('sysparm_location', newValue);
        gaLocationData.getXMLAnswer(function(locationResponse) {
            g_form.setValue('location_data', locationResponse);
            var ldata = JSON.parse(locationResponse);
            var currentDate = new Date();
            var epochTime = currentDate.getTime();
            var visitorTzClientHelper = new GlideAjax('VisitorClientScriptHelper');
            visitorTzClientHelper.addParam('sysparm_name', 'getDateInTz');
            visitorTzClientHelper.addParam('sysparm_datetimeepoch', epochTime);
            visitorTzClientHelper.addParam('sysparm_targettimezone', ldata.time_zone);
            visitorTzClientHelper.getXMLAnswer(getTZDataResponse);
        });


    }

    function getTZDataResponse(tzresponse) {
        g_form.setValue('visit_start_date', tzresponse);
        var parts = tzresponse.split(" ");
        g_form.setValue('recurring_start_date', parts[0]);
        g_form.setValue('recurring_start_time', parts[1]);
        // shoWFieldMessages();
    }

    function getLobbyActionResponse(response) {
        g_form.setValue('action_config', response);
    }

    function getLobbyConfig(response) {
        try {
            if (response) {
                g_form.setValue('lobby_config', response);
                var responseObj = JSON.parse(response);

                //check if host confirmation required
                if (responseObj.requireHostConfirmation === true || responseObj.requireHostConfirmation === "true") {
                    g_form.setValue('need_host_confirmation', 'Yes');
                    shoWFieldMessages();
                    g_form.setDisplay('nda_sign', false);
                    g_form.setDisplay('visitor_id_scan', false);
                    g_form.setDisplay('health_questions', false);
                    g_form.setDisplay('visitor_image', false);
                } else {
                    shoWFieldMessages();
                    g_form.setValue('need_host_confirmation', 'No');
                    //get lobby action config
                    var actionConfig = g_form.getValue('action_config');
                    var actionConfigObj = JSON.parse(JSON.parse(actionConfig));
                    //id_scan variable set - mandatory/ based on visitor status
                    if (actionConfigObj.idScan && actionConfigObj.idScan == "mandatory_every_time") {
                        g_form.setDisplay('visitor_id_scan', true);

                    }
                    // else {}

                    //health questionarre - mandatory / not required
                    if (actionConfigObj.healthQuestion && actionConfigObj.healthQuestion == "mandatory_every_time") {
                        g_form.setDisplay('health_questions', true);
                    } else {
                        g_form.setDisplay('health_questions', false);
                    }
                    //nda and sign 
                    if (actionConfigObj && actionConfigObj.ndaSign && actionConfigObj.ndaSign.indexOf("mandatory") != -1) {
                        g_form.setDisplay('nda_sign', true);
                    } else if (actionConfigObj && actionConfigObj.ndaSign && actionConfigObj.ndaSign.indexOf("not") != -1) {
                        g_form.setDisplay('nda_sign', false);
                    } else {
                        //processVisitNdaExpiry(visitDetails['nda_sign_expiry_date_time']);
                    }

					if (responseObj.visitorPhotoRequired == true || responseObj.visitorPhotoRequired == "true") {
                        g_form.setDisplay('visitor_image', true);
                    } else {
                        g_form.setDisplay('visitor_image', false);
                    }
                }
            } else {
                console.error("Empty response for lobby config.");
            }
        } catch (e) {
            console.error("Error processing lobby config: ", e, "Response: ", response);
        }
    }

}

function shoWFieldMessages() {
    var lobbyConfigData = g_form.getValue('lobby_config');
    /*
    	{
        "endhours": "18:00:00",
        "autoCheckoutTime": "19:00:00",
        "maxVisitHours": "6",
        "requireHostConfirmation": "true",
        "idScanType": "id_verification",
        "maxGroupSize": "3",
        "starthour": "10:00:00",
        "earlybirdTimeAllowed": "1970-01-01 00:30:00",
        "sysId": "0de7643f33ce1250bf1221382e5c7b7a"
    }*/
    var responseObj = JSON.parse(lobbyConfigData);
    if (responseObj) {
        g_form.hideFieldMsg('visit_visitor_attachment', true);
        g_form.hideFieldMsg('visit_location', true);
        g_form.hideFieldMsg('recurring_start_time', true);
        g_form.hideFieldMsg('visit_start_date', true);
        g_form.hideFieldMsg('recurring_end_time', true);
        g_form.hideFieldMsg('visit_end_date', true);

        if (responseObj.requireHostConfirmation && responseObj.requireHostConfirmation == "true") {
            g_form.setValue('need_host_confirmation', 'Yes');
            g_form.showFieldMsg('visit_location', "Requires Host Approval");
        } else {
            g_form.setValue('need_host_confirmation', 'No');
        }

        if (responseObj.starthour && responseObj.starthour != "") {
            g_form.setValue('start_hours', responseObj.starthour);
            g_form.showFieldMsg('recurring_start_time', " Visit hours begin at [ " + responseObj.starthour + " ]");
            g_form.showFieldMsg('visit_start_date', " Visit hours begin at [ " + responseObj.starthour + " ]");
        }

        if (responseObj.endhours && responseObj.endhours != "") {
            g_form.showFieldMsg('recurring_end_time', " Visit hours ends at [" + responseObj.endhours + " ]");
            g_form.showFieldMsg('visit_end_date', " Visit hours ends at [" + responseObj.endhours + " ]");
        }
        if (responseObj.maxGroupSize && responseObj.maxGroupSize != "") {
            g_form.showFieldMsg('visit_visitor_attachment', " Maximum allowed group size: [ " + responseObj.maxGroupSize + " ]");
        }
    }
}

function processVisitNdaExpiry(expiryDate) {
    if (expiryDate) {
        var gaCheckNdaExpiry = new GlideAjax('VisitorClientScriptHelper');
        gaCheckNdaExpiry.addParam('sysparm_name', 'compareFromCurrentTime');
        gaCheckNdaExpiry.addParam('sysparm_expiry', expiryDate);
        gaCheckNdaExpiry.getXMLAnswer(function(response) {
            if (response == "1") {
                g_form.showFieldMsg('visit_nda', " NDA Verification required");
                g_form.setDisplay('nda_sign', true);
            } else {
                g_form.setDisplay('nda_sign', false);
            }
        });
    } else {
        g_form.setDisplay('nda_sign', true);
    }
}