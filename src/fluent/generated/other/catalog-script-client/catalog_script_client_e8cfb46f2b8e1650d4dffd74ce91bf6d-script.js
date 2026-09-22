function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }
    var email = newValue;
    g_form.hideFieldMsg('visit_visitor_single_email', true);
    var location = g_form.getValue("visit_location");
    if (location != null && (email != null && email != "")) {
        var gaWatchlistVisitor = new GlideAjax('VisitorClientScriptHelper');
        gaWatchlistVisitor.addParam('sysparm_name', 'checkIfWatchlistByData');
        gaWatchlistVisitor.addParam('sysparm_location', location);
        gaWatchlistVisitor.addParam('sysparm_email', email);
        gaWatchlistVisitor.getXMLAnswer(getResponse);
    }
}

function getResponse(response) {
    if (response == 'true' || response == true) {
        g_form.showFieldMsg('visit_visitor_single_email', " ✉ Email found in the watchlist");
        g_form.setValue('found_in_watchlist', "Yes");
    } else {
        g_form.hideFieldMsg('visit_visitor_single_email');
        g_form.setValue('found_in_watchlist', "No");
        g_form.clearMessages();
    }
}