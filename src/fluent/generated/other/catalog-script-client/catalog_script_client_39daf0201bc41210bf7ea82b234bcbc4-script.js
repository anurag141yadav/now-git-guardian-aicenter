function onLoad() {
    var isAdmin = g_user.hasRoleExactly('x_aleen_snguardian.admin');
	if (isAdmin) {
        g_form.setDisplay('assets', true);
    } else {
        g_form.setDisplay('assets', false);
    }
   
}