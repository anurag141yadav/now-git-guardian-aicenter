(function executeRule(current, previous) {
    function updateCurrent(fieldsToUpdate) {
        for (var key in fieldsToUpdate) {
            if (fieldsToUpdate.hasOwnProperty(key)) {
                current.setValue(key, fieldsToUpdate[key]);
            }
        }
    }
    try {
        var logger = new AlertGuardianLogger("BR Trigger Asset Prov");
        if (!current.provisioning_action || current.provisioning_action.code === 'NONE') return;

        if (gs.isInteractive()) {
            current.datasource_table = current.getTableName();
            current.datasource = current.getUniqueValue();
        }
        var actionFuncMap = {
            ADD: "ADD-BADGE",
            UPDATE: "UPDATE-BADGE",
            ACTIVATE: "ACTIVATE-BADGE",
            DEACTIVATE: "DEACTIVATE-BADGE",
            RESETPIN: "RESET-PIN"
        };

        var actionCode = current.getDisplayValue('provisioning_action.code');
        var action = actionFuncMap[actionCode];
        if (!action) {
            logger.error("No action found for asset provision");
            return;
        }
        var data = new GuardianGlideRecordUtil().toJSON(current, null);

        //brHelper initialize with (data,current,previous,options)
        var brHelper = new BusinessRuleHelper(data, current, previous);
        brHelper.loadOptions();
        brHelper.getIdentityIdentifier(data["identity.sys_id"], data["asset.system.sys_id"]);
        var finalExecuteMap = brHelper.processProvisioning(current.asset.system.number, action);
        updateCurrent(finalExecuteMap);
    } catch (e) {
        logger.error("Asset Provision BR error: " + e + " stack \n" + e.stack);
        current.provisioning_status =
            new MetadataGlideRecordHelper().getRecordSysIdByCode(
                "x_aleen_snguardian_provisioning_status", "FAILED"
            );
        current.provisioning_message = "There has been a problem in System Provisioning. Please check error logs for more information";
    }
})(current, previous);