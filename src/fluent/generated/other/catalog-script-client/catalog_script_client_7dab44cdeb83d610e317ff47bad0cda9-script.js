function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading ) {
        return;
    }
    var req_for = g_form.getValue('request_for');
    var previousMrvsString = g_form.getValue('identity_details') ? g_form.getValue('identity_details') : '';
	if(newValue==='' && previousMrvsString===''){
		return;
	}
    var previousMRVSData = previousMrvsString == '' ? [] : JSON.parse(previousMrvsString);
    var previousMRVSEmails = [];
    for (var idx = 0; idx < previousMRVSData.length; idx++) {
        previousMRVSEmails.push(previousMRVSData[idx].email);
    }
    var toBeAdded = [];
    var toBeDeleted = [];

    var newRequestFor = req_for.split(',');
    var previousRequestFor = g_form.getValue('deleted_requestees').split(',');

    for (var i = 0; i < newRequestFor.length; i++) {
        if (previousRequestFor.indexOf(newRequestFor[i]) == -1) {
            toBeAdded.push(newRequestFor[i]);
        }
    }
    for (var j = 0; j < previousRequestFor.length; j++) {
        if (newRequestFor.indexOf(previousRequestFor[j]) == -1) {
            toBeDeleted.push(previousRequestFor[j]);
        }
    }
    if (toBeAdded.length || toBeDeleted.length) {
        var gaIdenClientScriptHelper = new GlideAjax('IdentityClientScriptHelper');
        gaIdenClientScriptHelper.addParam('sysparm_name', 'getMultipleUserDetails');
        gaIdenClientScriptHelper.addParam('sysparm_users', toBeAdded.join());
        gaIdenClientScriptHelper.getXMLAnswer(addUsers);

        gaIdenClientScriptHelper = new GlideAjax('IdentityClientScriptHelper');
        gaIdenClientScriptHelper.addParam('sysparm_name', 'getMultipleUserDetails');
        gaIdenClientScriptHelper.addParam('sysparm_users', toBeDeleted.join());
        gaIdenClientScriptHelper.getXMLAnswer(deleteUsers);
    }

    function addUsers(response) {
        var usersData = JSON.parse(response);
        var userWithoutPhoto = "";
        for (var x = 0; x < usersData.length; x++) {
            if (previousMRVSEmails.indexOf(usersData[x].email) == -1) {
                if (usersData[x].photo == "true") {
                    previousMRVSData.push(usersData[x]);
                }else{
					userWithoutPhoto+=usersData[x].first_name+" "+usersData[x].last_name;
					if(x !==usersData.length -1){
						userWithoutPhoto+=",";
					}
				}
            }
        }
        g_form.setValue('identity_details', JSON.stringify(previousMRVSData));
        g_form.setValue('deleted_requestees', req_for);
        if (userWithoutPhoto!="") {
            alert("These users do not have photo which is mandatory " + userWithoutPhoto);
        }

    }

    function deleteUsers(response) {
        var usersData = JSON.parse(response);
        for (var x = 0; x < usersData.length; x++) {
            var presentIndex = previousMRVSEmails.indexOf(usersData[x].email);
            if (presentIndex != -1) {
                previousMRVSData = previousMRVSData.filter((_, index) => index !== presentIndex);
            }
        }
        g_form.setValue('identity_details', JSON.stringify(previousMRVSData));
        g_form.setValue('deleted_requestees', req_for);
    }
}