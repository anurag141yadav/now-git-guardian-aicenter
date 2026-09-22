(function execute(inputs, outputs) {
    // ... code ...
    var isAccessRequestPending = false;
    var isAccessRequestFailed = false;

    var grAccessRequest = new GlideRecordSecure('x_aleen_snguardian_request');
    grAccessRequest.addQuery('parent.number',inputs.parent_number);
    grAccessRequest.query();
    while (grAccessRequest.next()) {
        var code = grAccessRequest.getElement('status').code;
        if(code == 'AWAITING-APPROVAL' || code == 'PROVISIONING-PENDING'){
            isAccessRequestPending = true;
            break;
        }else if(code == 'PROVISION-FAILED' || code == 'REJECTED'){
            isAccessRequestFailed = true;
            break;
        }else if(code != 'PROVISION-SUCCESS' || code != 'CLOSED'){
            isAccessRequestFailed = false;
        }
    }
    if(isAccessRequestPending)
        return;
    else if(isAccessRequestFailed){
        //error
        var grChangeAccessReq = new GlideRecordSecure('x_aleen_snguardian_request');
        grChangeAccessReq.addQuery('number', inputs.parent_number);
        grChangeAccessReq.setLimit(1);
        grChangeAccessReq.query();
        if (grChangeAccessReq.next()) {
            grChangeAccessReq.state = 4;
            grChangeAccessReq.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_status", "PROVISION-FAILED");
            grChangeAccessReq.update();
        }
    } else {
        //success
        var grChangeAccessReq = new GlideRecordSecure('x_aleen_snguardian_request');
        grChangeAccessReq.addQuery('number', inputs.parent_number);
        grChangeAccessReq.setLimit(1);
        grChangeAccessReq.query();
        if (grChangeAccessReq.next()) {
            grChangeAccessReq.state = 3;
            grChangeAccessReq.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_status", "PROVISION-SUCCESS");
            grChangeAccessReq.update();
        }
    }
})(inputs, outputs);