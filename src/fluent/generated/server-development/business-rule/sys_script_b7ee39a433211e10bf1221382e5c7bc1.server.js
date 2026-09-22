(function executeRule(current, previous /*null when async*/ ) {
    if (current.visitor_type == 'VIP' || current.visitor_type == 'GOVT') {
        current.visitor_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_status", "VERIFIED");
        current.identity_validation_type = "OTHERS";
        var currentDateTime = new GlideDateTime();
        current.identity_validation_date = currentDateTime;
        currentDateTime.addSeconds(315360000);
        current.identity_validation_expires_on = currentDateTime.getValue();
		current.need_assistance = true;
    }
    current.type = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_identitytype", "VISITOR");
})(current, previous);