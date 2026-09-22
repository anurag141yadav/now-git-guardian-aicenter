function onLoad() {
    g_form.setValue('request_type', g_form.getUniqueValue());
    g_form.setDisplay('request_type', false);

    var _window = window ? window : this.window;
    var urlParams = new URLSearchParams(_window.location.search);
    g_form.setValue('visit_location', urlParams.get('locationId'));
    g_form.setValue('visit_id', urlParams.get('visitId'));
	var source= urlParams.get('source');
	if(source=='kiosk'){
		g_form.setValue('is_kiosk_user','Yes');
	}else{
		g_form.setValue('is_kiosk_user','No');
	}
}