function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    var start_time = newValue;
	if(!regex.test(start_time)){
		g_form.showFieldMsg('recurring_start_time','Please enter time in valid 24 hr format HH:mm:ss');
	}
	

}