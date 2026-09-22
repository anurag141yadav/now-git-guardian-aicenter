function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

	g_form.clearValue('system_based_badges');
	g_form.clearValue('default_badge_technology');
	g_form.clearValue('new_badge_required');

	g_form.clearValue("new_access_levels");
    var gaUserAccLoc = new GlideAjax('IdentityClientScriptHelper');
    gaUserAccLoc.addParam('sysparm_name', 'getIdentityAccessAndLocation');
    gaUserAccLoc.addParam('userId', newValue);
    gaUserAccLoc.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
        try {
            var responseObj = JSON.parse(response);
            if (responseObj.identity.locationId) {
                g_form.setValue("location", responseObj.identity.locationId);
            }
			if(responseObj.identity.location_badge_technology){
				g_form.setValue('default_badge_technology',responseObj.identity.location_badge_technology);
			}
            if (responseObj.existing_access_levels) {
                g_form.setValue('existing_access_levels', JSON.stringify(responseObj.existing_access_levels));
            }
            if(responseObj["existing_access_location"]){
				g_form.setValue("existing_access_mrvs",JSON.stringify(responseObj["existing_access_location"]));
			}
        } catch (e) {

        }
    }

}