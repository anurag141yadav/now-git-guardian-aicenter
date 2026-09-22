function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	var type = g_form.getValue('badge_type');
    if (newValue == 'issue_badge') {
        g_form.setDisplay('issue_badge_details', true);
		g_form.setMandatory('badge_type',true);
		if(type=='plastic'){
			g_form.setMandatory('badge_number',true);
		}

    } else {
		g_form.setMandatory('badge_number',false);
		g_form.setMandatory('badge_type',false);
        g_form.setDisplay('issue_badge_details', false);
    }


}