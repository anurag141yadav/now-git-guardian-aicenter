function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var accessAjax = new GlideAjax("IdentityClientScriptHelper");
    accessAjax.addParam('sysparm_name', 'populateAssociatedAsset');
    accessAjax.addParam('sysparm_identity', g_service_catalog.parent.getValue("request_for"));
    accessAjax.addParam("sysparm_accessloc", g_form.getValue("access_level"));
    accessAjax.getXMLAnswer(callback);

    function callback(response) {
        if (response) {
            var parsedResponse = JSON.parse(response);
            if (parsedResponse["associated-asset"] == "true") {
                g_form.setReadOnly("associated_asset", false);
                g_form.setDisplay("associated_asset", true);
                var assetList = parsedResponse["assetList"];
                var assetListLength = assetList.length;
                if (assetListLength == 0) {
                    g_form.addOption("associated_asset", "NEW", "NEW");
                }
                for (var index = 0; index < assetListLength; index++) {
                    g_form.addOption("associated_asset", assetList[index]["id"], assetList[index]["number"]);
                }
            } else {
                g_form.setReadOnly("associated_asset", true);
                g_form.setDisplay("associated_asset", false);
                g_form.clearOptions("associated_asset");
                g_form.clearValue("associated_asset");
                g_form.addOption("associated_asset", "", "");
            }
        } else {
            g_form.setReadOnly("associated_asset", true);
            g_form.setDisplay("associated_asset", false);
            g_form.clearOptions("associated_asset");
            g_form.clearValue("associated_asset");
            g_form.addOption("associated_asset", "", "");
        }
    }
}