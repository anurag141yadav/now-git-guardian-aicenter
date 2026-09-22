function onLoad() {
    var access = g_form.getValue('existing_access_level');
    var gaSystemFeature = new GlideAjax('x_aleen_snguardian.ClientServerRelay');
    gaSystemFeature.addParam('sysparm_name', 'checkSystemFeatureOfAccess');
    gaSystemFeature.addParam("isIdentityAccess", true);
    gaSystemFeature.addParam('access_level', access);
    gaSystemFeature.getXMLAnswer(getResponse);

    function getResponse(result) {
        try {
            if (result) {
                var response = JSON.parse(result);
                if (response && response["associated-asset"] == true || response["associated-asset"] == "true") {
                    g_form.setDisplay("existing_associated_asset", true);
                } else {
                    g_form.setDisplay("existing_associated_asset", false);
                }
            } else {
                g_form.setDisplay("existing_associated_asset", false);
            }
        } catch (e) {
            g_form.setDisplay("existing_associated_asset", false);
        }
    }
}