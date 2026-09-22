function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	var visitorType = newValue;
	if (visitorType.toLowerCase().includes("vip") || visitorType.toLowerCase().includes("govt")) {
		g_form.setDisplay('visitor_image', false);
	}else{
		g_form.setDisplay('visitor_image', true);
	}   
}