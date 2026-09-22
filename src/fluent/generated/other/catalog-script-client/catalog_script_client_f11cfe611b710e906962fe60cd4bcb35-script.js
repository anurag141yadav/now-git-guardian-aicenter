function onSubmit() {
    //var regex = "/^[0-9]{4,6}$/";
    var pin = g_form.getValue("new_pin");
    if (pin.match(/^[0-9]{4,6}$/)) {
        return true;
    } else {
        alert("The PIN should consist of numeric digits and have a length of 4 to 6 characters.");
        return false;
    }
}