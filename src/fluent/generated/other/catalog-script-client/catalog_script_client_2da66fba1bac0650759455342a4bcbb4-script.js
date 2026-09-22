function onLoad() {
    var isBadgeAdmin = g_user.hasRoleExactly('x_aleen_snguardian.badging_officer');
    if (isBadgeAdmin) {
        g_form.setReadOnly('assets', false);
        g_form.setDisplay('systems', false);
        g_form.setDisplay('access_levels', false);
    } else {
        g_form.setReadOnly('assets', true);
        g_form.setDisplay('systems', false);
        g_form.setDisplay('access_levels', false);
    }
}