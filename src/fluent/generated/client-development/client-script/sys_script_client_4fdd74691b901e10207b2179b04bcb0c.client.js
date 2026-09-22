function onLoad() {
    if (g_form.isNewRecord() && !g_form.getValue("access_level")) {
        g_form.setDisplay("associated_asset", false);
    } else {
        var access = g_form.getValue('access_level');
        var gaSystemFeature = new GlideAjax('x_aleen_snguardian.ClientServerRelay');
        gaSystemFeature.addParam('sysparm_name', 'checkSystemFeature');
        gaSystemFeature.addParam('access_level', access);
        gaSystemFeature.getXMLAnswer(getResponse);
    }

    function getResponse(result) {
        var response = JSON.parse(result);
        if (response && response["associated-asset"] == true || response["associated-asset"] == "true") {
            g_form.setDisplay("associated_asset", true);
            g_form.setMandatory("associated_asset", true);
        } else {
            g_form.setDisplay("associated_asset", false);
            g_form.setMandatory("associated_asset", false);
        }
    }
}