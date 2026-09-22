function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue === '') {
        return;
    }
    var location = newValue;
	//checked in visitor based on location - location changed - update request for 
    var gaCheckedInVisitors = new GlideAjax('VisitorClientScriptHelper');
    gaCheckedInVisitors.addParam('sysparm_name', 'getCheckedInVisitors');
    gaCheckedInVisitors.addParam('sysparm_location', location);
    gaCheckedInVisitors.getXMLAnswer(function(response) {
        var visitorsList = JSON.parse(response).join();
        g_form.setValue('filtered_visitor_list', visitorsList);
    });

    //based on location config , badge type validation 
    var gaLocationConfig = new GlideAjax('IdentityClientScriptHelper');
    gaLocationConfig.addParam('sysparm_name', 'getLocationConfig');
    gaLocationConfig.addParam('sysparm_location', location);
    gaLocationConfig.getXMLAnswer(getResponse);

    function getResponse(response) {
        if (response) {
            var answer = JSON.parse(response);
            if (answer["mc_enabled"] == "1" || answer["mc_enabled"] == 1) {
                g_form.addOption('badge_type', 'mobile_cred', 'Mobile Credentials');
                g_form.setValue('sub_type',answer["sub_type"] );
                g_form.setValue('nfc_system',answer["nfc_system"] );
                g_form.setValue('web_prov',answer["web_prov"]);
            } else {
                g_form.removeOption('badge_type', 'mobile_cred');
            }
        } else {
            g_form.removeOption('badge_type', 'mobile_cred');
        }
    }
}