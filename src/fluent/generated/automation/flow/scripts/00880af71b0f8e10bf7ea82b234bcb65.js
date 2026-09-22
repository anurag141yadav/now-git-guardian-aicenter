(function execute(inputs, outputs) {
    var identityTypeID = inputs.identity.getDisplayValue('type');
    var manager;
    if(identityTypeID=="Employee"){
        manager = inputs.identity.master_user_id.manager;
    }
    else{
        manager = inputs.identity.manager.master_user_id;
    }
    var grSysUserApprover = new GlideRecordSecure('sys_user');
    if(grSysUserApprover.get(manager)){
        outputs.response = grSysUserApprover;
    }

// ... code ...
})(inputs, outputs);