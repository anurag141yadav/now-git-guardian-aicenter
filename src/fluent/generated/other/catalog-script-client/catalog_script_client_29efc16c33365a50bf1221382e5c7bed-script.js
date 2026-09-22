function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    var email = newValue;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        g_form.clearValue('visit_visitor_single_email');
        g_form.showFieldMsg('visit_visitor_single_email', 'invalid email', 'error');
    } else {
        g_form.clearMessages();
        checkExistingVisitor(email);
    }

    function checkExistingVisitor(email) {
        var gaCheckExistingEmail = new GlideAjax('VisitorClientScriptHelper');
        gaCheckExistingEmail.addParam('sysparm_name', 'checkExisitingEmail');
        gaCheckExistingEmail.addParam('sysparm_email', email);
        gaCheckExistingEmail.getXMLAnswer(getResponse);
    }

    function getResponse(response) {
        if (!response) {
            g_form.showFieldMsg('visit_visitor_single_email', 'Error: Invalid response from server.', 'error');
            console.error('GlideAjax response is empty or undefined.');
            return;
        }
        if (response == 'true') {
            g_form.clearValue('visit_visitor_single_email');
            g_form.showFieldMsg('visit_visitor_single_email','The email entered is already associated with an existing visitor.Select from the Visitor dropdown.','error');
        }

    }
}