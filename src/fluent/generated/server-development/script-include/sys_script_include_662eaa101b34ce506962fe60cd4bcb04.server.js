var IdentityClientScriptHelper = Class.create();
IdentityClientScriptHelper.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    getUserDetails: function() {
        var req_for = this.getParameter('userId');
        var grSysUser = new GlideRecordSecure('x_aleen_snguardian_identity');
        if (grSysUser.get(req_for)) {
            var response = {};
            response.first_name = grSysUser.getValue("first_name");
            response.last_name = grSysUser.getValue("last_name");
            response.phone = grSysUser.getValue("phone");
            response.master_user_id = grSysUser.getValue("master_user_id");
            response.type = grSysUser.getDisplayValue('type.code');
            return JSON.stringify(response);
        }
        return "{}";
    },
    getWorkerDetailsDetails: function() {
        var property_value = this.getParameter('property_value');
        var property_name = this.getParameter('property_name');
        var grSysUser = new GlideRecordSecure('x_aleen_snguardian_identity');
        grSysUser.addQuery(property_name, property_value);
        grSysUser.addQuery('type.code', 'TEMPWORKER');
        grSysUser.setLimit(1);
        grSysUser.query();
        if (grSysUser.next()) {
            var response = {};
            response.worker_sysid = grSysUser.getUniqueValue();
            response.first_name = grSysUser.getValue("first_name") ? grSysUser.getValue("first_name") : "";
            response.last_name = grSysUser.getValue("last_name") ? grSysUser.getValue("last_name") : "";
            response.phone = grSysUser.getValue("phone") ? grSysUser.getValue("phone") : "";
            response.email = grSysUser.getValue("email") ? grSysUser.getValue("email") : "";
            response.phone = grSysUser.getValue("phone") ? grSysUser.getValue("phone") : "";
            response.department = grSysUser.getValue("department") ? grSysUser.getValue("department") : "";
            response.manager = grSysUser.getValue("manager") ? grSysUser.getValue("manager") : "";
            response.status = grSysUser.getDisplayValue("status.code") ? grSysUser.getDisplayValue("status.code") : "";
            response.userSystems = this.getUserSystems(grSysUser.getUniqueValue().toString()); //FETCH USER SYSTEMS
            return JSON.stringify(response);
        }
        return null;
    },
    getUserAssets: function() {
        var req_for = this.getParameter('userId');
        var grSysUser = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
        grSysUser.addQuery('identity', req_for);
        grSysUser.addQuery('is_deleted', false);
        grSysUser.query();
        var assets = [];
        while (grSysUser.next()) {
            var response = {};
            response.id = grSysUser.getValue("sys_id");
            response.asset = grSysUser.getValue("asset") ? grSysUser.getValue("asset") : "";
            response.asset_valid_from = grSysUser.getValue("valid_from");
            response.asset_status = grSysUser.getValue("status") ? grSysUser.getValue("status") : "";
            response.asset_valid_to = grSysUser.getValue("valid_to");
            response.asset_action = grSysUser.getValue("provisioning_action") ? grSysUser.getValue("provisioning_action") : "";
            response.asset_record_status = "EXISTING";
            response.asset_provisioning_status = grSysUser.getValue("provisioning_status") ? grSysUser.getValue("provisioning_status") : "";
            response.asset_identifier = grSysUser.getValue("identifier") ? grSysUser.getValue("identifier") : "";
            var grAsset = new GlideRecordSecure('x_aleen_snguardian_asset');
            if (grAsset.get(grSysUser.getValue("asset"))) {
                response.asset_number = grAsset.getValue('number') ? grAsset.getValue('number') : "";
                response.asset_serial = grAsset.getValue('serial') ? grAsset.getValue('serial') : "";
                response.system = grAsset.getElement("system") ? grAsset.getElement("system").code.toString() : "";
                response.asset_type = grAsset.getElement("type") ? grAsset.getElement("type").code.toString() : "";
            }
            var grStatusCode = new GlideRecordSecure('x_aleen_snguardian_status_code');
            if (grStatusCode.get(grSysUser.getValue("status"))) {
                response.asset_status_code = grStatusCode.getValue('code') ? grStatusCode.getValue('code') : "";
            }

            var grEntityAction = new GlideRecordSecure('x_aleen_snguardian_request_entity_action');
            grEntityAction.addQuery('code', 'NONE');
            grEntityAction.query();
            if (grEntityAction.next()) {
                response.asset_action = grEntityAction.getUniqueValue() ? grEntityAction.getUniqueValue() : "";
            }
            assets.push(response);
        }
        return JSON.stringify(assets);
    },
    getUserAccess: function() {
        var req_for = this.getParameter('userId');
        var grAccesslevel = new GlideRecordSecure('x_aleen_snguardian_identity_access');
        grAccesslevel.addQuery('identity', req_for);
        grAccesslevel.addQuery('is_deleted', false);
        grAccesslevel.query();
        var access = [];
        var grLocationAccessLevel = new GlideRecordSecure('x_aleen_snguardian_access_location');
        while (grAccesslevel.next()) {
            var response = {};
            response.id = grAccesslevel.getValue("sys_id");
            response.access_record_id = grAccesslevel.getValue("sys_id").toString();
            grLocationAccessLevel.initialize();
            grLocationAccessLevel.addQuery('access_level', grAccesslevel.getValue('access_level'));
            grLocationAccessLevel.setLimit(1);
            grLocationAccessLevel.query();
            if (grLocationAccessLevel.next()) {
                response.access_level = grLocationAccessLevel.getUniqueValue().toString();
            }
            var access_valid_from = grAccesslevel.getValue("valid_from").toString();
            var gdt_from = new GlideDateTime(access_valid_from);
            response.access_valid_from = gdt_from.getDisplayValue();


            var access_valid_to = grAccesslevel.getValue("valid_to").toString();
            var gdt_to = new GlideDateTime(access_valid_to);
            response.access_valid_to = gdt_to.getDisplayValue();
            response.access_status = grAccesslevel.getValue("status") ? grAccesslevel.getValue("status") : "";
            response.access_provisioning_status = grAccesslevel.getValue("provisioning_status") ? grAccesslevel.getValue("provisioning_status") : "";
            response.access_record_status = "EXISTING";
            response.associated_asset = grAccesslevel.getValue("associated_asset") ? grAccesslevel.getValue("associated_asset").toString() : "";
            var grEntityAction = new GlideRecordSecure('x_aleen_snguardian_request_entity_action');
            grEntityAction.addQuery('code', 'NONE');
            grEntityAction.query();
            if (grEntityAction.next()) {
                response.access_action = grEntityAction.getUniqueValue() ? grEntityAction.getUniqueValue() : "";
            }
            access.push(response);
        }
        return JSON.stringify(access);
    },
    getUserSystems: function(requestForId) {
        var userId = this.getParameter('userId');
        var req_for = userId ? userId : requestForId;
        var grSystem = new GlideRecordSecure('x_aleen_snguardian_identity_system');
        grSystem.addQuery('identity', req_for);
        grSystem.addQuery('identifier_type', 'PRIMARY');
        grSystem.addQuery('is_deleted', false);
        grSystem.query();
        var systems = [];
        while (grSystem.next()) {
            var response = {};
            response.id = grSystem.getValue("sys_id");
            response.system = grSystem.getValue("system") ? grSystem.getValue("system") : "";
            response.system_valid_from = grSystem.getValue("valid_from");
            response.system_status = grSystem.getValue("status") ? grSystem.getValue("status") : "";
            response.system_valid_to = grSystem.getValue("valid_to");
            response.system_action = grSystem.getValue("provisioning_action") ? grSystem.getValue("provisioning_action") : "";
            response.system_provisioning_status = grSystem.getValue("provisioning_status") ? grSystem.getValue("provisioning_status") : "";
            systems.push(response);
        }
        return JSON.stringify(systems);
    },
    getFlowContext: function() {
        var answer = {};
        var source_record = this.getParameter('source_record');
        var source_table = this.getParameter('source_table');
        var grFlowContext = new GlideRecordSecure('sys_flow_context');
        grFlowContext.addQuery('source_table', source_table);
        grFlowContext.addQuery('source_record', source_record);
        grFlowContext.setLimit(1);
        grFlowContext.query();
        if (grFlowContext.next()) {
            answer['id'] = grFlowContext.getValue('sys_id');
            return JSON.stringify(answer);
        }
        return null;
    },
    getUserAttestations: function() {
        var req_for = this.getParameter('userId');
        var response = [];
        var obj = {};
        var grIdentityAttestation = new GlideRecordSecure("x_aleen_snguardian_identity_attestation");
        grIdentityAttestation.addQuery("identity", req_for);
        grIdentityAttestation.query();
        while (grIdentityAttestation.next()) {
            obj = {};
            obj.training_name = grIdentityAttestation.getDisplayValue("assertion") ? grIdentityAttestation.getDisplayValue("assertion").toString() : "";
            obj.training_type = grIdentityAttestation.getValue("assertion") ? grIdentityAttestation.getDisplayValue("assertion.type") : "";
            obj.training_valid_from = grIdentityAttestation.getValue("valid_from").toString();
            obj.training_valid_to = grIdentityAttestation.getValue("valid_to").toString();
            obj.training_status = grIdentityAttestation.getDisplayValue("status") ? grIdentityAttestation.getDisplayValue("status").toString() : "";
            response.push(obj);
        }
        return JSON.stringify(response);
    },
    getReviewFilter: function() {
        var answer = {};
        var query = '';
        var group_by_query = '';
        var type = '';
        var task_id = this.getParameter('task_id');
        var grReviewTask = new GlideRecordSecure('x_aleen_snguardian_review_task');
        if (grReviewTask.get(task_id)) {
            query = 'review_task=' + grReviewTask.getValue('sys_id');
            if (grReviewTask.review.type.code == 'MANAGER') {
                group_by_query = group_by_query + 'GROUPBYidentity';
                type = 'MANAGER';
            } else if (grReviewTask.review.type.code == 'AREAOWNER') {
                group_by_query = group_by_query + 'GROUPBYaccess_level';
                type = 'AREAOWNER';
            } else if (grReviewTask.review.type.code == 'EXPIRY_BADGE') {
                group_by_query = group_by_query + 'GROUPBYidentity';
                type = 'EXPIRY_BADGE';
            } else if (grReviewTask.review.type.code == 'EXPIRY_TRAINING') {
                group_by_query = group_by_query + 'GROUPBYassertion';
                type = 'EXPIRY_TRAINING';
            }
        }
        answer['query'] = query;
        answer['group_by_query'] = group_by_query;
        answer['review_type'] = type;
        return JSON.stringify(answer);
    },
    populateAssociatedAsset: function() {
        var logger = new AlertGuardianLogger(" IdentityClientScriptHelper:: ");
        try {
            var identity = this.getParameter("sysparm_identity");
            var access = this.getParameter("sysparm_accessloc");
            var result = {};
            var assetList = [];
            var system;
            var grAccess = new GlideRecordSecure("x_aleen_snguardian_access_location");
            if(access && grAccess.get(access)) {
                system = grAccess.getElement("access_level").system;
                var systemNumber = grAccess.getElement("access_level").system.number;
            }
            var systemUtil = new SystemUtil(systemNumber);
            var systemFeature = systemUtil.getSystemFeature("ASSET-ACCESS-SYSTEM");
            while (systemFeature.next()) {
                var isBadgeRole = systemFeature.getValue("value");
                if (isBadgeRole || isBadgeRole == "true") {
                    result['associated-asset'] = "true";
                } else {
                    result['associated-asset'] = "false";
                }
            }
            grIdenAsset = new GlideRecordSecure("x_aleen_snguardian_identity_asset");
            grIdenAsset.addQuery("identity", identity);
            grIdenAsset.addQuery("asset.system", system);
            grIdenAsset.addEncodedQuery("status.code=ACTIVE^ORstatus.code=ASSIGNED");
            grIdenAsset.addEncodedQuery("provisioning_status.code=success^ORprovisioning_status.codeLIKEupdate-success");
            grIdenAsset.query();
            while (grIdenAsset.next()) {
                var asset = {};
                asset["number"] = grIdenAsset.getElement("asset") ? grIdenAsset.getElement("asset").number.toString() : "";
                asset["id"] = grIdenAsset.getValue("asset") ? grIdenAsset.getValue("asset").toString() : "";
                assetList.push(asset);
            }
            result["assetList"] = assetList;
            return JSON.stringify(result);
        } catch (e) {
            logger.error("populateAssociatedAsset Exception :: " + e + " \nStack\n " + e.stack);
			return JSON.stringify({});
        }
    },
    getLocationBasedIdentities: function() {
        var location = this.getParameter('sysparm_location');
        var identities = [];
        var grIdentityLocation = new GlideRecordSecure('x_aleen_snguardian_identity_location');
        grIdentityLocation.addQuery('location', location);
        grIdentityLocation.query();
        while (grIdentityLocation.next()) {
            if (grIdentityLocation.getValue('identity') && grIdentityLocation.getValue('identity') != '') {
                identities.push(grIdentityLocation.getValue('identity'));
            }
        }
        return JSON.stringify(identities);
    },
    checkEmailsPresent: function() {
        var emails = this.getParameter('sysparm_emails');
        var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
        grIdentity.addQuery('email', 'IN', emails);
        grIdentity.query();
        var foundEmails = [];
        while (grIdentity.next()) {
            foundEmails.push(grIdentity.getValue('email'));
        }
        return JSON.stringify(foundEmails);
    },
    getMultipleUserDetails: function() {
        var req_for = this.getParameter('sysparm_users');
        var imageId;
        var grSysUser = new GlideRecordSecure('x_aleen_snguardian_identity');
        grSysUser.addQuery('sys_id', 'IN', req_for);
        grSysUser.query();
        var allIdentities = [];
        while (grSysUser.next(req_for)) {
            var response = {};
            response.first_name = grSysUser.getValue("first_name") ? grSysUser.getValue("first_name") : '';
            response.last_name = grSysUser.getValue("last_name") ? grSysUser.getValue("last_name") : '';
            response.phone = grSysUser.getValue("phone") ? grSysUser.getValue("phone") : '';
            response.email = grSysUser.getValue("email") ? grSysUser.getValue("email") : '';
            response.department = grSysUser.getValue("department") ? grSysUser.getValue("department") : '';
            var glideAttachment = new GlideSysAttachment();
            var identityAttachments = glideAttachment.getAttachments("ZZ_YYsys_user", grSysUser.getValue("master_user_id"));
            while (identityAttachments.next()) {
                imageId = identityAttachments.getUniqueValue();
            }
            if (!imageId) {
                var attachmentId = grSysUser.getUniqueValue();
                var specificAttachments = glideAttachment.getAttachments("ZZ_YYx_aleen_snguardian_identity", attachmentId);
                while (specificAttachments.next()) {
                    imageId = specificAttachments.getUniqueValue();
                }
            }
            if (imageId) {
                response.photo = "true";
            } else {
                response.photo = "false";
            }
            allIdentities.push(response);
        }
        return JSON.stringify(allIdentities);
    },
    validateUser: function() {
        var respObj = {};
        var req_for = this.getParameter('request_for');
        var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
        if(req_for && grIdentity.get(req_for)) {
            var email = grIdentity.getValue("email");
            var glideAttachment = new GlideSysAttachment();
            var imageId;
            var identityAttachments = glideAttachment.getAttachments("ZZ_YYsys_user", grIdentity.getValue("master_user_id"));
            while (identityAttachments.next()) {
                imageId = identityAttachments.getUniqueValue();
            }
            if (!imageId) {
                var attachmentId = grIdentity.getUniqueValue();
                var specificAttachments = glideAttachment.getAttachments("ZZ_YYx_aleen_snguardian_identity", attachmentId);
                while (specificAttachments.next()) {
                    imageId = specificAttachments.getUniqueValue();
                }
            }
        }
        respObj.email = email;
        var grIdentityLoc = new GlideRecordSecure("x_aleen_snguardian_identity_location");
        grIdentityLoc.addQuery("identity", req_for);
		grIdentityLoc.setLimit(1);
        grIdentityLoc.query();
        if (grIdentityLoc.next()) {
            respObj.hasLocation = true;
            var grLocAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
            grLocAdmin.addQuery('locations', 'CONTAINS', grIdentityLoc.getValue('location'));
            grLocAdmin.orderBy('order');
			grLocAdmin.setLimit(1);
            grLocAdmin.query();
            if (grLocAdmin.next()) {
                if (grLocAdmin.getValue('mc_supported') == "1") {
                    respObj.mc_enabled = true;
                } else {
                    respObj.mc_enabled = false;
                }
            }

        } else {
            respObj.hasLocation = false;
        }
        if (imageId) {
            respObj.hasPhoto = true;
        } else {
            respObj.hasPhoto = false;
        }
        return JSON.stringify(respObj);
    },
    validateUserAndLocationMobileCred: function() {
        var respObj = {};
        var req_for = this.getParameter('request_for');
        var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
        if (req_for && grIdentity.get(req_for)){
            var email = grIdentity.getValue("email");
            var glideAttachment = new GlideSysAttachment();
            var imageId;
            var identityAttachments = glideAttachment.getAttachments("ZZ_YYsys_user", grIdentity.getValue("master_user_id"));
            while (identityAttachments.next()) {
                imageId = identityAttachments.getUniqueValue();
            }
            if (!imageId) {
                var attachmentId = grIdentity.getUniqueValue();
                var specificAttachments = glideAttachment.getAttachments("ZZ_YYx_aleen_snguardian_identity", attachmentId);
                while (specificAttachments.next()) {
                    imageId = specificAttachments.getUniqueValue();
                }
            }
        }
        respObj.email = email;
        var grIdentityLoc = new GlideRecordSecure("x_aleen_snguardian_identity_location");
        grIdentityLoc.addQuery("identity", req_for);
		grIdentityLoc.setLimit(1);
        grIdentityLoc.query();
        if (grIdentityLoc.next()) {
            respObj.hasLocation = true;
            var grLocAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
            grLocAdmin.addQuery('locations', 'CONTAINS', grIdentityLoc.getValue('location'));
            grLocAdmin.orderBy('order');
			grLocAdmin.setLimit(1);
            grLocAdmin.query();
            if (grLocAdmin.next()) {
                if (grLocAdmin.getValue('mc_supported') == "1") {
                    respObj.mc_enabled = true;
                } else {
                    respObj.mc_enabled = false;
                }
                if (grLocAdmin.getValue('web_provisioning') == "1") {
                    respObj.web_prov = true;
                } else {
                    respObj.web_prov = false;
                }
            }
        } else {
            respObj.hasLocation = false;
        }
        if (imageId) {
            respObj.hasPhoto = true;
        } else {
            respObj.hasPhoto = false;
        }
        return JSON.stringify(respObj);
    },
    checkActiveBadges: function() {
        var has_active_badge;
        var type = "TEMP_BADGE";
        var identity = this.getParameter('sysparm_identity');
        var grIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
        grIdentityAsset.addQuery('identity', identity);
        grIdentityAsset.addQuery('asset.type.code', type);
        grIdentityAsset.addQuery('status.code', 'ACTIVE');
		grIdentityAsset.setLimit(1);
        grIdentityAsset.query();
        if (grIdentityAsset.next()) {
            has_active_badge = true;
        } else {
            has_active_badge = false;
        }
        return has_active_badge;
    },
    checkIfVisitor: function() {
        var identity = this.getParameter('sysparm_identity');
        var isVisitor;
        var type = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_identitytype', 'VISITOR');
        var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
        if (identity && grIdentity.get(identity)) {
            var identity_type = grIdentity.getValue('type');
        }
        if (identity_type == type) {
            return true;
        } else {
            return false;
        }
    },
    getBadgeValidity: function() {
        var badge_validity = {};
        var location = this.getParameter('sysparm_location');
        var timezone;
        var validity = "24:00:00";
        var grLocation = new GlideRecordSecure('x_aleen_snguardian_location');
        if (location && grLocation.get(location)) {
            timezone = grLocation.getValue('time_zone');
        }
        var valid_from = new GlideDateTime();
        var valid_to = new GlideDateTime();
        var gtime = new GlideTime();
        gtime.setValue(validity);
        valid_to.add(gtime);
        var validFromEpoch = valid_from.getNumericValue();
        var validToEpoch = valid_to.getNumericValue();
        var validFrom = new TimeZoneUtil().getEpochAsStringinTargetTimeZone(validFromEpoch, timezone);
        var validTo = new TimeZoneUtil().getEpochAsStringinTargetTimeZone(validToEpoch, timezone);
        badge_validity.valid_from = validFrom;
        badge_validity.valid_to = validTo;
        return JSON.stringify(badge_validity);

    },
    getIdentityFromLoggedInUser: function() {
        //Populate data in response of identity_sys_id, identity location, Current Active Access Levels and
        //All User Prerequisites from userId
        var logger = new AlertGuardianLogger(" IdentityClientScriptHelper:: ");
        try {
            var response = {};
            response["existing_access_levels"] = [];
            response["identity"] = {};
            response["existing_access_location"] = {};
            response["existing_access_location"]["access_list"] = [];
            var identityId;
            var locationId;
            var req_for = this.getParameter('userId');
            var grAccessAction = new GlideRecordSecure('x_aleen_snguardian_request_entity_action');
            grAccessAction.addQuery('code', 'NONE');
			grAccessAction.setLimit(1);
            grAccessAction.query();
            var unchangedAccessAction;
            if(grAccessAction.next()) {
                unchangedAccessAction = grAccessAction.getUniqueValue();
                response["NONE"] = unchangedAccessAction;
            }
            var grSysUser = new GlideRecordSecure('x_aleen_snguardian_identity');
            grSysUser.addQuery("master_user_id", req_for);
			grSysUser.setLimit(1);
            grSysUser.query();
            if (grSysUser.next()) {
                identityId = grSysUser.getUniqueValue();

                var grIdenLoc = new GlideRecordSecure("x_aleen_snguardian_identity_location");
                grIdenLoc.addQuery("identity", identityId);
				grIdenLoc.setLimit(1);
                grIdenLoc.query();
                if (grIdenLoc.next()) {
                    locationId = grIdenLoc.getValue("location");
                    var grLocationAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
                    grLocationAdmin.addQuery('locations', 'CONTAINS', locationId);
                    grLocationAdmin.orderBy('order');
					grLocationAdmin.setLimit(1);
                    grLocationAdmin.query();
                    if (grLocationAdmin.next()) {
                        response["identity"].location_badge_technology = grLocationAdmin.getValue('badge_issue_type');
                    }
                }

                response["identity"].identityId = identityId;
                response["identity"].locationId = locationId;

                var grIdenAccess = new GlideRecordSecure("x_aleen_snguardian_identity_access");
                grIdenAccess.addQuery("identity", identityId);
                grIdenAccess.addQuery("is_deleted", false);
                grIdenAccess.addEncodedQuery("provisioning_status.code=success^ORprovisioning_status.codeLIKEupdate-success");
                grIdenAccess.addNotNullQuery("identifier");
                grIdenAccess.query();

                var grAccessLoc = new GlideRecordSecure("x_aleen_snguardian_access_location");

                while (grIdenAccess.next()) {
                    //getting location first 
                    grAccessLoc.initialize();
                    grAccessLoc.addQuery("access_level", grIdenAccess.getValue("access_level"));
					grAccessLoc.setLimit(1);
                    grAccessLoc.query();
                    if (grAccessLoc.next()) {
                        var currAL = grAccessLoc.getUniqueValue();
                    }
                    var obj = {};
                    obj["existing_access_level"] = grIdenAccess.getUniqueValue();
                    obj["existing_valid_from"] = new GlideDateTime(grIdenAccess.getDisplayValue("valid_from")).getValue();
                    obj["existing_valid_to"] = new GlideDateTime(grIdenAccess.getDisplayValue("valid_to")).getValue();
                    obj["existing_action"] = unchangedAccessAction;
                    obj["existing_associated_asset"] = grIdenAccess.getValue("associated_asset.number") ? grIdenAccess.getValue("associated_asset.number").toString() : "";
                    obj["existing_access_location"] = currAL;

                    response["existing_access_levels"].push(obj);

                    response["existing_access_location"][currAL] = obj;
                    response["existing_access_location"]["access_list"].push(obj);
                }
                return JSON.stringify(response);
            }
            return "{}";
        } catch (e) {
            logger.error("getIdentityFromLoggedInUser Exception :: " + e + " \nStack\n " + e.stack);
            return "{}";
        }
    },
    getIdentityAccessAndLocation: function() {
        var logger = new AlertGuardianLogger(" IdentityClientScriptHelper:: ");
        try {
            var response = {};
            response["existing_access_levels"] = [];
            response["identity"] = {};
            response["existing_access_location"] = {};
            response["existing_access_location"]["access_list"] = [];
            var locationId;
            var identityId = this.getParameter('userId');
            var grAccessAction = new GlideRecordSecure('x_aleen_snguardian_request_entity_action');
            grAccessAction.addQuery('code', 'NONE');
			grAccessAction.setLimit(1);
            grAccessAction.query();
            var unchangedAccessAction;
            if(grAccessAction.next()) {
                unchangedAccessAction = grAccessAction.getUniqueValue();
            }
            var grIdenLoc = new GlideRecordSecure("x_aleen_snguardian_identity_location");
            grIdenLoc.addQuery("identity", identityId);
			grIdenLoc.setLimit(1);
            grIdenLoc.query();
            if (grIdenLoc.next()) {
                locationId = grIdenLoc.getValue("location");
                var grLocationAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
                grLocationAdmin.addQuery('locations', 'CONTAINS', locationId);
                grLocationAdmin.orderBy('order');
				grLocationAdmin.setLimit(1);
                grLocationAdmin.query();
                if (grLocationAdmin.next()) {
                    response["identity"].location_badge_technology = grLocationAdmin.getValue('badge_issue_type');
                }
            }
            response["identity"].locationId = locationId;

            var grIdenAccess = new GlideRecordSecure("x_aleen_snguardian_identity_access");
            grIdenAccess.addQuery("identity", identityId);
            grIdenAccess.addQuery("is_deleted", false);
            grIdenAccess.addEncodedQuery("provisioning_status.code=success^ORprovisioning_status.codeLIKEupdate-success");
            grIdenAccess.addNotNullQuery("identifier");
            grIdenAccess.addNotNullQuery("valid_from");
            grIdenAccess.addNotNullQuery("valid_to");
            grIdenAccess.query();

            var grAccessLoc = new GlideRecordSecure("x_aleen_snguardian_access_location");
            while (grIdenAccess.next()) {
                //getting location first 
                grAccessLoc.initialize();
                grAccessLoc.addQuery("access_level", grIdenAccess.getValue("access_level"));
				grAccessLoc.setLimit(1);
                grAccessLoc.query();
                if (grAccessLoc.next()) {
                    var currAL = grAccessLoc.getUniqueValue();
                }
                var obj = {};
                obj["existing_access_level"] = grIdenAccess.getUniqueValue();
                obj["existing_valid_from"] = new GlideDateTime(grIdenAccess.getDisplayValue("valid_from")).getValue();
                obj["existing_valid_to"] = new GlideDateTime(grIdenAccess.getDisplayValue("valid_to")).getValue();
                obj["existing_action"] = unchangedAccessAction;
                obj["existing_associated_asset"] = grIdenAccess.getValue("associated_asset.number") ? grIdenAccess.getValue("associated_asset.number").toString() : "";
                obj["existing_access_location"] = currAL;

                response["existing_access_levels"].push(obj);

                response["existing_access_location"][currAL] = obj;
                response["existing_access_location"]["access_list"].push(obj);
            }
            return JSON.stringify(response);
        } catch (e) {
            logger.error("getIdentityAccessAndLocation Exception :: " + e + " \nStack\n " + e.stack);
            return "{}";
        }
    },

    getLocationAdminConfig: function() {
        var logger = new AlertGuardianLogger(" IdentityClientScriptHelper:: ");
        try {
            var grLocationAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
            grLocationAdmin.addQuery('locations', 'CONTAINS', this.getParameter('location_id'));
            grLocationAdmin.orderBy('order');
			grLocationAdmin.setLimit(1);
            grLocationAdmin.query();
            var response = {};
            if (grLocationAdmin.next()) {
                response.badge_technology = grLocationAdmin.getValue('badge_issue_type');
                response.system = grLocationAdmin.getValue('system');
                // response.badge_format = grLocationAdmin.getValue('badge_format');
            }
            return JSON.stringify(response);
        } catch (e) {
            logger.error("getLocationAdminConfig Exception :: " + e + " \nStack\n " + e.stack);
            return "{}";
        }
    },

    getUserBadgeFromConnectedInstance: function(identityId, locationId) {
		var logger = new AlertGuardianLogger(" IdentityClientScriptHelper:: ");
        try {
            //====================fetch parameters
            identityId = identityId ? identityId : this.getParameter('sysparm_identity_id');
            locationId = locationId ? locationId : this.getParameter('sysparm_location_id');

            var response = {};
            response['success'] = false;
            response['system_based_badge'] = {};
            response['copy_real_time_data'] = true;
            response['message'] = "";
            var systemAndBadgeObj = {};

            //=================location administration for defualt identity location
            var grLocationAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
            grLocationAdmin.addQuery('locations', 'CONTAINS', locationId);
            grLocationAdmin.orderBy('order');
			grLocationAdmin.setLimit(1);
            grLocationAdmin.query();
            if (grLocationAdmin.next()) {
                //================dealing with PAC system
                // if (grLocationAdmin.getValue('badge_issue_type') == "PLASTIC") {

                var locationDefaultSystemGr = grLocationAdmin.getValue('system');
                var twinConnSystemFeatrue = new SystemUtil(grLocationAdmin.getElement('system').number).getSystemFeature('COPY_REALTIME_DATA_FROM_SYSTEM');

                if (twinConnSystemFeatrue.next()) {
                    var twinConnSystemFeatrueValue = twinConnSystemFeatrue.getValue('value');
                    var linkedSystemCode = twinConnSystemFeatrueValue.replaceAll(/-?GUARDIAN-?/gi, ""); // Fetch the system code from feature value

                    if (twinConnSystemFeatrueValue.indexOf('GUARDIAN') != -1) {
                        var grIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
                        grIdentityAsset.addQuery('asset.system.code', linkedSystemCode);
                        grIdentityAsset.addQuery('identity', identityId);
                        grIdentityAsset.addQuery('is_deleted', false);
                        grIdentityAsset.addEncodedQuery("provisioning_status.code=success^ORprovisioning_status.codeLIKEupdate-success");
						grIdentityAsset.setLimit(1);
                        grIdentityAsset.query();
                        if (grIdentityAsset.next()) {
                            var system_id = grIdentityAsset.getValue('system');
                            systemAndBadgeObj.system = locationDefaultSystemGr;
                            systemAndBadgeObj.badge_serial = grIdentityAsset.getElement('asset').serial.toString();
                            response['system_based_badge'] = systemAndBadgeObj;
                            response['success'] = true;
                            return JSON.stringify(response);
                        } else {
                            return JSON.stringify(response);
                        }
                    } else {
                        var grSystem = new GlideRecordSecure('x_aleen_snguardian_system');
                        grSystem.addQuery('code', linkedSystemCode);
						grSystem.setLimit(1);
                        grSystem.query();
                        if (grSystem.next()) {
                            var provHelper = new ProvisioningHelper(grSystem.getValue('number'));

                            //=====================GET USER
                            var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
                            grIdentity.addQuery('sys_id', identityId);
                            grIdentity.addQuery('is_deleted', false);
							grIdentity.setLimit(1);
                            grIdentity.query();
                            if (grIdentity.next()) {
                                var instance1UserResponse = provHelper.execute({
                                    'email': grIdentity.getValue('email')
                                }, "GET-USER", {
                                    "SKIP_QUEUE": true
                                });
                                var getUserAssetData = {};
                                if (instance1UserResponse['success']) { //----------if user found
                                    getUserAssetData['systemUserId'] = instance1UserResponse['identifier'];

                                    //===================GET USER ASSET
                                    var userAssetsResponse = provHelper.execute({
                                        'systemUserId': instance1UserResponse['identifier']
                                    }, "GET-ALL-USERS-ASSETS", {
                                        "SKIP_QUEUE": true
                                    });
                                    if (userAssetsResponse['success']) {
                                        // Proceed with badge provisioning using same serial number from CCURE1 instance
                                        systemAndBadgeObj.system = locationDefaultSystemGr;
                                        systemAndBadgeObj.badge_serial = userAssetsResponse['badgeSerial'];
                                        response['system_based_badge'] = systemAndBadgeObj;
                                        response['success'] = true;
                                        return JSON.stringify(response);
                                    } else {
                                        logger.debug("getUserBadgeFromConnectedInstance : Pair Instance => "+linkedSystemCode+" : No user asset found for SystemUserId : "+instance1UserResponse['identifier']);
                                        return JSON.stringify(response);
                                    }
                                } else {
									logger.debug("getUserBadgeFromConnectedInstance : Pair Instance => "+linkedSystemCode+" : User Not Present (email) : "+grIdentity.getValue('email'));
                                    return JSON.stringify(response);
                                }
                            } else {
                                logger.debug("getUserBadgeFromConnectedInstance : Pair Instance => "+linkedSystemCode+" : Identity Not Found (sys_id) : "+identityId);
                                return JSON.stringify(response);
                            }
                        } else {
                            logger.debug("getUserBadgeFromConnectedInstance : Pair Instance => "+linkedSystemCode+" : Instance System not present");
                            return JSON.stringify(response);
                        }
                    }

                } else {
					logger.debug("getUserBadgeFromConnectedInstance : Current Instance (sys_id) =>"+locationDefaultSystemGr+" : Copy Feature not present");
                    response['copy_real_time_data'] = false;
                    return JSON.stringify(response);
                }

            } else {
				logger.debug("getUserBadgeFromConnectedInstance : Location (sys_id) =>"+locationId+" : Location Administration not configured");
                response['copy_real_time_data'] = false;
                return JSON.stringify(response);
            }
        } catch (e) {
			logger.error("getUserBadgeFromConnectedInstance Exception :: " + e + " \nStack\n " + e.stack);
        }
    },

    getAllLocationListAdminConfig: function() {
        var response = {};
        var systemList = [];
        var locationList = this.getParameter('location_id_list');
        var grLocAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
        for (location in locationList) {
            grLocAdmin.initialize();
            grLocAdmin.addQuery('locations', 'CONTAINS', locationList[location]);
			grLocAdmin.orderBy('order');
			grLocAdmin.setLimit(1);
            grLocAdmin.query();
            if (grLocAdmin.next()) {
                if (systemList.indexOf(grLocAdmin.getValue('system')) == -1) {
                    systemList.push(grLocAdmin.getValue('system'));
                }
            }
        }
        response.systems = systemList;
        return JSON.stringify(response);
    },
    getLocationConfig: function() {
        var location = this.getParameter('sysparm_location');
        var grLocationAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
        grLocationAdmin.addQuery('locations', 'CONTAINS', location);
		grLocationAdmin.orderBy('order');
		grLocationAdmin.setLimit(1);
        grLocationAdmin.query();
        if (grLocationAdmin.next()) {
            var response = {};
            response.mc_enabled = grLocationAdmin.getValue('mc_supported');
            response.nfc_system = grLocationAdmin.getDisplayValue('mc_nfc_system.code');
            response.sub_type = grLocationAdmin.getDisplayValue('mc_sub_type.code');
            response.web_prov = grLocationAdmin.getValue('web_provisioning');
            return JSON.stringify(response);
        }
        return null;
    },
    checkBadgeAvailability: function() {
        var badge_type = this.getParameter('sysparm_badge_type');
        var nfc_system = this.getParameter('sysparm_nfc');
        var sub_type = this.getParameter('sysparm_subtype');
        var grAsset = new GlideRecordSecure('x_aleen_snguardian_asset');
        if (badge_type == 'mobile_cred') {
            grAsset.addQuery('system.code', nfc_system);
            grAsset.addQuery('sub_type.code', sub_type);
        } else {
            grAsset.addQuery('type.code', 'TEMP_BADGE');
        }
        grAsset.addQuery('status.code', 'UNASSIGNED');
		grAsset.setLimit(1);
        grAsset.query();
        var badge_available = false;
        if (grAsset.next()) {
            badge_available = true;
        } else {
            badge_available = false;
        }
        return badge_available;
    },
    type: 'IdentityClientScriptHelper'
});