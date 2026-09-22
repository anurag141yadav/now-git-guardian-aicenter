function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return; 
    }
	var location = g_form.getValue('identity_location');
	var gaIdentityLocation = new GlideAjax('IdentityClientScriptHelper');
	gaIdentityLocation.addParam('sysparm_name','getLocationBasedIdentities');
	gaIdentityLocation.addParam('sysparm_location',location);
	gaIdentityLocation.getXMLAnswer(function(response){
		var identitiesList = JSON.parse(response).join();
		g_form.setValue('location_filtered_identities',identitiesList);
	});
    //Type appropriate comment here, and begin script below

}