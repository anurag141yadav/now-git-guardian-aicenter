var RequestHelper = Class.create();
RequestHelper.prototype = {
    initialize: function() {
        this.tag = "RequestHelper ::: ->>";
        this.request_table = "x_aleen_snguardian_request";
        this.sysapproval_table = "sysapproval_approver";
		this.logger = new AlertGuardianLogger(' RequestHelper:: ');
    },
    populateAndProcessRequest: function(requestData) {
        try {
            for (var i = 0; i < requestData.length; i++) {
                var request = this.findRequest("sys_id", requestData[i]["sys_id"]);
                if (request) {
                    var assetData = this.processAssetMrvs(requestData[i]["badgeNumber"], request.variables.assets);
                    request.variables.assets = JSON.stringify(assetData);
                    request.update();
                    this.approveRequest(requestData[i]["sys_id"]);
                } else {
					this.logger.error("populateAndProcessRequest :: Unable to find request ");
                }
            }
        } catch (e) {
			this.logger.error("populateAndProcessRequest Exception :: " + e + " \nStack\n " + e.stack);
        }

    },
    processAssetMrvs: function(serial, existingAssets) {
        var assetList;
        try {
            var existingAssetsList = JSON.parse(existingAssets);
            assetList = existingAssetsList ? existingAssetsList : [];
        } catch (e) {
            assetList = [];
        }
        var assetHelper = new AssetHelper();
        var queryMap = {};
        queryMap["serial"] = serial;
        queryMap["status.code"] = "UNASSIGNED";
        var asset = assetHelper.findAsset(queryMap);
        var assetMrvs = {};
        if (!asset) {
            this.logger.debug("processAssetMrvs :: No asset found with "+serial+", creating new");
            var newAsset = {};
            newAsset["serial"] = serial;
            newAsset["system"] = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_system", gs.getProperty('instance_name').toUpperCase()).toString();
            newAsset["status"] = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE").toString();
            newAsset["type"] = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_asset_type", "PERMANENT_BADGE").toString();
            assetMrvs["asset"] = assetHelper.createAsset(newAsset);
        } else {
            assetMrvs["asset"] = asset.getUniqueValue();
        }
        var gdt = new GlideDateTime();
        assetMrvs["asset_valid_from"] = gdt.getDisplayValue();
        gdt.addYearsUTC(1);
        assetMrvs["asset_valid_to"] = gdt.getDisplayValue();
        assetMrvs["asset_status"] = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE").toString();
        assetMrvs["asset_action"] = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "ADD").toString();
        assetMrvs["asset_record_status"] = "NEW";
        assetList.push(assetMrvs);
        return assetList;
    },
    findRequest: function(field, value) {
        var grRequest = new GlideRecordSecure(this.request_table);
        grRequest.addQuery(field, value);
		grRequest.setLimit(1);
        grRequest.query();
        if (grRequest.next()) {
            return grRequest;
        } else {
            return "";
        }
    },
    /*Approving the Bulk Requests Programmatically for Badge Printing*/
    approveRequest: function(request_sys_id) {
        var grApproval = new GlideRecordSecure(this.sysapproval_table);
        grApproval.addQuery('sysapproval', request_sys_id);
        grApproval.addQuery('state', 'requested');
		grApproval.setLimit(1);
        grApproval.query();
		if(!grApproval.hasNext()){
			this.logger.debug("approveRequest :: Approve request "+ request_sys_id +" has no requests to approve");
		}
        while (grApproval.next()) {
            grApproval.state = 'approved';
            grApproval.update();
        }
    },
    type: 'RequestHelper'
};