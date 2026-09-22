function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '' || newValue == 0) {
        return;
    }
	var emptyEmail = false;
    var mrvs = g_form.getValue('identity_details');
    var mrvsData = mrvs === '' ? [] : JSON.parse(mrvs);
    var emails = [];
    for (var j = 0; j < mrvsData.length; j++) {
		if(mrvsData[j].email.trim()==""){
			emptyEmail = true;
		}else{
			emails.push(mrvsData[j].email.trim());
		}
    }
    var gaCheckEmail = new GlideAjax('IdentityClientScriptHelper');
    gaCheckEmail.addParam('sysparm_name', 'checkEmailsPresent');
    gaCheckEmail.addParam('sysparm_emails', emails.join());
    gaCheckEmail.getXMLAnswer(function(response) {
        var foundEmails = response === '' ? [] : JSON.parse(response);
        var notFoundEmails = [];
        var allEmails = emails;
        for (var i = 0; i < allEmails.length; i++) {
            if (foundEmails.indexOf(allEmails[i]) == -1) {
                notFoundEmails.push(allEmails[i]);
            }
        }
		if(emptyEmail){
			g_form.showFieldMsg('identity_details','Some emails are empty');
			g_form.setValue('able_to_submit','No');
		}
        if (notFoundEmails.length) {
			g_form.showFieldMsg('identity_details',"Following user(s) don't exist : "+notFoundEmails.join());
			g_form.setValue('able_to_submit','No');
        }
    });

    //Type appropriate comment here, and begin script below

}