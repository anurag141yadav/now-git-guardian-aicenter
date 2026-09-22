function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	//esc portal
	var gaAssociatedAsset = new GlideAjax("IdentityClientScriptHelper");
	gaAssociatedAsset.addParam('sysparm_name', 'populateAssociatedAsset');
	gaAssociatedAsset.addParam('sysparm_identity', g_service_catalog.parent.getValue("request_for"));
	gaAssociatedAsset.addParam("sysparm_accessloc", g_form.getValue("access_level"));
	gaAssociatedAsset.getXMLAnswer(callback);

	function callback(response) {
		if (response) {
			var parsedResponse = JSON.parse(response);
			if (parsedResponse["associated-asset"] == "true") {
				g_form.setDisplay("associated_asset", true);
				var assetList = parsedResponse["assetList"];
				for (var index = 0; index < assetList.length; index++) {
					g_form.addOption("associated_asset", assetList[index]["id"], assetList[index]["number"]);
				}
			} else {
				g_form.setDisplay("associated_asset", false);
				g_form.clearOptions("associated_asset");
				g_form.clearValue("associated_asset");
				g_form.addOption("associated_asset","","");
			}
		}
	}
}