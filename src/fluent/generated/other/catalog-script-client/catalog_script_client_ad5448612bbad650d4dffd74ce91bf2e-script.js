function onSubmit() {
    //Type appropriate comment here, and begin script below
    var is_agreed = g_form.getValue('terms_and_conditions_agreed');
	// var action_config = g_form.getValue('action_config');
	// var actionConfig = JSON.parse(action_config);
	// var hostConfirmation = g_form.getValue('need_host_confirmation');
	//if (hostConfirmation == 'No' && actionConfig.ndaSign && actionConfig.ndaSign.includes('mandatory') && is_agreed == 'No' ) {    // TODO: nda expired case
    if (is_agreed == 'No' ) {
        g_form.addErrorMessage('Please agree to terms and conditions');
        return false;
    } 
}