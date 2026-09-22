(function executeRule(current, previous /*null when async*/) {
    if (current.provisioning_action.code == 'ADD') {
        var identityHelper = new IdentityHelper();
        var systemIdentifier = "";
        var options = {};
        if (current.getDisplayValue("asset.type.code") == "MOBILE_CREDENTIAL") {
            options["child_system"] = current.getDisplayValue("asset.sub_type");
        }
        systemIdentifier = identityHelper.getSystemUserId(current.getValue('identity'), current.asset.system);
        if (systemIdentifier == null || systemIdentifier == "" || systemIdentifier == 0) {
            var isSystemRecordExist = identityHelper.isSystemRecordExist(current.getValue('identity'), current.asset.system);
            if (!isSystemRecordExist) {
                var grNewIdentitysystem = new GlideRecordSecure("x_aleen_snguardian_identity_system");
                grNewIdentitysystem.identity = current.getValue('identity');
                grNewIdentitysystem.system = current.asset.system;
                grNewIdentitysystem.valid_from = current.valid_from;
                grNewIdentitysystem.valid_to = current.valid_to;
                grNewIdentitysystem.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", 'SUCCESS');
                grNewIdentitysystem.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                grNewIdentitysystem.datasource_table = current.getTableName();
                grNewIdentitysystem.datasource = current.getUniqueValue();
                grNewIdentitysystem.insert();
                identityHelper.startProvisioningInTargetSystem(current.getValue('identity'), current.asset.system, options);
            } else {
                identityHelper.startProvisioningInTargetSystem(current.getValue('identity'), current.asset.system, options);
            }
        }
    }
})(current, previous);
