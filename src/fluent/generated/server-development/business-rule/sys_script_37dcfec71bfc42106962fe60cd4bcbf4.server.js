(function executeRule(current, previous /*null when async*/ ) {
    if (current.provisioning_action.code == 'ADD') {
        var identityHelper = new IdentityHelper();
        var systemIdentifier = "";
        systemIdentifier = identityHelper.getSystemUserId(current.getValue('identity'), current.access_level.system);
        if (systemIdentifier == null || systemIdentifier == "") {
            var isSystemRecordExist = identityHelper.isSystemRecordExist(current.getValue('identity'), current.access_level.system);
            if (!isSystemRecordExist) {
                var grNewIdentitysystem = new GlideRecordSecure("x_aleen_snguardian_identity_system");
                grNewIdentitysystem.identity = current.getValue('identity');
                grNewIdentitysystem.system = current.access_level.system;
                grNewIdentitysystem.valid_from = current.valid_from;
                grNewIdentitysystem.valid_to = current.valid_to;
                grNewIdentitysystem.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", 'SUCCESS');
                grNewIdentitysystem.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                grNewIdentitysystem.datasource_table = current.getTableName();
                grNewIdentitysystem.datasource = current.getUniqueValue();
                grNewIdentitysystem.insert();
                identityHelper.startProvisioningInTargetSystem(current.getValue('identity'), current.access_level.system);
            } else {
                identityHelper.startProvisioningInTargetSystem(current.getValue('identity'), current.access_level.system);
            }
        }
    }
})(current, previous);