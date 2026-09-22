function onLoad() {
    var if_kiosk = g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin')|| g_user.hasRoleExactly('x_aleen_snguardian.host');
    if (!if_kiosk) {
        g_form.setDisplay('host_email', false);
        // g_form.setMandatory('host_email', true);
        g_form.setMandatory('host_s', true);
        g_form.setDisplay('escort', false);
    } else {
        g_form.setDisplay('host_email', false);
        g_form.setDisplay('host_s', true);
        g_form.setMandatory('host_s', true);
        g_form.setDisplay('escort', true);
    }
}