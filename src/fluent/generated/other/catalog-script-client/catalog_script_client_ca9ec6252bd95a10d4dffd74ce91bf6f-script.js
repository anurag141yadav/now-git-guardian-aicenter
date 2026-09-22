function onLoad() {
    var isBadgeAdmin = g_user.hasRoleExactly('x_aleen_snguardian.badging_officer');
	if (isBadgeAdmin) {
        g_form.setReadOnly('assets', false);
    } else {
        g_form.setReadOnly('assets', true);
    }

}