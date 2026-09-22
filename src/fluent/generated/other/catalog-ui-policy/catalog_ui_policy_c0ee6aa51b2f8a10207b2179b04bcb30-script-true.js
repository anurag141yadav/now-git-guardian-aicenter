function onCondition() {
	g_form.clearValue('access_valid_to');
	g_form.showFieldMsg('access_valid_to','Validity should not be greater than 1 year');
}