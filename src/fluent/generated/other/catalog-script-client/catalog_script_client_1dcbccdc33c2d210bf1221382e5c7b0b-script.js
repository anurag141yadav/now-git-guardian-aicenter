function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var start_date = g_form.getValue('recurring_start_date'); //getValue, getDisplay?
    var end_date = new Date(newValue);
	end_date.setHours(0, 0, 0, 0);
    if (start_date) {
        var date = new Date(start_date);
		date.setHours(0, 0, 0, 0);
        if (end_date < date) {
			g_form.setValue('recurring_end_date', '');
            g_form.showFieldMsg('recurring_end_date','End Date cannot be earlier than start date');
            
        }
    } else {
		g_form.setValue('recurring_end_date', '');
        g_form.showFieldMsg('recurring_end_date','Please enter start date');
		
    }

}