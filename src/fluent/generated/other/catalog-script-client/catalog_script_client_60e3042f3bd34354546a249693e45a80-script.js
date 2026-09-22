function onLoad() {
    var hasRole = g_user.hasRoleExactly('x_aleen_snguardian.employee');
	
    if (hasRole) {
        var controlExists = g_form.getControl('request_for') != null;
		
        g_form.setValue('request_for', g_user.userID, g_user.userName);
        g_form.setReadOnly('request_for', true);

    }
}