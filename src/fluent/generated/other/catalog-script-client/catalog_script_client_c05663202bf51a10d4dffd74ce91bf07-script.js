function onLoad() {
    g_form.setValue('request_type', g_form.getUniqueValue());
    g_form.setDisplay('request_type', false);

    var location = localStorage.getItem('visitor-location');
    if (location) {
        var locationObj = JSON.parse(location);
        var locationSysId = locationObj.sys_id;
        g_form.setValue('visit_location', locationSysId);
    }

	// Kiosk existing visitor detail pre-populated
	var visitorDetails = localStorage.getItem('prePopulatedVisitDetails')?JSON.parse(localStorage.getItem('prePopulatedVisitDetails')):{};
	if(visitorDetails){
		g_form.setValue('visit_type',visitorDetails.visitType);
		if(visitorDetails.visSysId){
			g_form.setValue('visit_visitor_single_visitor_id',visitorDetails.visSysId);
		}else if(!visitorDetails.existing_visitor){
			g_form.addOption('visit_visitor_single_visitor_id', 'CREATE', '-- Create a new Visitor --', 0);
			g_form.setValue('visit_visitor_single_visitor_id','CREATE');
			if(visitorDetails.first_name){
				g_form.setValue('visit_visitor_single_first_name', visitorDetails.first_name);
				g_form.setValue('visit_visitor_single_last_name', visitorDetails.last_name);
			}
		}
	}
	localStorage.removeItem('prePopulatedVisitDetails');

    // variable sets
    g_form.setDisplay('visit_visitor_details', false);
    g_form.setDisplay('visit_visitor_mrvs', false);
    g_form.setDisplay('visit_recurrence_selector', false);

	var _window = window ? window : this.window;
    var urlParams = new URLSearchParams(_window.location.search);
	var source= urlParams.get('source');
	if(source=='kiosk'){
		g_form.setValue('is_kiosk_user','Yes');
	}else{
		g_form.setValue('is_kiosk_user','No');
	}
}