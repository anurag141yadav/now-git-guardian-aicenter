var ClientServerRelay = Class.create();
ClientServerRelay.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    getAccessAssertations: function() {
        var access_loc_id = this.getParameter("sysparm_access_id");
        var grAccessLoc = new GlideRecordSecure("x_aleen_snguardian_access_location");
        if (grAccessLoc.get(access_loc_id)) {
            var access_id = grAccessLoc.getValue("access_level");
        }
        if (access_id != null) {
            var requiredAssertions = [];
            var grAccessRequisite = new GlideRecordSecure("x_aleen_snguardian_access_requisite");
            grAccessRequisite.addQuery("access_level", access_id);
            grAccessRequisite.query();
            while (grAccessRequisite.next()) {
                var requiredAssertion = {};
                requiredAssertion.name = grAccessRequisite.getDisplayValue("assertion").toString();
                requiredAssertion.type = grAccessRequisite.getValue("assertion") ? grAccessRequisite.getDisplayValue("assertion.type") : "";
                requiredAssertion.required_for = grAccessRequisite.getDisplayValue("access_level").toString();
                requiredAssertions.push(requiredAssertion);
            }
            if (requiredAssertions.length != 0) {
                return JSON.stringify(requiredAssertions);
            } else {
                return false;
            }
        }
    },
    checkSystemFeature: function(access_sysid) {
        var accessHelper = new AccessHelper();
        var accessId = this.getParameter('access_level');
        var accessLevel = accessId ? accessId : access_sysid;
        var isAccessLocation = this.getParameter('isAccessLocation');
        if (isAccessLocation && isAccessLocation == true || isAccessLocation == "true") {
            grAccessLoc = new GlideRecordSecure("x_aleen_snguardian_access_location");
            if (grAccessLoc.get(accessLevel)) {
                accessLevel = grAccessLoc.getValue("access_level");
            }
        }
        var accessLevelRecord = accessHelper.getAccessLevel(accessLevel);
        var systemNumber = accessLevelRecord.system.number;
        var systemUtil = new SystemUtil(systemNumber);
        var systemFeature = systemUtil.getSystemFeature("ASSET-ACCESS-SYSTEM");
        var resultBadgeRole = {};
        while (systemFeature.next()) {
            var isBadgeRole = systemFeature.getValue("value");
            if (isBadgeRole || isBadgeRole == "true") {
                resultBadgeRole['associated-asset'] = "true";
            } else {
                resultBadgeRole['associated-asset'] = "false";
            }
            return JSON.stringify(resultBadgeRole);
        }
        return false;
    },
    checkSystemFeatureOfAccess: function(access_sysid) {
        var accessHelper = new AccessHelper();
        var accessId = this.getParameter('access_level');
        var accessLevel = accessId ? accessId : access_sysid;
        var isAccessLocation = this.getParameter('isIdentityAccess');
        if (isAccessLocation && isAccessLocation == true || isAccessLocation == "true") {
            grIdenAccess = new GlideRecordSecure("x_aleen_snguardian_identity_access");
            if (grIdenAccess.get(accessLevel)) {
                accessLevel = grIdenAccess.getValue("access_level");
            }
        }
        var accessLevelRecord = accessHelper.getAccessLevel(accessLevel);
        var systemNumber = accessLevelRecord.system.number;
        var systemUtil = new SystemUtil(systemNumber);
        var systemFeature = systemUtil.getSystemFeature("ASSET-ACCESS-SYSTEM");
        var resultBadgeRole = {};
        while (systemFeature.next()) {
            var isBadgeRole = systemFeature.getValue("value");
            if (isBadgeRole || isBadgeRole == "true") {
                resultBadgeRole['associated-asset'] = "true";
            } else {
                resultBadgeRole['associated-asset'] = "false";
            }
            return JSON.stringify(resultBadgeRole);
        }
        return false;
    },
    getAsset: function() {
        var response = {};
        var asset_sys_id = this.getParameter("sysparm_asset_sys_id");
        var grAsset = new GlideRecordSecure("x_aleen_snguardian_asset");
        if (grAsset.get(asset_sys_id)) {
            response.type = grAsset.getValue("type");
            response.sub_type = grAsset.getValue("sub_type");
            response.system = grAsset.getValue("system");
        }
        return JSON.stringify(response);
    },
    checkSystemFeatureFromCode: function() {
        var response = {};
        response.result = false;
        var feature = this.getParameter('sysparm_feature');
        var system = this.getParameter('sysparm_system');
        var grSysFeature = new GlideRecordSecure("x_aleen_snguardian_system_features");
        grSysFeature.addQuery("system", system);
        grSysFeature.addQuery("feature.code", feature);
		grSysFeature.setLimit(1);
        grSysFeature.query();
        if (grSysFeature.next()) {
            if (grSysFeature.getValue("value").toLowerCase() == "yes" || grSysFeature.getValue("value").toLowerCase() == true) {
                return true;
            } else {
                return false;
            }
        }
    },
    type: 'ClientServerRelay'
});