function onSubmit() {
	var allowedTime = g_form.getValue('able_to_submit')
	if(allowedTime.toLowerCase()!='submit' && allowedTime.toLowerCase()!="yes"){
		g_form.addErrorMessage('Check-In Restricted, Check-in will be available after '+allowedTime+'.');
		// location.reload();
		return false;
	}
   //Type appropriate comment here, and begin script below
   g_form.setDisplay('visit_checkin_success',true);
   
}