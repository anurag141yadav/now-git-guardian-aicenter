function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var gaUserDetails = new GlideAjax('IdentityClientScriptHelper');
    gaUserDetails.addParam('sysparm_name', 'getUserDetails');
    gaUserDetails.addParam('userId', g_form.getValue('request_for'));
    gaUserDetails.getXMLAnswer(userDatacallback);
    function userDatacallback(response) {
        var res = JSON.parse(response);
        g_form.setValue('first_name', res.first_name);
        g_form.setValue('last_name', res.last_name);
        g_form.setValue('phone', res.phone);
        g_form.setValue('type', res.type);
    }
}