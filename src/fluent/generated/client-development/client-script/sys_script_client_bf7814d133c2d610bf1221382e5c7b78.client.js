function onLoad() {
    if (g_form.isNewRecord()) {
        g_form.setMandatory('first_name', true);
        g_form.setMandatory('last_name', true);
        g_form.setMandatory('email', true);
    } else {
        g_form.setReadOnly('email', true);
    }

    if (g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin') || g_user.hasRoleExactly('x_aleen_snguardian.admin') || g_user.hasRoleExactly('admin')) {
        g_form.setDisplay('visitor_status', true);
        g_form.setDisplay('identity_validation_type', true);
        g_form.setDisplay('identity_validation_date', true);
        g_form.setDisplay('identity_validation_expires_on', true);
        g_form.setDisplay('watch_list', true);
    } else {
		g_form.setDisplay('visitor_status', false);
        g_form.setDisplay('identity_validation_type', false);
        g_form.setDisplay('identity_validation_date', false);
        g_form.setDisplay('identity_validation_expires_on', false);
        g_form.setDisplay('watch_list', false);
    }

}