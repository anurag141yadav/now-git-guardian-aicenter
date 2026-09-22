function onLoad() {
    g_form.setValue('request_type', g_form.getUniqueValue());
    g_form.setDisplay('request_type', false);

	//role based locations--

	var location = localStorage.getItem('visitor-location');
    if (location) {
        var locationObj = JSON.parse(location);
        var locationSysId = locationObj.sys_id;
        g_form.setValue('visit_location', locationSysId);
    }
	
    // variable sets
    g_form.setDisplay('visit_visitor_details', false);
    g_form.setDisplay('visit_visitor_mrvs', false);
    g_form.setDisplay('visit_recurrence_selector', false);
	g_form.setDisplay('qr_code', false);
}