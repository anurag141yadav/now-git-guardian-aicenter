function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var gaSystemFeature = new GlideAjax("ClientServerRelay");
    gaSystemFeature.addParam('sysparm_name', 'checkSystemFeatureFromCode');
    gaSystemFeature.addParam('sysparm_system', g_form.getValue("system"));
    gaSystemFeature.addParam('sysparm_feature', "MOBILE-CREDENTIAL-SERVER");
    gaSystemFeature.getXMLAnswer(callback);

    function callback(response) {
        try {
            if (response || response == "true") {
                g_form.clearValue("system");
                g_form.addErrorMessage("System is based on asset subtype, you cannot assign Mobile Credential System directly to user");
            }
        } catch (e) {
        }
    }
}