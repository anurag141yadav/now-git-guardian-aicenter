function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	var visitorType = newValue;
	if (visitorType.toLowerCase().includes("vip") || visitorType.toLowerCase().includes("govt") || visitorType.toLowerCase().includes("fnf")) {
		//g_form.setDisplay('visitor_secondary_details',true);
		//g_form.setDisplay('visitor_id_details',false);
		g_form.setDisplay('id_verification_date', false);
		g_form.setDisplay('id_verification_document', false);
		g_form.setDisplay('id_verification_expires_on', false);
	}else {
		//g_form.setDisplay('visitor_secondary_details',true);
		g_form.setDisplay('id_verification_date', true);
		g_form.setDisplay('id_verification_document', true);
		g_form.setDisplay('id_verification_expires_on', true);
	}
}