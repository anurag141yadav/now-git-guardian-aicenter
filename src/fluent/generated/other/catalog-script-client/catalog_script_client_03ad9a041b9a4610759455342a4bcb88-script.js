function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        g_form.setValue('prerequisites', []);
        return;
    }
    var initRequiredAssertions = [];
    g_form.setValue('prerequisites', initRequiredAssertions);
    var new_access_levels = g_form.getValue("new_access_levels");
    var gaAccessAssertions = new GlideAjax("x_aleen_snguardian.ClientServerRelay");
    gaAccessAssertions.addParam("sysparm_name", "getAccessAssertations");
    if (new_access_levels) {
        var accessList = JSON.parse(new_access_levels);
        for (var i = 0; i < accessList.length; i++) {
            gaAccessAssertions.addParam("sysparm_access_id", accessList[i].access_level);
            gaAccessAssertions.getXMLAnswer(callback);
        }
    }

    function callback(response) {
        try {
            if (response) {
                response = JSON.parse(response);
                for (var j = 0; j < response.length; j++) {
                    var isExisting = false;
                    var existing_attest = g_form.getValue("prerequisites");
                    try {
                        existing_attest = JSON.parse(existing_attest);
                        for (var i = 0; i < existing_attest.length; i++) {
                            if (response[j].required_for == undefined || (existing_attest[i].required_for == response[j].required_for && existing_attest[i].name == response[j].name)) {
                                isExisting = true;
                            }
                        }
                        if (!isExisting) {
                            existing_attest.push(response[j]);
                        }

                    } catch (e) {
                        existing_attest = [];
                        for (var j = 0; j < response.length; j++) {
                            existing_attest.push(response[j]);
                        }
                    }
                    g_form.setValue("prerequisites", JSON.stringify(existing_attest));
                }
            }
        } catch (e) {}

    }

    //CCURE UI SCRIPT

    var systemBasedBadges;
    var accessLocation;
    var currentLocationsList = [];

    if (new_access_levels) {
        try {
            //========validate if new locaion is added or repeated
            var accessLevelList = JSON.parse(new_access_levels);
            for (var ind = 0; ind < accessLevelList.length; ind++) {
                systemBasedBadges = g_form.getValue('system_based_badges') ? JSON.parse(g_form.getValue('system_based_badges')) : {};
                if ((!systemBasedBadges['validated_location'] || systemBasedBadges['validated_location'].indexOf(accessLevelList[ind].access_location) == -1) && accessLevelList[ind].access_location != g_form.getValue('location')) {
                    accessLocation = accessLevelList[ind].access_location;

                    //=======if new location is added, set it in in validated location list
                    if (!systemBasedBadges['validated_location']) {
                        systemBasedBadges['validated_location'] = [];
                        systemBasedBadges['validated_location'].push(accessLevelList[ind].access_location);
                    } else {
                        systemBasedBadges['validated_location'].push(accessLevelList[ind].access_location);
                    }
                    g_form.setValue('system_based_badges', JSON.stringify(systemBasedBadges));
                    var gaLocationAdmConfig = new GlideAjax('IdentityClientScriptHelper');
                    gaLocationAdmConfig.addParam('sysparm_name', 'getLocationAdminConfig');
                    gaLocationAdmConfig.addParam('location_id', accessLevelList[ind].access_location);
					
					//Set Processing in progress
					g_form.setValue('is_processing_done','false');
					g_form.showFieldMsg("new_access_levels","Processing user's badges...Please wait");

                    gaLocationAdmConfig.getXMLAnswer(userDatacallback);
                } else {
                    // Location alredy validated
                }

                //=====construct a unique list of current location list in MRVS to check any deletions
                if ((currentLocationsList).indexOf(accessLevelList[ind].access_location) == -1) {
                    currentLocationsList.push(accessLevelList[ind].access_location);
                }


            }
        } catch (err) {}
    } else {
        g_form.clearValue('new_badge_required');
        g_form.setValue('system_based_badges', "");
		g_form.setValue('is_processing_done','true');
		g_form.hideFieldMsg("new_access_levels", "Processing user's badges...Please wait");
    }

    function userDatacallback(response) {
        if (response) {
            try {
                var responseObj = JSON.parse(response);
                var badgeTech = responseObj['badge_technology'];

                //==========check badge technology is matching or not for new location
                if (badgeTech && g_form.getValue("default_badge_technology") && badgeTech != g_form.getValue("default_badge_technology")) {
                    g_form.hideFieldMsg('new_access_levels');
                    //======need to check new location badge tech (because need to give new location badge type)
					g_form.showFieldMsg('new_access_levels',"Your current badge may not work at the requested site/location.");
                    if (badgeTech == "PLASTIC") {
                        g_form.addInfoMessage("Your current badge may not work at the requested site/location. Your may need to request a compatible badge separately via <a target='_blank' href = '/esc?id=sc_cat_item&sys_id=a1b7dec81b284e106962fe60cd4bcb6c'>New Badge Request</a>");
                    } else if (badgeTech == "MC") {
                        g_form.addInfoMessage("Your current badge may not work at the requested site/location. Your may need to request a compatible badge separately via <a target='_blank' href = '/esc?id=sc_cat_item&sys_id=2dc1679b1b1f8210bf7ea82b234bcb13'>Mobile Credential Request</a>");
                    }
                    g_form.setValue('new_badge_required', badgeTech);

					// Location Config Check done - processing done
					g_form.setValue('is_processing_done','true');
					g_form.hideFieldMsg("new_access_levels", "Processing user's badges...Please wait");
                }

                //========if same system is not validated before, then only fetch badge information, otherwise use same badge
                else if ((!systemBasedBadges['system_badges'] || !systemBasedBadges['system_badges'][responseObj['system']]) && badgeTech == g_form.getValue("default_badge_technology")) {
                    var gaUserBadge = new GlideAjax('IdentityClientScriptHelper');
                    gaUserBadge.addParam('sysparm_name', 'getUserBadgeFromConnectedInstance');
                    gaUserBadge.addParam('sysparm_identity_id', g_form.getValue("request_for"));
                    gaUserBadge.addParam('sysparm_location_id', accessLocation);
                    gaUserBadge.getXMLAnswer(badgeResponse);
                }
            } catch (err) {}
        }
    }

    function badgeResponse(response) {
        try {
			// badge check is done - set processing done
			g_form.setValue('is_processing_done','true');
			g_form.hideFieldMsg("new_access_levels", "Processing user's badges...Please wait");

            //======if location config has to copy badge data and badge is present also
            var responseObj = response ? JSON.parse(response) : {};
            if (responseObj['copy_real_time_data']) {
                if (responseObj['success']) {
                    if (!systemBasedBadges['system_badges']) {
                        systemBasedBadges['system_badges'] = {};
                    }
                    systemBasedBadges['system_badges'][responseObj['system_based_badge']['system']] = responseObj['system_based_badge']['badge_serial'];
                    var storeBadges = JSON.stringify(systemBasedBadges);
                    g_form.setValue('system_based_badges', storeBadges);
                } else {

                    //======if location config has to copy badge data but badge is not present
                    //======need to check old location badge tech (because need to give old location badge type)
                    g_form.hideFieldMsg('new_access_levels');
                    g_form.setValue('new_badge_required', g_form.getValue('default_badge_technology'));

					g_form.showFieldMsg('new_access_levels',"User does not have an active badge authorized for this location.");
                    if (g_form.getValue('default_badge_technology') == "PLASTIC") {
                        g_form.addInfoMessage("Your current badge may not work at the requested site/location. Your may need to request a compatible badge separately via <a target='_blank' href = '/esc?id=sc_cat_item&sys_id=a1b7dec81b284e106962fe60cd4bcb6c'>New Badge Request</a>");
                    } else if (g_form.getValue('default_badge_technology') == "MC") {
                        g_form.addInfoMessage("Your current badge may not work at the requested site/location. Your may need to request a compatible badge separately via <a target='_blank' href = '/esc?id=sc_cat_item&sys_id=2dc1679b1b1f8210bf7ea82b234bcb13'>Mobile Credential Request</a>");
                    }
                }
            }
            //=====if location config says not to copy data -> do nothing
        } catch (err) {}
    }

    //=====here check if any location is deleted from MRVS
    if (systemBasedBadges && systemBasedBadges['validated_location'] && currentLocationsList) {
        var check = false;
        for (var z = 0; z < systemBasedBadges['validated_location'].length; z++) {
            if (currentLocationsList.indexOf(systemBasedBadges['validated_location'][z]) == -1) {
                check = true;
                break;
            }
        }
        if (check) {
            //=======if actually a location is deleted, then fetch system of present location to maintain
            for (var location_ind = 0; location_ind < currentLocationsList.length; location_ind++) {
                var gaLocAdminConfig = new GlideAjax('IdentityClientScriptHelper');
                gaLocAdminConfig.addParam('sysparm_name', 'getAllLocationListAdminConfig');
                gaLocAdminConfig.addParam('location_id_list', currentLocationsList);
                gaLocAdminConfig.getXMLAnswer(locationListConfigCallback);
            }
        }
    }

    function locationListConfigCallback(response) {
        try {
            //=====if actually a locaiton is deleted then delete redundant system from system based badges variables if present
            var responseObj = response ? JSON.parse(response) : {};
            var systemsSustained = responseObj.systems;
            for (system in systemBasedBadges['system_badges']) {
                if (systemsSustained.indexOf(system) == -1) {
                    delete systemBasedBadges['system_badges'][system];

                }
            }
            systemBasedBadges['validated_location'] = currentLocationsList;
            //=======if negative locations are deleted and only positive location is sustained
            //-------To be improved, in case of 2 positive locations are added ???
            if ((systemBasedBadges['validated_location'] && systemBasedBadges['validated_location'].length == 0) || (systemBasedBadges['validated_location'].length == 1 && systemBasedBadges['validated_location'][0] == g_form.getValue('location'))) {
                g_form.clearValue('new_badge_required');
            }
            g_form.setValue('system_based_badges', JSON.stringify(systemBasedBadges));
        } catch (err) {}
    }

}