var AccessHelper = Class.create();
AccessHelper.prototype = {
    initialize: function() {
        this.access_table_name = "x_aleen_snguardian_access_level";
        this.identity_access_table_name = "x_aleen_snguardian_identity_access";
		this.logger = new AlertGuardianLogger(" AccessHelper:: ");
    },
    getAccessLevel: function(sys_id) {
        var grIdentity = new GlideRecordSecure(this.access_table_name);
        if (grIdentity.get(sys_id)) {
            return grIdentity;
        }
        return null;
    },
    AddWorknotes: function(sys_id, work_notes) {
        var grAccess = new GlideRecordSecure(this.access_table_name);
        if (grAccess.get(sys_id)) {
            grAccess.work_notes = work_notes;
            grAccess.update();
        }
    },
    updateStatus: function(sys_id, status) {
        var grAccess = new GlideRecordSecure(this.access_table_name);
        if (grAccess.get(sys_id)) {
            grAccess.status = status;
            grAccess.update();
        }
    },
    deleteBadges(identity_sys_id, system_sys_id, markAllaccesssAsDeleted, accessAvailbleToReassign) {
        var grIdentityAccess = new GlideRecordSecure(this.identity_access_table_name);
        grIdentityAccess.addQuery('identity', identity_sys_id);
        grIdentityAccess.addQuery('access_level.system', system_sys_id);
        grIdentityAccess.addQuery('is_deleted', false);
        grIdentityAccess.query();
        if (grIdentityAccess.next()) {
            if (markAllaccesssAsDeleted) {
                try {
                    grIdentityAccess.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                    grIdentityAccess.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "INACTIVE");
                    grIdentityAccess.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "DEPROV-SUCCESS");
                    grIdentityAccess.update();
                    new IdentityHelper().AddWorknotes(identity_sys_id, " Access [" + grIdentityAccess.access_level.number + " ] is Removed successfully !!!");
                } catch (e) {
					this.logger.error("deleteBadges Exception :: updating  IDM_ACCESS_SYS ID : "  + grIdentityAccess.getValue('sys_id') +" : "+ e + " \nStack\n " + e.stack);
                }
            }
            if (accessAvailbleToReassign) {
                this.updateStatus(grIdentityAccess.getValue('access_level'), new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "UNASSIGNED"));
            }
        }
    },
    validateAssetForAccess: function(asset_id, identity_id) {
        var asset = asset_id,
            identity = identity_id;
        var result = {};
        var grIdenAsset = new GlideRecordSecure("x_aleen_snguardian_identity_asset");
        grIdenAsset.addQuery("identity", identity);
        grIdenAsset.addQuery("asset", asset);
        grIdenAsset.addQuery("is_deleted", false);
        grIdenAsset.query();
        if (grIdenAsset.hasNext() && grIdenAsset.next()) {
            result.success = true;
            result.asset_code = grIdenAsset.getElement("asset").code ? grIdenAsset.getElement("asset").code.toString() : "";
            result.asset_id = grIdenAsset.getValue("asset");
            return result;
        } else {
            result.success = false;
        }
    },
    type: 'AccessHelper'
};