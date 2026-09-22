var BusinessRuleHelper = Class.create();
BusinessRuleHelper.prototype = {

    initialize: function(data, current, previous, options) {
        this.logger = new AlertGuardianLogger(" BusinessRuleHelper:: ");

        this.data = data ? data : {};
        this.current = current ? current : {};
        this.previous = previous ? previous : null;
        this.options = options ? options : {};

        this.beforeExecuteMap = {};
        this.responseExecuteMap = {};
        this.afterExecuteMap = {};
        this.response;
        this.actionCode = this.data["provisioning_action.code"];
        this.tableName = this.current.getTableName();

        this.successProvStatusMap = {
            ADD: "SUCCESS",
            UPDATE: "UPDATE-SUCCESS",
            ACTIVATE: "UPDATE-SUCCESS",
            DEACTIVATE: "UPDATE-SUCCESS",
            RESETPIN: "UPDATE-SUCCESS",
            DELETE: "DEPROV-SUCCESS"
        };

        this.failureProvStatusMap = {
            ADD: "FAILED",
            UPDATE: "UPDATE-FAILED",
            ACTIVATE: "UPDATE-FAILED",
            DEACTIVATE: "UPDATE-FAILED",
            RESETPIN: "UPDATE-FAILED",
            DELETE: "DEPROV-FAILED"
        };

        this.metaHelper = new MetadataGlideRecordHelper();
        this.identityHelper = new IdentityHelper();
        this.assetHelper = new AssetHelper();
        this.accessHelper = new AccessHelper();
        this.logger.debug("BRHelper Debug :: action code :" + this.actionCode + "\n tableName :" + this.tableName);
    },

    loadOptions: function(customObj) {
        try {
            this.options = {
                table: this.current ? this.current.getTableName() : "",
                id: this.current ? this.current.getUniqueValue() : "",
                action: this.current ? this.current.getDisplayValue("provisioning_action.code") : ""
            };
            if (customObj) {
                for (var key in customObj) {
                    if (customObj.hasOwnProperty(key)) {
                        this.options[key] = customObj[key];
                    }
                }
            }
            this.logger.debug("debug loadOptions :: ", this.options);
        } catch (e) {
            this.logger.error("loadOptions:: Exception => " + e + "\n stack=> \n" + e.stack);
        }
    },

    getIdentityIdentifier: function(identity, system) {
        try {
            var systemIdentifier = this.identityHelper.getSystemIdentifier(identity, system);
            if (!systemIdentifier) {
                systemIdentifier = this.identityHelper.startProvisioningInTargetSystem(identity, system, this.options);
            }
            this.data["systemUserId"] = systemIdentifier;
            this.logger.debug("debug getIdentityIdentifier :: ", systemIdentifier);
        } catch (e) {
            this.logger.error("getIdentityIdentifier:: Exception => " + e + "\n stack=> \n" + e.stack);
            throw new Error("getIdentityIdentifier:: Exception => " + e);
        }
    },

    processProvisioning: function(system_number, action) {
        try {
            this.logger.info("ProcessProvisioning started ::");
            this.beforeExecuteMap = this.beforeExecute();
            if (this.beforeExecuteMap["SKIP_PROV_FLAG"] != true) {
                this.responseExecuteMap = this.executeProvisioning(system_number, action);
            } else {
                this.logger.info("processProvisioning() Skipping Provisioning ", this.beforeExecuteMap);
                this.responseExecuteMap = this.beforeExecuteMap;
            }
            this.afterExecuteMap = this.afterExecute();

            var resultExecuteMap = {
                ...this.beforeExecuteMap,
                ...this.responseExecuteMap,
                ...this.afterExecuteMap
            };
            this.logger.debug("debug processProvisioning() resultExecuteMap", resultExecuteMap);
            return resultExecuteMap;
        } catch (e) {
            this.logger.error("processProvisioning :: Exception => " + e + "\n stack=> \n" + e.stack);
            throw new Error("Exeption Occured in processProvisioning :: Exception => " + e + " stack=> \n" + e.stack);
        }
    },
    beforeExecute: function() {
        try {
            switch (this.tableName) {

                case "x_aleen_snguardian_identity_asset":
                    this.addPreviousValidityDates();
                    this.updateAssetMC();
                    break;

                case "x_aleen_snguardian_identity_access":
                    this.addPreviousValidityDates();
                    break;

                case "x_aleen_snguardian_identity_system":
                    this.checkSystemUser();
                    break;

                default:
                    break;
            }
            this.logger.debug("BeforeExecute() completed", this.beforeExecuteMap);
            return this.beforeExecuteMap;
        } catch (e) {
            this.logger.error("beforeExecute() Exception =>" + e + "\n stack = > \n" + e.stack);
            return {};
        }

    },
    executeProvisioning: function(system_number, action) {
        var provisioningHelper = new ProvisioningHelper(system_number);
        this.response = provisioningHelper.execute(this.data, action, this.options);
        if (!this.response) {
            this.response = {
                success: false,
                message: "NO RESPONSE RECEIVED IN PROVISIONING LAYER!!"
            };
        }
        return this.processResponse();
    },
    processResponse: function() {

        if (this.response.ADDED_TO_QUEUE) {
            return this._setQueueStatus();
        }

        var statusCode = this.response.success ?
            this.successProvStatusMap[this.actionCode] :
            this.failureProvStatusMap[this.actionCode];

        this.responseExecuteMap.provisioning_status =
            this.metaHelper.getRecordSysIdByCode(
                "x_aleen_snguardian_provisioning_status", statusCode
            );

        this.responseExecuteMap.provisioning_message = this.response.message;

        this.responseExecuteMap.success = this.response.success;

        if (this.response.success) {
            this.responseExecuteMap.is_deleted = false;
            this.responseExecuteMap.provisioning_action =
                this.metaHelper.getRecordSysIdByCode(
                    "x_aleen_snguardian_request_entity_action", "NONE"
                ).toString();
            if (this.actionCode == "DELETE") {
                return this._setDeleteStatus();
            }
        }
        this.updateTargetIdentifier();
        this.updateStatusCode();
        return this.responseExecuteMap;
    },

    afterExecute: function() {
        try {
            switch (this.tableName) {
                case "x_aleen_snguardian_identity_asset":
                    if (this.responseExecuteMap && this.responseExecuteMap.success) {
                        this.afterAssetProvision();
                    } else {
                        this.updateAssetWorkNotes();
                    }
                    break;

                case "x_aleen_snguardian_identity_access":
                    if (this.responseExecuteMap && this.responseExecuteMap.success) {
                        this.afterAccessProvision();
                    } else {
                        this.updateAccessWorkNotes();
                    }
                    break;

                case "x_aleen_snguardian_identity_system":
                    if (this.responseExecuteMap && this.responseExecuteMap.success) {
                        this.afterSystemProvision();
                    } else {
                        this.updateSystemWorkNotes();
                    }
                    break;
                default:
                    break;
            }
            this.logger.debug("afterExecute() :: ", this.afterExecuteMap);
            return this.afterExecuteMap;
        } catch (e) {
            this.logger.error("afterExecute Exception => " + e + "\n stack \n" + e.stack);
            return {};
        }
    },
    _setQueueStatus: function() {
        this.responseExecuteMap.provisioning_status =
            this.metaHelper.getRecordSysIdByCode(
                "x_aleen_snguardian_provisioning_status", "IN_QUEUE"
            );
        this.responseExecuteMap.provisioning_message =
            this.responseExecuteMap.provisioning_message || "The record is in provisioning queue and will be processed shortly";
        this.logger.info("setQueueStatus() Record has been added to Provisioning Queue ");
        return this.responseExecuteMap;
    },
    _setDeleteStatus: function() {
        this.responseExecuteMap.is_deleted = true;
        this.responseExecuteMap.identifier = "";
        this.responseExecuteMap.status = this.metaHelper.getRecordSysIdByCode(
            "x_aleen_snguardian_status_code", "INACTIVE"
        );
        this.logger.debug("setDeleteStatus() :: ", this.responseExecuteMap);
        return this.responseExecuteMap;
    },
    updateAssetStatus: function() {
        try {
            if (!this.responseExecuteMap.success) return;
            if (this.responseExecuteMap.status) {
                this.logger.debug("updateAssetStatus() updating record status::", this.data + " " + this.responseExecuteMap.status);
                this.assetHelper.updateStatus(this.data["asset.sys_id"], this.responseExecuteMap.status);
            }
        } catch (e) {
            this.logger.error("updateAssetStatus Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    checkSystemUser: function() {
        try {
            if (this.actionCode == "ADD") {
                var getUserResponse = new ProvisioningHelper(this.data["system.number"]).execute(this.data, 'GET-USER', {
                    "SKIP-QUEUE": true
                });
                if (getUserResponse['success']) {
                    this.beforeExecuteMap["SKIP_PROV_FLAG"] = true;
                    if (getUserResponse['identifier']) {
                        this.beforeExecuteMap["success"] = true;
                        this.beforeExecuteMap["identifier"] = getUserResponse['identifier'];
                        this.beforeExecuteMap['message'] = getUserResponse['message'];
                    } else {
                        this.beforeExecuteMap["identifier"] = gs.generateGUID();
                    }
                }
            }
        } catch (e) {
            this.logger.error("checkSystemUser Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateStatusCode: function() {
        if (this.response && this.response.status) {
            this.responseExecuteMap.status =this.metaHelper.getRecordSysIdByCode(
                "x_aleen_snguardian_status_code", this.response.status
            );
        }
    },
    updateTargetIdentifier: function() {
        try {
            if (this.response && this.response.success && this.response.identifier) {
                this.responseExecuteMap.identifier = this.response.identifier;
            }
        } catch (e) {
            this.logger.error("updateTargetIdentifier() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateAssetCode: function() {
        try {
            if (!this.response.success || this.actionCode !== "ADD") return;
            var code = this.data["asset.code"];
            if (!code || code === "NULL") {
                this.assetHelper.updateCode(
                    this.data["asset.sys_id"],
                    this.response.asset_identifier || this.response.identifier
                );
            }
        } catch (e) {
            this.logger.error("updateAssetCode() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    afterSystemProvision: function() {
        try {
            if (this.actionCode != "DELETE") {
                if (this.response && this.response["mobile_userId"]) {
                    this.afterExecuteMap["mobile_credential_id"] = this.response["mobile_userId"];
                }
            } else {
                var system_id = this.data["system.sys_id"] || this.data["asset.system.sys_id"] || this.data["access_level.system.sys_id"] || "";
                if (this.data && this.response && system_id && this.response['MarkAllAssetsAsDeleted'] && this.response['AssetAvailbleToReassign']) {
                    this.assethelper.deleteBadges(this.data['identity.sys_id'], this.data['system.sys_id'], this.response['MarkAllAssetsAsDeleted'], this.response['AssetAvailbleToReassign']);
                }
            }
            this.updateSystemWorkNotes();
        } catch (e) {
            this.logger.error("afterSystemProvision() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateSystemWorkNotes: function(id) {
        if (this.responseExecuteMap && this.data) {
            this.identityHelper.AddWorknotes(this.data["identity.sys_id"], this.responseExecuteMap.provisioning_message);
            this.identityHelper.AddSystemWorknotes(this.data["sys_id"], this.responseExecuteMap.provisioning_message);
            this.updateRequestWorkNotes();
        }
    },
    afterAssetProvision: function() {
        try {
            if (this.actionCode != "DELETE") {
                this.updateAssetCode();
            }
			this.updateAssetStatus();
            this.updateAssetWorkNotes();
        } catch (e) {
            this.logger.error("afterAssetProvision() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateAssetWorkNotes: function() {
        if (this.responseExecuteMap && this.data) {
            this.identityHelper.AddWorknotes(this.data["identity.sys_id"], this.responseExecuteMap.provisioning_message);
            this.assetHelper.AddWorknotes(this.data["asset.sys_id"], this.responseExecuteMap.provisioning_message);
            this.updateRequestWorkNotes();
        }
    },
    afterAccessProvision: function() {
        try {
            if (this.actionCode != "DELETE") {
                this.updateBadgeRoleSystem();
            }
            this.updateAccessWorkNotes();
        } catch (e) {
            this.logger.error("afterAccessProvision() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateAccessWorkNotes: function() {
        if (this.responseExecuteMap && this.data) {
            this.identityHelper.AddWorknotes(this.data["identity.sys_id"], this.responseExecuteMap.provisioning_message);
            this.accessHelper.AddWorknotes(this.data["access_level.sys_id"], this.responseExecuteMap.provisioning_message);
            this.updateRequestWorkNotes();
        }
    },
    updateBadgeRoleSystem: function() {
        try {
            if (!this.data["associated_asset"]) return;

            if (this.response["associated_asset"]) {
                this.afterExecuteMap["associated_asset"] = this.response["associated_asset"];
            }
            if (this.responseExecuteMap.status) {
                this.assetHelper.updateStatus(this.data["associated_asset"], this.responseExecuteMap.status);
            }
        } catch (e) {
            this.logger.error("updateBadgeRoleSystem() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateAssetMC: function() {
        try {
            if (this.data["asset.type.code"] == "MOBILE_CREDENTIAL") {
                this.data["child_system"] = this.data["asset.sub_type.name"];
                this.beforeExecuteMap["issue_type"] = "MC";
            }
        } catch (e) {
            this.logger.error("updateAssetMC() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    updateRequestWorkNotes: function() {
        try {
            if (this.data["datasource_table"] == "x_aleen_snguardian_request") {
                var requestGr = new GlideRecordSecure("x_aleen_snguardian_request");
                requestGr.addQuery("sys_id", this.data["datasource.sys_id"]);
                requestGr.query();
                if (requestGr.next()) {
                    requestGr.work_notes = this.responseExecuteMap.provisioning_message;
                    requestGr.update();
                }
            }
        } catch (e) {
            this.logger.error("updateRequestWorkNotes() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    addPreviousValidityDates: function() {
        try {
            if (this.previous) {
                this.data["previous_valid_from"] = this.previous ? this.previous.getDisplayValue("valid_from") : "";
                this.data["previous_valid_to"] = this.previous ? this.previous.getDisplayValue("valid_to") : "";
            }
        } catch (e) {
            this.logger.error("addPreviousValidityDates() Exception => " + e + "\n stack \n" + e.stack);
        }
    },
    type: 'BusinessRuleHelper'
};