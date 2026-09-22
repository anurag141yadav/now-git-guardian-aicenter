(function executeRule(current, previous /*null when async*/ ) {
    function updateCurrent(fieldsToUpdate) {
        for (var key in fieldsToUpdate) {
            if (fieldsToUpdate.hasOwnProperty(key)) {
                current.setValue(key, fieldsToUpdate[key]);
            }
        }
    }
    if (current.provisioning_action.code != 'NONE') {
        try {
            var logger = new AlertGuardianLogger("BR Trigger Delete Access Prov :: ");
            if (!current.provisioning_action || current.provisioning_action.code === 'NONE') return;
            if (gs.isInteractive()) {
                current.datasource_table = current.getTableName();
                current.datasource = current.getUniqueValue();
            }
            var actionFuncMap = {
                "DELETE": "DELETE-ACCESS"
            };
            var action = actionFuncMap["DELETE"];
            if (!action) {
                logger.error("No action found for Access De-provision");
                return;
            }
            var data = new GuardianGlideRecordUtil().toJSON(current, null);

            //brHelper initialize with (data,current,previous,options)
            var brHelper = new BusinessRuleHelper(data, current, previous);
            brHelper.loadOptions({"SKIP-QUEUE":true});
            brHelper.getIdentityIdentifier(data["identity.sys_id"], data["access_level.system.sys_id"]);
            var finalExecuteMap = brHelper.processProvisioning(current.access_level.system.number, action);
            updateCurrent(finalExecuteMap);
        } catch (e) {
            logger.error("Trigger Delete Access De-provision BR error: " + e + " stack \n" + e.stack);
            current.provisioning_status =
                new MetadataGlideRecordHelper().getRecordSysIdByCode(
                    "x_aleen_snguardian_provisioning_status", "FAILED"
                );
            current.provisioning_message = "There has been a problem in Access De-provisioning. Please check error logs for more information";
        }
		current.update();
    }
})(current, previous);