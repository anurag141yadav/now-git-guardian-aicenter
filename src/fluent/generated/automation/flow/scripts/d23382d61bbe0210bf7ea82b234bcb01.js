(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Process Area Owner Access Request Action:: ");
    var data = [];
    var grAccessAction = new GlideRecordSecure('x_aleen_snguardian_request_entity_action');
    grAccessAction.addQuery('code', 'NONE');
    grAccessAction.setLimit(1);
    grAccessAction.query();
    var unchangedAccessAction;
    while (grAccessAction.next()) {
        unchangedAccessAction = grAccessAction.getUniqueValue();
    }
    var accessType = inputs.record.variables.access_type;
    var combineFlag = true; // will shift to either above variables or DT
    if(combineFlag || accessType=="new_access"){
    var newAccessLevelsStr = inputs.record.variables.new_access_levels;
    var newAccessLevels = JSON.parse(newAccessLevelsStr);
    for (var i = 0; i < newAccessLevels.length; i++) {
		var newObj = {};
        newObj.access_level = newAccessLevels[i].access_level; // access location sys_id
        newObj.access_record_status = "NEW"
        newObj.access_action = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_request_entity_action', 'ADD');
        newObj.access_valid_from =newAccessLevels[i].access_valid_from;
        newObj.access_valid_to = newAccessLevels[i].access_valid_to;
        newObj.access_record_id = "";
        newObj.associated_asset = newAccessLevels[i].associated_asset;
		data.push(newObj);
        }
    }
    if(combineFlag || accessType=="existing_access"){
    var modifyExistingAccessLevelsStr = inputs.record.variables.existing_access_levels; 
    var modifyExistingAccessLevels = JSON.parse(modifyExistingAccessLevelsStr);
    for (var i = 0; i < modifyExistingAccessLevels.length; i++) {
		var AlId;
		var modObj = {};
		var gr = new GlideRecordSecure("x_aleen_snguardian_identity_access");
		if(gr.get(modifyExistingAccessLevels[i].existing_access_level)){
			var grAl = new GlideRecordSecure("x_aleen_snguardian_access_location");
			grAl.addQuery("access_level",gr.getValue("access_level"));
			grAl.query();
			if(grAl.next()){
				AlId = grAl.getUniqueValue();
			}
		}
        modObj.access_level = AlId;
        modObj.access_record_status = "EXISTING"
        modObj.access_action = modifyExistingAccessLevels[i].existing_action;
        modObj.access_valid_from =modifyExistingAccessLevels[i].existing_valid_from;
        modObj.access_valid_to = modifyExistingAccessLevels[i].existing_valid_to;
        modObj.access_record_id = modifyExistingAccessLevels[i].existing_access_level;
        modObj.associated_asset = modifyExistingAccessLevels[i].existing_associated_asset;
		data.push(modObj);
        }
    }
    var singleOwnerAccessLevel = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].access_action != unchangedAccessAction) {
            var accessEntry = {};
            accessEntry.access_level = data[i].access_level;
            accessEntry.access_record_status = data[i].access_record_status;
            accessEntry.access_action = data[i].access_action;
            accessEntry.access_valid_from = "";
            accessEntry.access_valid_to = "";
            accessEntry.access_record_id = "";
			accessEntry.associated_asset = data[i].associated_asset;
            try {
                if (accessEntry.access_record_status == "EXISTING") {
                    accessEntry.access_record_id = data[i].access_record_id;
                }
            } catch (ex) {
                logger.error("reading EXISTING record ID Exception :: " + e + " \nStack\n " + e.stack);
            }
            try {
                var validFrom = new GlideDateTime(data[i].access_valid_from);
                accessEntry.access_valid_from = validFrom.getDisplayValue();
                //accessEntry.access_valid_from = data[i].access_valid_from;
            } catch (ex) {
                logger.error("reading Valid From Exception :: " + e + " \nStack\n " + e.stack);
            }
            try {
                var validTo = new GlideDateTime(data[i].access_valid_to);
                accessEntry.access_valid_to = validTo.getDisplayValue();
                //accessEntry.access_valid_to = data[i].access_valid_to;
            } catch (ex) {
                logger.error("reading Valid To Exception :: " + e + " \nStack\n " + e.stack);
            }
            var count = 0;
            var grAccessLocation = new GlideRecordSecure('x_aleen_snguardian_access_location');
            var accessLocationAccessLevel;
            if (grAccessLocation.get(data[i].access_level)) {
                accessLocationAccessLevel = grAccessLocation.getValue('access_level');
            }
            var gaAccessOwn = new GlideAggregate('x_aleen_snguardian_access_owner');
            gaAccessOwn.addQuery('access_level', accessLocationAccessLevel);
            gaAccessOwn.addAggregate('COUNT');
            gaAccessOwn.query();
            while (gaAccessOwn.next()) {
                count = gaAccessOwn.getAggregate('COUNT');
            }
            logger.debug("Total Area Owner: " + count);
            if (count == 0) //No Approver available, so default approver
            {
                var indexFound = -1;
                for (var ind = 0; ind < singleOwnerAccessLevel.length; ind++) {
                    var ithMap = singleOwnerAccessLevel[ind];
                    if (ithMap['approver'] == "NO APPROVER") {
                        indexFound = ind;
                        break;
                    }
                }
                if (indexFound > -1) {
                    singleOwnerAccessLevel[indexFound]['accessLevelList'].push(accessEntry);
                } else {
                    var map = {};
                    map['approver'] = "NO APPROVER";
                    map['accessLevelList'] = [];
                    map['accessLevelList'].push(accessEntry);
                    singleOwnerAccessLevel.push(map);
                }

            } else if (count == 1) {
                var grAccessOwner = new GlideRecordSecure('x_aleen_snguardian_access_owner');
                grAccessOwner.addQuery('access_level', accessLocationAccessLevel);
                grAccessOwner.query();
                var accessOwner = "";
                while (grAccessOwner.next()) {
                    accessOwner += grAccessOwner.getValue('owner').toString();
                }
                var indexFound = -1;
                for (var ind = 0; ind < singleOwnerAccessLevel.length; ind++) {
                    var ithMap = singleOwnerAccessLevel[ind];
                    if (ithMap['approver'] == accessOwner) {
                        indexFound = ind;
                        break;
                    }
                }
                if (indexFound > -1) {
                    singleOwnerAccessLevel[indexFound]['accessLevelList'].push(accessEntry);
                } else {
                    var map = {};
                    map['approver'] = accessOwner;
                    map['accessLevelList'] = [];
                    map['accessLevelList'].push(accessEntry);
                    singleOwnerAccessLevel.push(map);
                }
            } else if (count > 1) {
                var grAccessOwner = new GlideRecordSecure('x_aleen_snguardian_access_owner');
                grAccessOwner.addQuery('access_level', accessLocationAccessLevel);
                grAccessOwner.orderBy('owner');
                grAccessOwner.query();
                var accessOwner = "";
                while (grAccessOwner.next()) {
                    if (accessOwner == "")
                        accessOwner += grAccessOwner.getValue('owner').toString();
                    else
                        accessOwner += "," + grAccessOwner.getValue('owner').toString();
                }
                var indexFound = -1;
                for (var ind = 0; ind < singleOwnerAccessLevel.length; ind++) {
                    var ithMap = singleOwnerAccessLevel[ind];
                    if (ithMap['approver'] == accessOwner) {
                        indexFound = ind;
                        break;
                    }
                }
                if (indexFound > -1) {
                    singleOwnerAccessLevel[indexFound]['accessLevelList'].push(accessEntry);
                } else {
                    var map = {};
                    map['approver'] = accessOwner;
                    map['accessLevelList'] = [];
                    map['accessLevelList'].push(accessEntry);
                    singleOwnerAccessLevel.push(map);
                }
            }
        }
    }
    outputs.response = singleOwnerAccessLevel;
})(inputs, outputs);