function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var action = g_form.getValue('select_action');
    var identity = newValue;
    var location = g_form.getValue('location');

    //check if active badge : issue badge (not able to submit if yes) ; return badge( not able to submit if no)
    var gaCheckActiveBadges = new GlideAjax('IdentityClientScriptHelper');
    gaCheckActiveBadges.addParam('sysparm_name', 'checkActiveBadges');
    gaCheckActiveBadges.addParam('sysparm_identity', identity);
    //type?? :::: only temp/ mobile cred or ALL 
    gaCheckActiveBadges.getXMLAnswer(getResponse);

    function getResponse(response) {
        if (response == 'true' || response == true) {
            g_form.setValue('found_active_badges', "Yes");
        } else {
            g_form.setValue('found_active_badges', "No");
        }
    }

    //if issue badge - change fields based on identity type
    if (action == 'issue_badge') {
        var gaCheckIfVisitor = new GlideAjax('IdentityClientScriptHelper');
        gaCheckIfVisitor.addParam('sysparm_name', 'checkIfVisitor');
        gaCheckIfVisitor.addParam('sysparm_identity', identity);
        gaCheckIfVisitor.getXMLAnswer(getAnswer);
    }

    function getAnswer(answer) {
        if (answer == 'true' || answer == true) {
            var gaVisitValidity = new GlideAjax('VisitorClientScriptHelper');
            gaVisitValidity.addParam('sysparm_name', 'getVisitValidity');
            gaVisitValidity.addParam('sysparm_location', location);
            gaVisitValidity.addParam('sysparm_identity', identity);
            gaVisitValidity.getXMLAnswer(getResultObj);

            g_form.setValue('reason', 'scheduled_visit');
            g_form.setReadOnly('reason', true);
            g_form.setDisplay('deactivate_exisiting_badge', false);
            g_form.setValue('deactivate_exisiting_badge', "No");

        } else {
            g_form.setReadOnly('reason', false);
            g_form.setValue('reason', 'forget');
            g_form.setDisplay('deactivate_exisiting_badge', true);
            //24 hrs validity 
            var gaBadgeValidity = new GlideAjax('IdentityClientScriptHelper');
            gaBadgeValidity.addParam('sysparm_name', 'getBadgeValidity');
            gaBadgeValidity.addParam('sysparm_location', location);
            gaBadgeValidity.getXMLAnswer(getResult);
        }
    }

    function getResultObj(response) {
        try {
            var responseObject = JSON.parse(response);
            if (responseObject.valid_from) {
                g_form.setValue('valid_from', responseObject.valid_from.trim());
            }
            if (responseObject.valid_to) {
                g_form.setValue('valid_to', responseObject.valid_to.trim());
            }
        } catch (e) {
            console.error('Failed to parse response:', e);
        }
    }

    function getResult(response) {
        try {
            var responseObj = JSON.parse(response);
            if (responseObj.valid_from) {
                g_form.setValue('valid_from', responseObj.valid_from);
            }
            if (responseObj.valid_to) {
                g_form.setValue('valid_to', responseObj.valid_to);
            }
        } catch (error) {
            console.error('Error parsing response or setting form values:', error);
        }
    }

}