var AssetHelper = Class.create();
AssetHelper.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" AssetHelper:: ");
        this.asset_table_name = "x_aleen_snguardian_asset";
        this.identity_asset_table_name = "x_aleen_snguardian_identity_asset";
    },
    createAsset: function(assetObj) {
        var grAssetRecord = new GlideRecordSecure(this.asset_table_name);
        grAssetRecord.initialize();
        grAssetRecord.setValue("serial", assetObj["serial"]);
        grAssetRecord.setValue("system", assetObj["system"]);
        grAssetRecord.setValue("type", assetObj["type"]);
        grAssetRecord.setValue("status", assetObj["status"]);
        grAssetRecord.setValue("sub_type", assetObj["sub_type"] ? assetObj["sub_type"] : "");
        return grAssetRecord.insert();
    },
    findAsset: function(queryMap) {
        var grAssetRecord = new GlideRecordSecure(this.asset_table_name);
        for (var key in queryMap) {
            grAssetRecord.addQuery(key, queryMap[key]);
        }
        grAssetRecord.query();
        if (grAssetRecord.next()) {
            return grAssetRecord;
        } else {
            return "";
        }
    },
    AddWorknotes: function(sys_id, work_notes) {
        var grAssetRecord = new GlideRecordSecure(this.asset_table_name);
        if (grAssetRecord.get(sys_id)) {
            grAssetRecord.work_notes = work_notes;
            grAssetRecord.update();
        }
    },
    updateCode: function(sys_id, code) {
        var grAssetRecord = new GlideRecordSecure(this.asset_table_name);
        if (grAssetRecord.get(sys_id)) {
            grAssetRecord.code = code;
            grAssetRecord.update();
        }
    },
    updateStatus: function(sys_id, status) {
        var grAssetRecord = new GlideRecordSecure(this.asset_table_name);
        if (grAssetRecord.get(sys_id)) {
            grAssetRecord.status = status;
            grAssetRecord.update();
        }
    },
    deleteBadges(identity_sys_id, system_sys_id, markAllAssetsAsDeleted, assetAvailbleToReassign) {
        var grIdentityAsset = new GlideRecordSecure(this.identity_asset_table_name);
        grIdentityAsset.addQuery('identity', identity_sys_id);
        grIdentityAsset.addQuery('asset.system', system_sys_id);
        grIdentityAsset.query();
        if (grIdentityAsset.next()) {
            if (markAllAssetsAsDeleted) {
                try {
                    grIdentityAsset.provisioning_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
                    grIdentityAsset.status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "INACTIVE");
                    grIdentityAsset.provisioning_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "DEPROV-SUCCESS");
                    grIdentityAsset.update();
                    new IdentityHelper().AddWorknotes(identity_sys_id, " Badge [" + grIdentityAsset.asset.number + " ] is Removed successfully !!!");
                } catch (e) {
					this.logger.error("deleteBadges Exception : updating IDM_ASST_SYS ID:: " + grIdentityAsset.getValue('sys_id')+" ==>" + e + " \nStack\n " + e.stack);
                }
            }
            if (assetAvailbleToReassign) {
                this.updateStatus(grIdentityAsset.getValue('asset'), new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "UNASSIGNED"));
                this.updateCode(grIdentityAsset.getValue('asset'), ""); // temp worker terminated - to make identifier empty()
            }
        }
    },
    updateValidityDates(sys_id, valid_from, valid_to) {
        var grIdentityAsset = new GlideRecordSecure(this.identity_asset_table_name);
        if (sys_id && grIdentityAsset.get(sys_id)) {
            grIdentityAsset.setValue('valid_from', valid_from);
            grIdentityAsset.setValue('valid_to', valid_to);
            grIdentityAsset.update();
        }
    },
    type: 'AssetHelper'
};