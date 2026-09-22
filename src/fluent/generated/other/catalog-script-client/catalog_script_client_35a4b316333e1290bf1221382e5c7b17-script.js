function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var email = newValue;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!regex.test(email)) {
        g_form.clearValue('visit_visitor_email');
        g_form.showFieldMsg('visit_visitor_email', 'invalid email', 'error');
    } else {
        g_form.clearMessages();
    }

}