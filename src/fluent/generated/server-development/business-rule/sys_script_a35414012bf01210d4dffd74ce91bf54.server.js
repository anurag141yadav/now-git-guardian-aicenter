(function executeRule(current, previous /*null when async*/ ) {
    gs.debug("BR For validation of badge Role system demo");
    if (gs.getSession().isInteractive()) { //works only for UI form form submission
        if (!current.getValue("datasource_table")) {
            current.datasource = current.getUniqueValue();
			current.datasource_table = current.getTableName();
        }
    }
    var isBadgeRole = false;
    var systemUtil = new SystemUtil(current.access_level.system.number);
    var grSystemFeature = systemUtil.getSystemFeature("ASSET-ACCESS-SYSTEM");
    if (grSystemFeature.next()) {
        var isBadgeRoleString = grSystemFeature.getValue("value");
        if (isBadgeRoleString || isBadgeRoleString == "true") {
            isBadgeRole = true;
        }
    }
    if (isBadgeRole) {
        var system = current.access_level.system,
            asset = current.associated_asset,
            identity = current.identity;
        var grIdenAsset = new GlideRecordSecure("x_aleen_snguardian_identity_asset");
        if (system && identity) {
            if (asset) {
                grIdenAsset.initialize();
                grIdenAsset.addQuery("identity", identity);
                grIdenAsset.addQuery("asset", asset);
                grIdenAsset.addQuery("is_deleted", false);
                grIdenAsset.addEncodedQuery("provisioning_status.code=success^ORprovisioning_status.codeLIKEupdate-success");
				grIdenAsset.setLimit(1);
                grIdenAsset.query();
                if (grIdenAsset.hasNext()) {
                    gs.debug("Asset is assigned to user");
                } else {
                    gs.debug("Asset is unassigned assigning to user");
                    grIdenAsset.initialize();
                    grIdenAsset.setValue("identity", identity);
                    grIdenAsset.setValue("asset", asset);
                    grIdenAsset.setValue("status", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE"));
                    grIdenAsset.setValue("valid_from", current.valid_from);
                    grIdenAsset.setValue("valid_to", current.valid_to);
                    grIdenAsset.setValue("provisioning_action", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "ADD"));
                    grIdenAsset.datasource = current.getUniqueValue();
                    grIdenAsset.datasource_table = current.getTableName();
                    grIdenAsset.insert();
                }
            }
        }
    }
})(current, previous);