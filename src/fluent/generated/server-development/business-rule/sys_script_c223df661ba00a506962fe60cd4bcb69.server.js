(function executeRule(current, previous /*null when async*/ ) {
    var importUtil = new UserImportUtil();
    var importSetGr = importUtil.createImportSet();
    var importSetRowGr = new GlideRecordSecure(importSetGr.table_name);
    importSetRowGr.setValue('sys_import_set', importSetGr.getUniqueValue());
    importSetRowGr.setValue('u_user_name', current.getValue('user_name'));
    importSetRowGr.setValue('u_master_user_id', current.getValue('sys_id'));
    importSetRowGr.setValue('u_status', current.getValue('active'));
	importSetRowGr.setValue('u_identifier', current.getValue('sys_id'));
	importSetRowGr.setValue('u_source_system_code', gs.getProperty('instance_name').toUpperCase());
    importSetRowGr.setValue('u_datasource_table', "sys_import_set");
    importSetRowGr.setValue('u_datasource', importSetGr.sys_id);
    importSetRowGr.setValue('u_work_notes', " User is Terminated based on HRMS Data change  and Importset Number  is [" + importSetGr.number + "]  ");
    importSetRowGr.insert();
    importUtil.transformImportSet(importSetGr);
})(current, previous);