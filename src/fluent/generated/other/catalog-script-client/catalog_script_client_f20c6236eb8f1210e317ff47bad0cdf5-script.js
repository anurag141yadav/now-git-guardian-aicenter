function onSubmit() {
    if (g_form.getValue('able_to_submit').toLowerCase() == 'no' 
		|| g_form.getValue('able_to_submit').toLowerCase() === 'no' 
		|| g_form.getValue('able_to_submit')==false
		|| g_form.getValue('able_to_submit')=='false') {
		g_form.addErrorMessage("Some Users fails in Pre-validation");
        return false;
    }
	else{
		return true;
	}
    //Type appropriate comment here, and begin script below

}