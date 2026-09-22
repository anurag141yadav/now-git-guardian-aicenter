function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
	getScriptData(newValue);
}

function getScriptData(function_sys_id) {
    if (function_sys_id != "") {
        var gaScriptData = new GlideAjax('ValueHelper');
        gaScriptData.addParam('sysparm_name', 'prepareJobScript');
        gaScriptData.addParam('function_sys_id', function_sys_id);
        gaScriptData.getXMLAnswer(function(response) {
            var script = response;
            if (script != '') {
                g_form.setValue('script', script);
            }
        });
    }
}