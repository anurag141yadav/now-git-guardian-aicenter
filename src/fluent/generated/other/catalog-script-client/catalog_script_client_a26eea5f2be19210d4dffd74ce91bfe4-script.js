function onLoad() {
    var is_lobby_admin = g_user.hasRoleExactly('x_aleen_snguardian.lobby_admin');
    if (is_lobby_admin) {
        g_form.setDisplay('visitor_visitor_status', true);
        g_form.setDisplay('id_verification_date', true);
        g_form.setDisplay('id_verification_document', true);
        g_form.setDisplay('id_verification_expires_on', true);
    } else {
        g_form.setDisplay('visitor_visitor_status', false);
        g_form.setDisplay('id_verification_date', false);
        g_form.setDisplay('id_verification_document', false);
        g_form.setDisplay('id_verification_expires_on', false);

    }
}