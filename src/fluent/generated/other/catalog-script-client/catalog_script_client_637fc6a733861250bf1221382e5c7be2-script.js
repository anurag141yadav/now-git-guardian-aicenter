function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var location = newValue;
    g_form.clearValue('lobby_config');
    g_form.hideFieldMsg('visit_visitor_attachment', true);
    g_form.hideFieldMsg('visit_location', true);
    g_form.hideFieldMsg('recurring_start_time', true);
    g_form.hideFieldMsg('visit_start_date', true);
    g_form.hideFieldMsg('recurring_end_time', true);
    g_form.hideFieldMsg('visit_end_date', true);
    if (location != null) {
        var gaLobbyConfig = new GlideAjax('VisitorClientScriptHelper');
        gaLobbyConfig.addParam('sysparm_name', 'getLobbyConfig');
        gaLobbyConfig.addParam('sysparm_location', location);
        gaLobbyConfig.getXMLAnswer(getResponse);

        var gaLocationData = new GlideAjax('VisitorClientScriptHelper');
        gaLocationData.addParam('sysparm_name', 'getLocationData');
        gaLocationData.addParam('sysparm_location', location);
        gaLocationData.getXMLAnswer(function(locationResponse) {
            g_form.setValue('location_data', locationResponse);
            var ldata = JSON.parse(locationResponse);
            var currentDate = new Date();
            var epochTime = currentDate.getTime();
            var gaGetDateInTz = new GlideAjax('VisitorClientScriptHelper');
            gaGetDateInTz.addParam('sysparm_name', 'getDateInTz');
            gaGetDateInTz.addParam('sysparm_datetimeepoch', epochTime);
            gaGetDateInTz.addParam('sysparm_targettimezone', ldata.time_zone);
            gaGetDateInTz.getXMLAnswer(getTZDataResponse);
        });
    }
}

function getTZDataResponse(tzresponse) {
    g_form.setValue('visit_start_date', tzresponse);
    var parts = tzresponse.split(" ");
    g_form.setValue('recurring_start_date', parts[0]);
    g_form.setValue('recurring_start_time', parts[1]);
    shoWFieldMessages();
}

function getResponse(response) {
    g_form.setValue('lobby_config', response);
    shoWFieldMessages();
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
			g_form.setValue('start_hours',responseObj.starthour);
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