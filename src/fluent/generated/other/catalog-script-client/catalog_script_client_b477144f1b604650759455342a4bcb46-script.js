function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	g_form.hideFieldMsg('badge_id');
    var gaUserAssets = new GlideAjax('IdentityClientScriptHelper');
    gaUserAssets.addParam('sysparm_name', 'getUserAssets');
    gaUserAssets.addParam('userId', newValue);
    gaUserAssets.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
        g_form.setValue('assets', response);
        var data = JSON.parse(response);
        if (data.length < 1) {
            g_form.showFieldMsg('badge_id', "No badges Found");
        } else {
            var activebadges = false;
            for (var bi = 0; bi < data.length; bi++) {
                if (data[bi].asset_status_code == 'ACTIVE') {
                    g_form.addOption('badge_id', data[bi].id, data[bi].asset_number);
                    activebadges = true;
                }
            }
            if (!activebadges) {
                g_form.showFieldMsg('badge_id', "No active badges found  to replace");
            }
        }
    }
   


}