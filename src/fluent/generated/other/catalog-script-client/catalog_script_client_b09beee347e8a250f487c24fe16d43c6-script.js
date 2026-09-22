function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    } else {
        var gaValidateUserEmail = new GlideAjax('IdentityClientScriptHelper');
        gaValidateUserEmail.addParam('sysparm_name', 'validateUserAndLocationMobileCred');
        gaValidateUserEmail.addParam('request_for', newValue);
        gaValidateUserEmail.addParam('checkEmail', "true");

        gaValidateUserEmail.getXMLAnswer(function(response) {
            var resp = JSON.parse(response);
            if (resp.email) {
                var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                var valid = emailPattern.test(resp.email);
				if(valid && resp.hasLocation == true && resp.hasPhoto == true && resp.mc_enabled == true){
					g_form.setValue("isvalidrequest",true);
					if(resp.web_prov){
						g_form.setValue('web_provision','Yes');
					}else{
						g_form.setValue('web_provision','No');
					}
				}else{
					g_form.setValue("isvalidrequest",false);
					if(!resp.mc_enabled){
						g_form.addErrorMessage("User Location does not support Mobile Credentials");
					}
				}
			}
        });

    }

    //Type appropriate comment here, and begin script below

}