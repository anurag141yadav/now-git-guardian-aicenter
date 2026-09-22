function onChange(control, oldValue, newValue, isLoading) {

	if (isLoading || newValue == '') {
        return;
    }
    var parts = new Date(newValue).toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).split(/[\s,\/:]+/);

    var formatted = `${parts[2]}-${parts[1]}-${parts[0]}T${parts[3]}:${parts[4]}:${parts[5]}`;
    var gaGetEndDate = new GlideAjax('VisitorClientScriptHelper');
    gaGetEndDate.addParam('sysparm_name', 'getEndDate');
    gaGetEndDate.addParam('sysparm_start_date', formatted);
    gaGetEndDate.addParam('sysparm_location', g_form.getValue('visit_location'));
    gaGetEndDate.getXMLAnswer(getResponse);

    function getResponse(response) {
        g_form.setValue('visit_end_date', response);
    }

}