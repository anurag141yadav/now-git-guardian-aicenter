function onLoad() {

    g_form.setDisplay("existing_access_levels", false);

    g_form.setValue('request_type', g_form.getUniqueValue());
    g_form.setDisplay('request_type', false);
    //Update location and identity on load
    var gaGetIdentity = new GlideAjax('IdentityClientScriptHelper');
    gaGetIdentity.addParam('sysparm_name', 'getIdentityFromLoggedInUser');
    gaGetIdentity.addParam('userId', g_user.userID);
    gaGetIdentity.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
        try {
            var responseObj = JSON.parse(response);
            if (responseObj.identity.identityId) {
                g_form.setValue("request_for",responseObj.identity.identityId ? responseObj.identity.identityId : "");
            } else {
                g_form.showFieldMsg("request_for", "Please select user manually");
            }
            if (responseObj.identity.locationId) {
                g_form.setValue("location", responseObj.identity.locationId);
            } else {
                g_form.showFieldMsg("request_for", "Please provide location to user");
            }
            if (responseObj["existing_access_levels"]) {
				g_form.setValue("existing_access_levels",JSON.stringify(responseObj.existing_access_levels));
            }
			if(responseObj.identity.location_badge_technology){
				g_form.setValue('default_badge_technology',responseObj.identity.location_badge_technology);
			}
			if(responseObj["existing_access_location"]){
				g_form.setValue("existing_access_mrvs",JSON.stringify(responseObj["existing_access_location"]));
			}if(responseObj["NONE"]){
				localStorage.setItem("NONE",responseObj["NONE"]);
			}
        } catch (e) {
            g_form.showFieldMsg("request_for", "Please select user manually");
        }
    }
    //end
}