function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }
    g_form.hideFieldMsg('visit_visitor_single_last_name', true);
    var lastName = newValue;
    var firstName = g_form.getValue("visit_visitor_single_first_name");
    var location = g_form.getValue("visit_location");
    if (location != null && (firstName != null && lastName != null && firstName != "" && lastName != "")) {
        var gaCheckWatchlist = new GlideAjax('VisitorClientScriptHelper');
        gaCheckWatchlist.addParam('sysparm_name', 'checkIfWatchlistByData');
        gaCheckWatchlist.addParam('sysparm_location', location);
        gaCheckWatchlist.addParam('sysparm_firstname', firstName);
        gaCheckWatchlist.addParam('sysparm_lastname', lastName);
        gaCheckWatchlist.getXMLAnswer(getResponse);
    }
}

function getResponse(response) {
    if (response == 'true' || response == true) {
        g_form.showFieldMsg('visit_visitor_single_last_name', " ℹ️ Name found in the watchlist");
        g_form.setValue('found_in_watchlist', "Yes");
    } else {
		g_form.hideFieldMsg('visit_visitor_single_last_name');
		g_form.setValue('found_in_watchlist', "No");
        g_form.clearMessages();
    }
}