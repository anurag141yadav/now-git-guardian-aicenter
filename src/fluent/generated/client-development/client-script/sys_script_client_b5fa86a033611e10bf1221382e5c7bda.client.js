function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var visitorTypeValue = g_form.getValue('visitor_type');
    if (visitorTypeValue.toLowerCase().includes("vip") || visitorTypeValue.toLowerCase().includes("govt")) {
        g_form.setDisplay('photo', false);
        g_form.setDisplay('company', false);
        g_form.setDisplay('need_assistance', false);
		if (g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin') || g_user.hasRoleExactly('x_aleen_snguardian.admin') || g_user.hasRoleExactly('admin')) {
            g_form.setDisplay('visitor_status', false);
            g_form.setDisplay('identity_validation_type', false);
            g_form.setDisplay('identity_validation_date', false);
            g_form.setDisplay('identity_validation_expires_on', false);
            g_form.setDisplay('watch_list', false);
        }
    } else {
        g_form.setDisplay('photo', true);
        g_form.setDisplay('company', true);
        g_form.setDisplay('need_assistance', true);
        if (g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin') || g_user.hasRoleExactly('x_aleen_snguardian.admin') || g_user.hasRoleExactly('admin')) {
            g_form.setDisplay('visitor_status', true);
            g_form.setDisplay('identity_validation_type', true);
            g_form.setDisplay('identity_validation_date', true);
            g_form.setDisplay('identity_validation_expires_on', true);
            g_form.setDisplay('watch_list', true);
        }
    }
}