function onLoad() {
    var tableName = g_form.getTableName();
    var gaApplicationScope = new GlideAjax('ValueHelper');
    gaApplicationScope.addParam('sysparm_name', 'getAplicationScope');
    gaApplicationScope.addParam('sysparm_table', tableName);
    gaApplicationScope.getXMLAnswer(function(response) {
        var scope = response;
        if (scope != '') {
            g_form.setValue('sys_scope', scope); // Set the value of the application_scope field
        }
    });

}