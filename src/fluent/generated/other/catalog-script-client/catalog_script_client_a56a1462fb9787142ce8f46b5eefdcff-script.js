function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.hideFieldMsg('badge_id');
	g_form.clearOptions('badge_id');
    var gaUserAssets = new GlideAjax('IdentityClientScriptHelper');
    gaUserAssets.addParam('sysparm_name', 'getUserAssets');
    gaUserAssets.addParam('userId', newValue);
    gaUserAssets.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
	var badge_resp = [];
        //g_form.setValue('assets', response);
        var data = JSON.parse(response);
        if (data.length < 1) {
            g_form.showFieldMsg('badge_id', "No badges Found");
        } else {
            var activebadges = false;
            for (var bi = 0; bi < data.length; bi++) {
		alert(data[bi].asset_type);
		if (data[bi].asset_status_code != 'INACTIVE' && 
					(data[bi].asset_type != "MOBILE_CREDENTIAL" && data[bi].asset_type != "WATCH_CREDENTIAL") && 
					data[bi].asset_identifier != " ") {
	            alert(data[bi].asset_status_code);
		    badge_resp.push(data[bi]);
                    g_form.addOption('badge_id', data[bi].id, data[bi].asset_number);
                    activebadges = true;
                }
            }
	    g_form.setValue("assets",JSON.stringify(badge_resp));
            if (!activebadges) {
                g_form.showFieldMsg('badge_id', "No active badges found  to deactivate");
            }
        }
    }

}