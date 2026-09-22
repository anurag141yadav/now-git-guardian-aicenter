function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	var pin = newValue;
    if (pin.match(/^[0-9]{4,6}$/)) {
        g_form.hideFieldMsg("new_pin", true);
    } else {
        g_form.showFieldMsg("new_pin", "The PIN should consist of numeric digits and have a length of 4 to 6 characters.", "error");
    }

}