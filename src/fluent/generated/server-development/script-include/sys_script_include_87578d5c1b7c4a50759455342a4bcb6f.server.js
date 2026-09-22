var IdentityHelper = Class.create();
IdentityHelper.prototype = {
    initialize: function() {
        this.identity_table_name = "x_aleen_snguardian_identity";
        this.identity_system_table_name = "x_aleen_snguardian_identity_system";
        this.system_table_name = "x_aleen_snguardian_system";
		this.logger = new AlertGuardianLogger(" IdentityHelper:: ");
    },
    AddWorknotes: function(sys_id, work_notes) {
        var grIdentity = new GlideRecordSecure(this.identity_table_name);
        if (grIdentity.get(sys_id)) {
            grIdentity.work_notes = work_notes;
            grIdentity.update();
        }
    },
	AddSystemWorknotes: function(sys_id, work_notes) {
        var grIdentity = new GlideRecordSecure(this.identity_system_table_name);
        if (grIdentity.get(sys_id)) {
            grIdentity.work_notes = work_notes;
            grIdentity.update();
        }
    },
    getIdentity: function(sys_id) {
        var grIdentity = new GlideRecordSecure(this.identity_table_name);
        if (grIdentity.get(sys_id)) {
            return grIdentity;
        }
    },
    getSystemUserId(identity_sys_id, system_sys_id) {
        var identifier = null;
        var grIdentitySystem = new GlideRecordSecure(this.identity_system_table_name);
        grIdentitySystem.addQuery('identity', identity_sys_id);
        grIdentitySystem.addQuery('system', system_sys_id);
        grIdentitySystem.addQuery('identifier_type', 'PRIMARY');
        grIdentitySystem.addQuery('is_deleted', false);
		grIdentitySystem.setLimit(1);
        grIdentitySystem.query();
        if (grIdentitySystem.next()) {
            if (grIdentitySystem.identifier != null && grIdentitySystem.identifier != "") {
                identifier = grIdentitySystem.identifier;
            } else {
                var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
                var data = guardianGlideRecordUtil.toJSON(grIdentitySystem, null);
                var provisioningHelper = new ProvisioningHelper(grIdentitySystem.system.number);
                var getUserResponse = provisioningHelper.execute(data, 'GET-USER', {
                    "SKIP_QUEUE": true
                });
                if (getUserResponse['success'] && (getUserResponse['identifier'] != null && getUserResponse['identifier'] != "")) {
                    identifier = getUserResponse['identifier'];
                    grIdentitySystem.identifier = getUserResponse['identifier'];
                    grIdentitySystem.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "SUCCESS");
                    grIdentitySystem.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                    grIdentitySystem.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE");
                    grIdentitySystem.update();
                } else {
                    grIdentitySystem.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", 'FAILED');
                    grIdentitySystem.update();
                }
            }

        } else {
			this.logger.info("getSystemUserId : Record Not found");
        }
        return identifier;
    },
    getSystemIdentifier(identity_sys_id, system_sys_id) {
        var identifier = null;
        var grIdentitySystem = new GlideRecordSecure(this.identity_system_table_name);
        grIdentitySystem.addQuery('identity', identity_sys_id);
        grIdentitySystem.addQuery('system', system_sys_id);
        grIdentitySystem.addQuery('identifier_type', 'PRIMARY');
        grIdentitySystem.addQuery('is_deleted', false);
		grIdentitySystem.setLimit(1);
        grIdentitySystem.query();
        if (grIdentitySystem.next()) {
            if (grIdentitySystem.identifier != null && grIdentitySystem.identifier != "") {
                identifier = grIdentitySystem.identifier;
            } else {
                var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
                var data = guardianGlideRecordUtil.toJSON(grIdentitySystem, null);
                var provisioningHelper = new ProvisioningHelper(grIdentitySystem.system.number);
                var getUserResponse = provisioningHelper.execute(data, 'GET-USER', {
                    "SKIP_QUEUE": true
                });
                if (getUserResponse['success'] && (getUserResponse['identifier'] != null && getUserResponse['identifier'] != "")) {
                    identifier = getUserResponse['identifier'];
                    grIdentitySystem.identifier = getUserResponse['identifier'];
                    grIdentitySystem.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "SUCCESS");
                    grIdentitySystem.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                    grIdentitySystem.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE");
                    grIdentitySystem.update();
                } else {
                    grIdentitySystem.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", 'FAILED');
                    grIdentitySystem.update();
                }
            }
        }
        return identifier;
    },
    startProvisioningInTargetSystem(identity_sys_id, system_sys_id,options) {
        var systemIdentifier = null;
        try {
            var grIdentitySystemRecord = new GlideRecordSecure(this.identity_system_table_name);
            grIdentitySystemRecord.addQuery('identity', identity_sys_id);
            grIdentitySystemRecord.addQuery('system', system_sys_id);
            grIdentitySystemRecord.addQuery('identifier_type', 'PRIMARY');
            grIdentitySystemRecord.addQuery('is_deleted', false);
			grIdentitySystemRecord.setLimit(1);
            grIdentitySystemRecord.query();
            if (grIdentitySystemRecord.next()) {
                var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
                var data = guardianGlideRecordUtil.toJSON(grIdentitySystemRecord, null);
                if (null != options) {
                    for (var option in options) {
                        data[option] = options[option];
                    }
                }
                var provisioningHelper = new ProvisioningHelper(grIdentitySystemRecord.system.number);
                var addResponse = provisioningHelper.execute(data, 'CREATE-USER', {
                    "SKIP_QUEUE": true
                });
                if (addResponse && addResponse['success']) {
                    grIdentitySystemRecord.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "SUCCESS");
                    grIdentitySystemRecord.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                    grIdentitySystemRecord.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE");
                    if (addResponse['identifier'] != null && addResponse['identifier'] != '') {
                        grIdentitySystemRecord.identifier = addResponse['identifier'];
                        systemIdentifier = addResponse['identifier'];
                    }
                    grIdentitySystemRecord.update();
                    this.AddWorknotes(grIdentitySystemRecord.getValue('identity'), "System [" + grIdentitySystemRecord.system.code + "] is added successfully !!");
                } else {
                    grIdentitySystemRecord.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "FAILED");
                    grIdentitySystemRecord.provisioning_message = addResponse['message'];
                    var updateSysId = grIdentitySystemRecord.update();
                    this.AddWorknotes(grIdentitySystemRecord.getValue('identity'), " Error while adding  [" + grIdentitySystemRecord.system.code + " ]  !!");
                }
            }
        } catch (ex) {
			this.logger.error("startProvisioningInTargetSystem Exception :: " + ex + " \nStack\n " + ex.stack);
        }
        return systemIdentifier;
    },
    isSystemRecordExist(identity_sys_id, system_sys_id) {
        var grIdentitySystem = new GlideRecordSecure(this.identity_system_table_name);
        grIdentitySystem.addQuery('identity', identity_sys_id);
        grIdentitySystem.addQuery('system', system_sys_id);
        grIdentitySystem.addQuery('is_deleted', false);
		grIdentitySystem.setLimit(1);
        grIdentitySystem.query();
        if (grIdentitySystem.next()) {
            return true;
        } else {
            return false;
        }
    },
    type: 'IdentityHelper'
};