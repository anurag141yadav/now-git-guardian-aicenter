function onLoad() {
    var access = g_form.getValue('access_level');
    var gaSystemFeature = new GlideAjax('x_aleen_snguardian.ClientServerRelay');
    gaSystemFeature.addParam('sysparm_name', 'checkSystemFeature');
    gaSystemFeature.addParam("isAccessLocation", true);
    gaSystemFeature.addParam('access_level', access);
    gaSystemFeature.getXMLAnswer(getResponse);

    function getResponse(result) {
        try {
            if (result) {
                var response = JSON.parse(result);
                if (response && response["associated-asset"] == true || response["associated-asset"] == "true") {
					g_form.setReadOnly("associated_asset",false);
					g_form.setDisplay("associated_asset", true);
                } else {
                    g_form.setDisplay("associated_asset", false);
					g_form.setReadOnly("associated_asset",true);
                }
            } else {
                g_form.setDisplay("associated_asset", false);
				g_form.setReadOnly("associated_asset",true);
            }
        } catch (e) {
            g_form.setDisplay("associated_asset", false);
			g_form.setReadOnly("associated_asset",true);
        }
    }
}