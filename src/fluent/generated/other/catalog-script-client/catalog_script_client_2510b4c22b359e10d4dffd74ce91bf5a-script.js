function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    if (newValue == 'Yes') {
        var gaLobbyConfig = new GlideAjax('VisitorClientScriptHelper');
        gaLobbyConfig.addParam('sysparm_name', 'getLobbyConfig');
        gaLobbyConfig.addParam('sysparm_location', g_form.getValue('visit_location'));
        gaLobbyConfig.getXMLAnswer(getResponse);
    } else {
        g_form.setReadOnly('recurring_start_time', false);
        g_form.setReadOnly('recurring_end_time', false);
		g_form.clearValue('recurring_start_time');
		g_form.clearValue('recurring_end_time');
    }

    function getResponse(response) {
        var response = JSON.parse(response);
		//field values in visit record will be populated accordingly(if recurring or not) using flow
        g_form.setReadOnly('recurring_start_time', true);
        g_form.setReadOnly('recurring_end_time', true);
        g_form.setValue('recurring_start_time', response.starthour);
        g_form.setValue('recurring_end_time', response.endhours);
		

    }
}