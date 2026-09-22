function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var gaGroupName = new GlideAjax('VisitorClientScriptHelper');
    gaGroupName.addParam('sysparm_name', 'validateGroupName');
    gaGroupName.addParam('sysparm_group_name', newValue);    
    gaGroupName.addParam('sysparm_location', g_form.getValue('visit_location'));
    gaGroupName.getXMLAnswer(getResponse);
    function getResponse(response) {
        if (response == 'true') { // exisiting group name 
            g_form.clearValue('visit_visitor_group_name');
            g_form.showFieldMsg('visit_visitor_group_name', "group name already used");
        } else {
            g_form.clearMessages();
        }

    }

}