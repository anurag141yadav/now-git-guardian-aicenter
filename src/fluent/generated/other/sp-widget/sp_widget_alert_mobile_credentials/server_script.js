(function() {
    var tag = "SERVER :: Alert NFC WEB PROV";
    var logger = new AlertGuardianLogger(" [Widget] Alert Mobile Credentials:: ");
    var systemNumber = getSysNumber(options.mc_system_code);
    var provHelper = new ProvisioningHelper(systemNumber);
    var serverData = {};
    var apiResponse;
    data.count = 0;
    if (!input) {
        data.count = 0;
        return data;
    }
    if (input && input.email) {
        getIdentityDetails(input.email);
        serverData.email = input.email;
        serverData.systemCode = options.mc_system_code;
        getUserBadges(serverData);
    }
    if (input && input.addToWallet == true) {
        serverData.identityId = input.badge.identityId;
        serverData.sourceId = input.badge.sourceId;
        serverData.systemNumber = systemNumber;
        serverData.isWebProv = true;
        try {
            apiResponse = provHelper.execute(serverData, "ADD-BADGE", {
                "SKIP_QUEUE": true
            });
        } catch (e) {
            logger.error("ApiResponse Exception :: " + e + " \nStack\n " + e.stack);
        }
        data.responseRequest = apiResponse;
        return data;
    }

    function getUserBadges(serverData) {
        apiResponse = provHelper.execute(serverData, "GET-USER-BADGES", {
            "SKIP_QUEUE": true
        });
        if (apiResponse.count && apiResponse.count > 0) {
            data.badges = apiResponse.badges;
            data.count = apiResponse.count;
            logger.debug("getUserBadges :: Badges Count :" + data.count + " :: mobilecredentil " + data.badges[0].mobileCredentialId);
            return data;
        } else {
            data.count = 0;
            return data;
        }
    }

    function getIdentityDetails(email) {
        var grIden = new GlideRecordSecure("x_aleen_snguardian_identity");
        if (email) {
            grIden.addQuery("email", email);
        } else {
            grIden.addQuery("master_user_id", gs.getUserID());
        }
        grIden.setLimit(1);
        grIden.query();
        if (grIden.next()) {
            logger.debug("getIdentityDetails :: Found identity with email");
            data.identity_sysid = grIden.getUniqueValue();
            data.userName = grIden.getValue("full_name");
            data.email = grIden.getValue("email");
            data.status = grIden.getDisplayValue("status") ? grIden.getDisplayValue("status") : "ACTIVE";
            logger.debug("getIdentityDetails IdentityImage :: " + grIden.getValue("photo") + " -> " + grIden.getElement("master_user_id").photo.toString());
            data.image = grIden.getValue("photo") ? grIden.getValue("photo") : grIden.getElement("master_user_id").photo.toString();
        }
    }

    function getSysNumber(systemCode) {
        var grSystem = new GlideRecordSecure("x_aleen_snguardian_system");
        grSystem.addQuery("code", systemCode);
        grSystem.setLimit(1);
        grSystem.query();
        if (grSystem.next()) {
            return grSystem.getValue("number");
        }
    }
})();