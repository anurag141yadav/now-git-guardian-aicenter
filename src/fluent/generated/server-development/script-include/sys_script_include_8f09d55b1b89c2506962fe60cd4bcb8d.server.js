var ConditionHelper = Class.create();
ConditionHelper.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" ConditionHelper:: ");
	},
    isAssetRetry(identityAsset) {
        try {
            var status_code = identityAsset.provisioning_status.code;
            if (status_code.indexOf('FAIL') != -1) {
                return true;
            }
        } catch (e) {
			this.logger.error("isAssetRetry Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }
        return false;
    },
    isAccessRetry(identityAccess) {
        try {
            var status_code = identityAccess.provisioning_status.code;
            if (status_code.indexOf('FAIL') != -1) {
                return true;
            }
        } catch (e) {
			this.logger.error("isAccessRetry Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }
        return false;

    },
    isSystemRetry(identitySystem) {
        try {
            var status_code = identitySystem.provisioning_status?identitySystem.provisioning_status.code:"";
            if (status_code.indexOf('FAIL') != -1) {
                return true;
            }
        } catch (e) {
			this.logger.error("isSystemRetry Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }
        return false;
    },
    isAssetProvisioning(identityAsset) {
        try {
            var action_code = identityAsset.provisioning_action.code;
            var status_code = identityAsset.provisioning_status.code;
            if (status_code.indexOf('FAIL') == -1 &&
                ((action_code == 'ADD') ||
                    (action_code == 'UPDATE') ||
                    (action_code == 'DELETE') ||
                    (action_code == 'ACTIVATE') ||
                    (action_code == 'DEACTIVATE') ||
                    (action_code == 'REPLACE'))) {
                return true;
            }
        } catch (e) {
			this.logger.error("isAssetProvisioning Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }
        return false;
    },
    isAccessProvisioning(identityAccess) {
        try {
            var action_code = identityAccess.provisioning_action.code;
            var status_code = identityAccess.provisioning_status.code;
            if (status_code.indexOf('FAIL') == -1 &&
                ((action_code == 'ADD') ||
                    (action_code == 'UPDATE') ||
                    (action_code == 'DELETE'))) {
                return true;
            }
        } catch (e) {
			this.logger.error("isAccessProvisioning Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }
        return false;

    },
    isSystemProvisioning(identitySystem) {
        try {
            var action_code = identitySystem.provisioning_action.code;
            var status_code = identitySystem.provisioning_status.code;
            if (status_code.indexOf('FAIL') == -1 &&
                ((action_code == 'ADD') ||
                    (action_code == 'UPDATE') ||
                    (action_code == 'DELETE'))) {
                return true;
            }
        } catch (e) {
			this.logger.error("isSystemProvisioning Exception :: " + e + " \nStack\n " + e.stack);
            return false;
        }
        return false;
    },
    filterSystemFunctions: function() {
        try {
            if (current.run_type == "periodically")
                return 'supports_background_job=true ^ allow_periodic_schedule=true ^ system=' + current.system;
            else
                return 'supports_background_job=true ^ system=' + current.system;
        } catch (e) {
			this.logger.error("filterSystemFunctions Exception :: " + e + " \nStack\n " + e.stack);
            return "";
        }
    },
    filterAssociatedAsset: function() {
        try {
            if (current) {
                var identity = current.identity;
                var system = current.access_level.system;
                grIdenAsset = new GlideRecordSecure("x_aleen_snguardian_identity_asset");
                grIdenAsset.addQuery("identity", identity);
                grIdenAsset.addQuery("asset.system", system);
                grIdenAsset.addEncodedQuery("status.code=ACTIVE^ORstatus.code=ASSIGNED");
                grIdenAsset.query();
                var assetList = undefined;
                while (grIdenAsset.next()) {
                    if (!assetList) {
                        assetList = grIdenAsset.getElement("asset").code;
                    } else {
                        assetList += "," + grIdenAsset.getElement("asset").code;
                    }
                }
                var query = "codeIN";
                //var query2 = "^NQsystem="+system+"^status.code=UNASSIGNED";
                if (!assetList || assetList.length < 1) {
                    return query + "-1";
                } else {
                    return query + assetList;
                }
            } else {
                throw new Error("No filter provided");
            }
        } catch (e) {
			this.logger.error("filterAssociatedAsset Exception :: " + e + " \nStack\n " + e.stack);
        }
    },
    filterAsset: function() {
        try {
            var query;
            if (current) {
                if (current.getValue("identity")) {
                    var grIdenLoc = new GlideRecordSecure("x_aleen_snguardian_identity_location");
                    grIdenLoc.addQuery("identity", current.getValue("identity"));
					grIdenLoc.setLimit(1);
                    grIdenLoc.query();
                    if (grIdenLoc.next()) {
                        var grLocAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
                        grLocAdmin.addQuery('locations','CONTAINS',grIdenLoc.getValue('location'));
                        grLocAdmin.orderBy('order');
						grLocAdmin.setLimit(1);
                        grLocAdmin.query();
                        if (grLocAdmin.next()) {
                            if (grLocAdmin.getValue('mc_supported') == "1") {
                                query = "status.code=UNASSIGNED^is_deleted=false^sub_typeISEMPTY^ORsub_type.name=" + grLocAdmin.getDisplayValue("mc_sub_type");
                            } else {
                                query = "status.code=UNASSIGNED^is_deleted=false^type.code!=MOBILE_CREDENTIAL";
                            }
                        } else {
                            throw new Error("Filter asset No location assigned to user");
                        }
                    } else {
                        throw new Error("No Location assigned to user");
                    }
                    return query;
                }
            }
        } catch (e) {
            this.logger.error("filterAsset Exception :: " + e + " \nStack\n " + e.stack);
			return "";
        }
    },
    type: 'ConditionHelper'
};