function onSubmit() {
   if (g_form.getValue('is_processing_done')=="false") {
		g_form.addErrorMessage("Processing in progress...Please wait");
		return false;
	}   
}