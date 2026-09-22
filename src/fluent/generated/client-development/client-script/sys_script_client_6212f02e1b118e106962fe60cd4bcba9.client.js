function onLoad() {

    if (g_form.isNewRecord()) {
        var gaStatusCode = new GlideAjax('x_aleen_snguardian.ValueHelper');
        gaStatusCode.addParam('sysparm_name', 'getDraftStatusCode');
        gaStatusCode.getXMLAnswer(getResponse);
    }

    function getResponse(response) {
        g_form.clearOptions('status');
		g_form.addOption('status',response, 'Draft');
        g_form.setValue('status', response);
    }

}