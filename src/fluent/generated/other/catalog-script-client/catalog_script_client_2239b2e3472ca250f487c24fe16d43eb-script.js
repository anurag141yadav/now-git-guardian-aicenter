function onSubmit() {
	if(g_form.getValue("isvalidrequest")==true || g_form.getValue("isvalidrequest")=="true"){
		return true;
	}else{
		alert("Unable to proceed. Either no Location assigned or Location doesn't support Mobile Credentials or user details are incomplete. Verify Email and Photo before retrying.");
		return false;
	}
}