function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }
    var firstName = newValue;
    g_form.hideFieldMsg('visit_visitor_single_first_name', true);
    var lastName = g_form.getValue("visit_visitor_single_last_name");
    var location = g_form.getValue("visit_location");
    if (location != null && (firstName != null && lastName != null && firstName != "" && lastName != "")) {
        var gaWatchlistVisitor = new GlideAjax('VisitorClientScriptHelper');
        gaWatchlistVisitor.addParam('sysparm_name', 'checkIfWatchlistByData');
        gaWatchlistVisitor.addParam('sysparm_location', location);
        gaWatchlistVisitor.addParam('sysparm_firstname', firstName);
        gaWatchlistVisitor.addParam('sysparm_lastname', lastName);
        gaWatchlistVisitor.getXMLAnswer(getResponse);
    }
}

function getResponse(response) {
    if (response == 'true' || response == true) {
        g_form.showFieldMsg('visit_visitor_single_first_name', " ℹ️ Name found in the watchlist");
        g_form.setValue('found_in_watchlist', "Yes");
    } else {
		g_form.hideFieldMsg('visit_visitor_single_first_name');
		g_form.setValue('found_in_watchlist', "No");
        g_form.clearMessages();
    }
}