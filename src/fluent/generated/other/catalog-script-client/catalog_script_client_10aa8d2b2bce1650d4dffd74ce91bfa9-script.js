function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }
    var phone = newValue;
    g_form.hideFieldMsg('visit_visitor_single_phone', true);
    var location = g_form.getValue("visit_location");
    if (location != null && (phone != null && phone != "")) {
        var gaWatchlistVisitor = new GlideAjax('VisitorClientScriptHelper');
        gaWatchlistVisitor.addParam('sysparm_name', 'checkIfWatchlistByData');
        gaWatchlistVisitor.addParam('sysparm_location', location);
        gaWatchlistVisitor.addParam('sysparm_phone', phone);
        gaWatchlistVisitor.getXMLAnswer(getResponse);
    }
}

function getResponse(response) {
    if (response == 'true' || response == true) {
        g_form.showFieldMsg('visit_visitor_single_phone', " ☎ Phone found in the watchlist");
        g_form.setValue('found_in_watchlist', "Yes");
    } else {
		g_form.hideFieldMsg('visit_visitor_single_phone');
		g_form.setValue('found_in_watchlist', "No");
        g_form.clearMessages();
    }
}