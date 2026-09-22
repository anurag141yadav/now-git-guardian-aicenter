function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var gaValidateEmail = new GlideAjax('VisitorClientScriptHelper');
    gaValidateEmail.addParam('sysparm_name', 'validateEmail');
    gaValidateEmail.addParam('sysparm_visitors', g_form.getValue('visit_visitor_mrvs'));
    gaValidateEmail.getXMLAnswer(getAnswer);

    var gaWatchlistVisitor = new GlideAjax('VisitorClientScriptHelper');
    gaWatchlistVisitor.addParam('sysparm_name', 'checkIfWatchlistByGroupData');
    gaWatchlistVisitor.addParam('sysparm_location', g_form.getValue('visit_location'));
    gaWatchlistVisitor.addParam('sysparm_visitors', g_form.getValue('visit_visitor_mrvs'));
    gaWatchlistVisitor.getXMLAnswer(getResponse);



}

function getResponse(response) {
    var responseObj = JSON.parse(response);
    if (responseObj.length) {
		var message = "Visitor(s) found in watchlist: "+ responseObj;
        g_form.showFieldMsg('visit_visitor_mrvs',message);
        g_form.setValue('found_in_watchlist', "Yes");
    } else {
        g_form.clearMessages();
    }
}

function getAnswer(response) {
    try {
        var result = JSON.parse(response);
        if (result.valid) {
            g_form.clearMessages();
        } else {
            var errorMsg = result.error || 'Invalid email format for visitor: ' + result.info;
            g_form.showFieldMsg('visit_visitor_mrvs', errorMsg);
        }
    } catch (e) {
        g_form.showFieldMsg('visit_visitor_mrvs', 'An unexpected error occurred. Please try again.');
    }
}