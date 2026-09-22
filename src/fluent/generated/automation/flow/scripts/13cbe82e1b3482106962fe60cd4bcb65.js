(function execute(inputs, outputs) {

    var approver = null;
    var identityHelper = new IdentityHelper();
    identityGR = identityHelper.getIdentity(inputs.record.variables.worker_details.worker_manager);
    if(null !=identityGR){
      approver = identityGR.master_user_id;
    }
    if(approver != null  && approver != ""){
        outputs.approver = approver;
    }else{
        var grSysuser= new GlideRecordSecure('sys_user');
        grSysuser.addQuery('user_name' , inputs.approver_user_name);
        grSysuser.setLimit(1);
        grSysuser.query();
        if(grSysuser.next()){
            approver = grSysuser.getUniqueValue();
        }
        outputs.approver = approver;
    }
 
})(inputs, outputs);