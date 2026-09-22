function onLoad() {
    g_form.setValue('request_type', g_form.getUniqueValue());
    g_form.setDisplay('request_type', false);

	var location = localStorage.getItem('visitor-location');
    if (location) {
        var locationObj = JSON.parse(location);
        var locationSysId = locationObj.sys_id;
        g_form.setValue('location', locationSysId);
    }

}