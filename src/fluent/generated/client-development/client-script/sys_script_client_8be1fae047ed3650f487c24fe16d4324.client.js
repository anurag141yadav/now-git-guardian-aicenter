function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var identity = g_form.getValue("identity");
    if (identity) {
        var gaGetAsset = new GlideAjax("ClientServerRelay");
        gaGetAsset.addParam("sysparm_name", "getAsset");
        gaGetAsset.addParam("sysparm_asset_sys_id", g_form.getValue("asset"));
        gaGetAsset.getXMLAnswer(checkAsset);
    } else {
        g_form.clearValue("asset");
        g_form.addErrorMessage("Please select Identity first as assets are location based");
    }

    function checkAsset(response) {
        try {
            var asset = JSON.parse(response);
            if (asset.type == g_scratchpad.mc_type) {
                if (g_scratchpad.mc_supported == true) {
                    if (asset.sub_type != g_scratchpad.mc_subtype) {
                        g_form.clearValue("asset");
                        g_form.addErrorMessage("Selected Subtype is not supported at user's location");
                    }
                } else {
                    g_form.clearValue("asset");
                    g_form.addErrorMessage("Mobile Credentials are not supported for user's location.");
                }
            }
        } catch (e) {

        }
    }
}