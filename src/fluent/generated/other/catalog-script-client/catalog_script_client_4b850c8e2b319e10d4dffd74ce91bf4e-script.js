function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    if (newValue == 'Yes') {

		g_form.setMandatory('recurring_end_date', true);
		g_form.setMandatory('recurring_start_date', true);
		g_form.setMandatory('recurring_end_time', true);
		g_form.setMandatory('recurring_start_time', true);

		g_form.setMandatory('visit_start_date', false);
		g_form.setMandatory('visit_end_date', false);

        g_form.showFieldMsg("recurring_start_date", "Date & Time are specific to the Location TZ", "info");
        g_form.setDisplay('visit_recurring_type', true);
        g_form.setDisplay('recurring_start_date', true);
        g_form.setDisplay('recurring_start_time', true);
        g_form.setDisplay('recurring_end_date', true);
        g_form.setDisplay('recurring_end_time', true);
        g_form.setDisplay('visit_start_date', false);
        g_form.setDisplay('visit_end_date', false);
        //g_form.setDisplay('visit_all_day_long', true);
        g_form.setDisplay('visit_recurrence_selector', true);
        g_form.setDisplay('select_recurrence', true);
        g_form.setDisplay('recurring_value', false);
		
    } else {

		g_form.setMandatory('recurring_start_date', false);
		g_form.setMandatory('recurring_end_date', false);
		g_form.setMandatory('recurring_start_time', false);
		g_form.setMandatory('recurring_end_time', false);

		g_form.setMandatory('visit_start_date', true);
		g_form.setMandatory('visit_end_date', true);

        g_form.setDisplay('visit_recurring_type', false);
        g_form.setDisplay('recurring_start_date', false);
        g_form.setDisplay('recurring_start_time', false);
        g_form.setDisplay('recurring_end_date', false);
        g_form.setDisplay('recurring_end_time', false);
        g_form.setDisplay('visit_start_date', true);
        g_form.showFieldMsg("visit_start_date", "All dates and times are displayed in the selected location's time zone.", "info");
        g_form.setDisplay('visit_end_date', true);
        //g_form.setDisplay('visit_all_day_long', false);
        g_form.setDisplay('visit_recurrence_selector', false);

    }

}