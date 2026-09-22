function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }
    g_form.hideFieldMsg('visit_visitor_single_visitor_id', true);
    if (newValue != '' && newValue != 'NEW' && newValue != 'CREATE') {
        g_form.setMandatory('visit_visitor_single_first_name', false);
        g_form.setMandatory('visit_visitor_single_last_name', false);
        g_form.setMandatory('visit_visitor_single_email', false);
        g_form.setMandatory('visitor_type', false);
        g_form.setDisplay('visit_visitor_details', false);
        //check if watchlisted user 
        var gaCheckWatchlist = new GlideAjax('VisitorClientScriptHelper');
        gaCheckWatchlist.addParam('sysparm_name', 'checkIfWatchlistByData');
        gaCheckWatchlist.addParam('sysparm_location', g_form.getValue('visit_location'));
        gaCheckWatchlist.addParam('sysparm_visitorid', g_form.getValue('visit_visitor_single_visitor_id'));
        gaCheckWatchlist.getXMLAnswer(getResponse);

        var gaVisitorData = new GlideAjax('VisitorClientScriptHelper');
        gaVisitorData.addParam('sysparm_name', 'getVisitorData');
        gaVisitorData.addParam('sysparm_visitor', g_form.getValue('visit_visitor_single_visitor_id'));
        gaVisitorData.getXMLAnswer(getVisitorResponse);

    } else if (newValue == '' || newValue == 'NEW' || newValue == 'CREATE') {
		g_form.setValue('found_in_watchlist', "No");
        g_form.setDisplay('visit_visitor_details', true);
        g_form.setMandatory('visit_visitor_single_first_name', true);
        g_form.setMandatory('visit_visitor_single_last_name', true);
        g_form.setMandatory('visit_visitor_single_email', true);
        g_form.setMandatory('visitor_type', true);

    }
}

function getVisitorResponse(responseVisitor) {
    if (!responseVisitor || responseVisitor.trim() === "") {
        console.error('No visitor data found.');
        return;
    }
    try {
        var responseObject = JSON.parse(responseVisitor);
        g_form.setValue('validation_input_data', responseVisitor);
        g_form.showFieldMsg('visit_visitor_single_visitor_id', ' Current Status is ' + responseObject['visitor_status.name']);
        g_form.setValue('metadata_visitor_status', responseObject['visitor_status.name']);

        //if request type == walkin??
        var request_type = g_form.getDisplayValue('request_type');
        if (request_type == 'Walk-in') {
            var lobbyActionConfig = g_form.getValue('action_config');
            var lobbyActionObj = JSON.parse(JSON.parse(lobbyActionConfig));
            if (lobbyActionObj.idScan && lobbyActionObj.idScan == "mandatory_every_time") {
                g_form.setDisplay('visitor_id_scan', true);
            } else {
                if (responseObject['visitor_status.code'] && responseObject['visitor_status.code'] == 'VERIFIED') {
                    g_form.setDisplay('visitor_id_scan', false);
                    g_form.setValue('is_visitor_verified', 'Yes');
                } else {
                    g_form.setDisplay('visitor_id_scan', true);
                }
            }
        }

    } catch (e) {
        console.error("JSON parse error: ", e.message);
    }
}


function getResponse(response) {
    if (response == 'true' || response == true) {
        g_form.showFieldMsg('visit_visitor_single_visitor_id', ' Visitor found in watchlist.');
        g_form.setValue('found_in_watchlist', "Yes");
        g_form.setValue('error_message', "Found in the WatchList");
    } else {
        g_form.setValue('found_in_watchlist', "No");
        g_form.clearMessages();
    }
}