(function execute(inputs, outputs) {


    var importSetUtil = new UserImportUtil();
    var importSetGr = importSetUtil.createImportSet();
    var grImportSetRow = new GlideRecordSecure(importSetGr.table_name);
    var email = inputs.record.variables.worker_details.worker_email.toString();
    var ind = email.toString().indexOf("@");
    var user_name=email.toString().slice(0,ind);
        grImportSetRow.setValue('sys_import_set', importSetGr.getUniqueValue());
        grImportSetRow.setValue('u_first_name', inputs.record.variables.worker_details.worker_first_name);
        grImportSetRow.setValue('u_last_name', inputs.record.variables.worker_details.worker_last_name);
        grImportSetRow.setValue('u_email', inputs.record.variables.worker_details.worker_email);
        grImportSetRow.setValue('u_phone', inputs.record.variables.worker_details.worker_phone);
        grImportSetRow.setValue('u_user_name', user_name);
        grImportSetRow.setValue('u_master_user_id', null);
        grImportSetRow.setValue('u_status', '1');
		grImportSetRow.setValue('u_identifier', null);
        grImportSetRow.setValue('u_type', 'worker');
        grImportSetRow.setValue('u_valid_from', inputs.record.variables.work_details.work_start_date);
        grImportSetRow.setValue('u_valid_to', inputs.record.variables.work_details.work_end_date);
        grImportSetRow.setValue('u_location', inputs.record.variables.work_details.work_location);
        grImportSetRow.setValue('u_photo', inputs.record.variables.worker_details.worker_photo);
        if(inputs.skipSystemProv == true || inputs.skipSystemProv =='true'){
         grImportSetRow.setValue('u_source_system_code',"NONE");   
        }else{
          grImportSetRow.setValue('u_source_system_code', gs.getProperty('instance_name').toUpperCase());
        }
        grImportSetRow.setValue('u_manager', inputs.record.variables.worker_details.worker_manager);
        grImportSetRow.setValue('u_department', inputs.record.variables.worker_details.worker_department);
        grImportSetRow.setValue('u_datasource_table', inputs.DocumentTableName);
        grImportSetRow.setValue('u_datasource', inputs.DocumentID);
        grImportSetRow.setValue('u_work_notes', " User information is updated based on Request [" + inputs.DcoumentNumber +"]  "+" and Import set Number  is ["+importSetGr.number+"]  ");
	   
    grImportSetRow.insert();
    importSetUtil.transformImportSet(importSetGr);

})(inputs, outputs);