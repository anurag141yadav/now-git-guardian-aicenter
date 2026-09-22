function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    } else {
        var timePart = newValue.split(' ')[1];
        var startTime = g_form.getValue('start_hours');

        var enteredTime = new Date(`1970-01-01T${timePart}`);
        var startTimeObj = new Date(`1970-01-01T${startTime}`);

        if (enteredTime < startTimeObj) {
            g_form.setValue('visit_start_date', '');
            g_form.showFieldMsg('visit_start_date', 'The time cannot be earlier than the Start Hours ' + startTime);
        }
		return;
    }

}