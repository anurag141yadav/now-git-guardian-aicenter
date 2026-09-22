var VisitorHelper = Class.create();
VisitorHelper.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" VisitorHelper:: ");
        this.userRoles = [];
        var user = gs.getUser();
        if (user) {
            var roles = user.getRoles();
            for (var i = 0; i < roles.length; i++) {
                this.userRoles.push(roles[i]);
            }
        }
    },
    getWidgetHomeTopicsByRole(location_id, decision_table_id) {
        var role_input = "lobby";
        if (this.userRoles.indexOf("x_aleen_snguardian.lobby_admin") !== -1) {
            role_input = 'lobby';
        } else if (this.userRoles.indexOf("x_aleen_snguardian.host") !== -1) {
            role_input = 'host';
        } else if (this.userRoles.indexOf("x_aleen_snguardian.kiosk") !== -1) {
            role_input = 'kiosk';
        } else if (this.userRoles.indexOf("x_aleen_snguardian.portal") !== -1) {
            role_input = 'portal';
        }
        var decision_table_input = new MetadataGlideRecordHelper().getDecisionTableByCode("LOBBY-HOMEPAGE-BY-ROLE");
        if (null != decision_table_id && decision_table_id != "") {
            decision_table_input = decision_table_id;
        }
        var location_input = "";
        if (null != location_id && location_id != "") {
            location_input = location_id;
        }
        var inputs = {};
        inputs['u_location'] = location_input;
        inputs['u_role'] = role_input;
        var dt = new sn_dt.DecisionTableAPI();
        try {
            var response = dt.getDecisions(decision_table_input, inputs);
            var output = [];
            for (var kl = 0; kl < response.length; kl++) {
                var decision = response[kl];
                var elements = decision['result_elements'];
                var formattedDecision = {};
                for (var key in elements) {
                    if (elements[key]) {
                        formattedDecision[this.covertKeysToCamelCase(key)] = elements[key].toString();
                    }
                }
				formattedDecision['topics'] =JSON.parse(response[0].result_elements.u_topic);
				formattedDecision['kioskLocation'] = this.getLobbyListByRole();
				formattedDecision['role'] = role_input;
                output.push(formattedDecision);
            }
            if (output.length > 0) {
                return output[0];
            }
            return {};
        } catch (e) {
			this.logger.error("getWidgetHomeTopicsByRole Exception :: " + e + " \nStack\n " + e.stack);
            return JSON.parse("[]");
        }
    },
    getLobbyListByRole() {
		try{
			if (this.userRoles.indexOf("x_aleen_snguardian.lobby_admin") !== -1) {
				var userID = gs.getUserID();
				var lobbyAdminLocations = "";

				var grLocationAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
				grLocationAdmin.addQuery('lobby_admin', 'CONTAINS', userID);
				grLocationAdmin.query();
				while (grLocationAdmin.next()) {
					var locations = grLocationAdmin.locations.toString().split(',');
					if (lobbyAdminLocations.length == 0)
						lobbyAdminLocations += locations;
					else
						lobbyAdminLocations += "," + locations;
				}
				return lobbyAdminLocations;
			} else if (this.userRoles.indexOf("x_aleen_snguardian.kiosk") !== -1) {
				var identityId = this.getIdentityId();
				var grIdentityLocation = new GlideRecordSecure('x_aleen_snguardian_identity_location');
				grIdentityLocation.addQuery('identity', identityId);
				grIdentityLocation.query();
				if (grIdentityLocation.next()) {
					var locationId = grIdentityLocation.getValue('location');
					var locationGr = new GlideRecordSecure('x_aleen_snguardian_location');
					if (locationId && locationGr.get(locationId)){
						return {
							sys_id : locationGr.getUniqueValue(),
							name : locationGr.getValue('name'),
							timeZone : locationGr.getValue('time_zone')
						};
					}
					return "";
				}
				return "";
			} else if (this.userRoles.indexOf("x_aleen_snguardian.host") !== -1) {
				var identity = this.getIdentityId();

				var grIdentityLoc = new GlideRecordSecure('x_aleen_snguardian_identity_location');
				grIdentityLoc.addQuery('identity', identity);
				grIdentityLoc.query();
				var hostLocation = "";
				while (grIdentityLoc.next()) {
					hostLocation = grIdentityLoc.getValue('location.name').toString();
				}
				return hostLocation;
			} else {
				return "";
			}
		}catch(e){
			this.logger.error("getLobbyListByRole Exception :: " + e + " \nStack\n " + e.stack);
            return "";
		}
    },
    getLocationsEncodedQuery() {
        var locationSysIds = getLobbyListByRole();
        var encodedQuery = "";
        if (locationSysIds != "") {
            var sysIdArray = locationSysIds.split(',');

            for (var i = 0; i < sysIdArray.length; i++) {
                if (i > 0) {
                    encodedQuery += "^OR";
                }
                encodedQuery += "sys_id=" + sysIdArray[i];
            }
        }
        return encodedQuery;
    },
    getDataTableColumnNamesByRole(table_name) {
		var role_input = "portal";
		var table_input = table_name;
		if (this.userRoles.indexOf("admin") !== -1) {
            role_input = 'admin';
        }else if (this.userRoles.indexOf("x_aleen_snguardian.lobby_admin") !== -1) {
            role_input = 'lobby';
        } else if (this.userRoles.indexOf("x_aleen_snguardian.kiosk") !== -1) {
            role_input = 'kiosk';
        } else if (this.userRoles.indexOf("x_aleen_snguardian.host") !== -1) {
            role_input = 'host';
        }
        var decision_table_input = new MetadataGlideRecordHelper().getDecisionTableByCode("LOBBY-DATA-COLUMN-BY-ROLE");
        var inputs = {};
        inputs['u_table_name'] = table_input;
        inputs['u_role'] = role_input;
        var dt = new sn_dt.DecisionTableAPI();
        try {
            var response = dt.getDecisions(decision_table_input, inputs);
            var output = [];
            for (var kl = 0; kl < response.length; kl++) {
                var decision = response[kl];
                var elements = decision['result_elements'];
                var formattedDecision = {};
                for (var key in elements) {
                    if (elements[key]) {
                        formattedDecision[this.covertKeysToCamelCase(key)] = elements[key].toString();
                    }
                }
                output.push(formattedDecision);
            }
            if (output.length > 0) {
                return output[0]['columns'];
            }
            return "";
        } catch (e) {
           this.logger.error("getDataTableColumnNamesByRole DecisionTable Exception :: " + e + " \nStack\n " + e.stack);
            return "";
        }
    },
    update(tableName, sys_id, propertyName, propertyValue, refcolumnTableName, propertyDataType) {
        try {
            var grTable = new GlideRecordSecure(tableName);
            if (grTable.get(sys_id)) {
                if (refcolumnTableName != undefined && refcolumnTableName != "") {
                    var refColSysID = new MetadataGlideRecordHelper().getRecordSysIdByCode(refcolumnTableName, propertyValue);
                    grTable[propertyName] = refColSysID;
                } else {
                    if (propertyDataType == 'boolean') {
                        var booleanValue = (propertyValue.toLowerCase() === 'true');
                        grTable.setValue(propertyName, booleanValue);
                    } else {
                        grTable[propertyName] = propertyValue;
                    }
                }
                grTable.setWorkflow(false);
                grTable.update();
                return {
                    success: true,
                    message: 'Record updated successfully'
                };
            } else {
                return {
                    success: false,
                    message: 'Record not found'
                };
            }
        } catch (error) {
			this.logger.error("update Exception :: " + error + " \nStack\n " + error.stack);
            return {
                success: false,
                message: error.message
            };
        }

    },
    getAllChlidrenLocations: function(locationSysId, locationList) {
        if (!locationList) {
            locationList = [];
        }
        if (locationList.length == 0) {
            locationList.push(locationSysId);
        }
        var grLocation = new GlideRecordSecure('x_aleen_snguardian_location');
        grLocation.addQuery('parent', locationSysId);
        grLocation.query();
        while (grLocation.next()) {
            locationList.push(grLocation.getUniqueValue());
            this.getAllChlidrenLocations(grLocation.getUniqueValue(), locationList);
        }
        return locationList;
    },
    getAllParentLocations: function(locationSysId, locationList) {
        if (!locationList) {
            locationList = [];
        }
        var grLocation = new GlideRecordSecure('x_aleen_snguardian_location');
        if(grLocation.get(locationSysId)) {
            locationList.push(grLocation.getUniqueValue());
            if (grLocation.parent) {
                this.getAllParentLocations(grLocation.parent.toString(), locationList);
            }
        }
        return locationList;
    },
    getIdentityId: function() {
        var identityId = "";
        if (this.userRoles.indexOf("x_aleen_snguardian.host") !== -1 || this.userRoles.indexOf("x_aleen_snguardian.lobby_admin") !== -1 || this.userRoles.indexOf("x_aleen_snguardian.kiosk") !== -1) {
            var userID = gs.getUserID();
            var grIdentity = new GlideRecordSecure('x_aleen_snguardian_identity');
            grIdentity.addQuery('master_user_id', userID);
			grIdentity.setLimit(1);
            grIdentity.query();
            if (grIdentity.next()) {
                identityId = grIdentity.getUniqueValue();
            }
        }
        return identityId;
    },

    //used in fetching location like information for notification widget
    getVisitInfoBySysId: function(visit_record) {
		var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        var jsonObj = metaDataGlideRecordHelper.getRecordAsJSONWithSelectedAttributes('x_aleen_snguardian_visitor_visit', visit_record);
        return jsonObj;
    },

    getVisitTypeBySysId: function(visitType) {
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        return metaDataGlideRecordHelper.getCodeRecordBySysId('x_aleen_snguardian_visitor_visit_type', visitType);
    },

    getVisitorVisitStatus: function(visitor_sys_id) {
        var statusCode = "COMPLETED";
        var gaVisitType = new GlideAggregate('x_aleen_snguardian_visitor_visit');
        gaVisitType.addAggregate('COUNT', 'status');
        gaVisitType.addQuery('visitor', visitor_sys_id);
		gaVisitType.addEncodedQuery('status.code=SCHEDULED^ORstatus.code=CHECK-IN^ORstatus.code=EXTENDED-STAY');
        gaVisitType.query();
        var count = 0;
        if (gaVisitType.next()) {
            count = gaVisitType.getAggregate('COUNT', 'status');
            if (count > 0) {
                statusCode = "VALID-VISITS";
            }
        }
        return statusCode;
    },

    getNDABySysId: function(nda_sys_id) {
        var ndaData = {};
        var grNDA = new GlideRecordSecure('x_aleen_snguardian_visitor_nda_email_templates');
        if (nda_sys_id && grNDA.get(nda_sys_id)) {
            var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
            ndaData = guardianGlideRecordUtil.toJSON(grNDA, null);
        }
        return ndaData;
    },
    getNDAByLocationId: function(locationId) {
        //TODO:: it should be recursive
        var ndaTemplate = {};
        var grNDATemplate = new GlideRecordSecure('x_aleen_snguardian_visitor_nda_email_templates');
        grNDATemplate.addQuery('location', 'IN', locationId);
        grNDATemplate.query();
        while (grNDATemplate.next()) {
            var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
            ndaTemplate = guardianGlideRecordUtil.toJSON(grNDATemplate, null);
        }
        return ndaTemplate;
    },
    getLobbyConfig: function(location_id) {
        var decision_table_id = new MetadataGlideRecordHelper().getDecisionTableByCode("LOBBY-CONFIG");
        var inputs = {};
        inputs['u_location'] = location_id;
        var dt = new sn_dt.DecisionTableAPI();
        try {
            var response = dt.getDecisions(decision_table_id, inputs);
            var output = [];
            for (var kl = 0; kl < response.length; kl++) {
                var decision = response[kl];
                var elements = decision['result_elements'];
                var formattedDecision = {};
                for (var key in elements) {
                    if (elements[key]) {
                        formattedDecision[this.covertKeysToCamelCase(key)] = elements[key].toString();
                    }
                }
                output.push(formattedDecision);
            }
            if (output.length > 0) {
                return JSON.stringify(output[0]);
            }
            return JSON.stringify({});
        } catch (e) {
            this.logger.error("getLobbyConfig DecisionTable Exception :: " + e + " \nStack\n " + e.stack);
            return JSON.stringify({});
        }
    },
    covertKeysToCamelCase: function(key) {
        let newKey = key.startsWith("u_") ? key.slice(2) : key;
        newKey = newKey.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        return newKey;
    },
    getVisitStatusSysId: function(status) {
        var sysId = '';
        var grVisitStatus = new GlideRecordSecure('x_aleen_snguardian_visitor_mt_visit_status');
        grVisitStatus.addQuery('code', status);
		grVisitStatus.setLimit(1);
        grVisitStatus.query();
        if (grVisitStatus.next()) {
            sysId = grVisitStatus.getUniqueValue();
        }
        return sysId;
    },
    getLobbyActionConfig: function(location_input, role_input, action_input) {
        var decision_table_input = new MetadataGlideRecordHelper().getDecisionTableByCode("LOBBY-ACTIVITY-CONFIG");
        var inputs = {};
        inputs['u_location'] = location_input;
        inputs['u_actor'] = role_input;
        inputs['u_action'] = action_input;
        var dt = new sn_dt.DecisionTableAPI();
        try {
            var response = dt.getDecisions(decision_table_input, inputs);
            var output = [];
            for (var kl = 0; kl < response.length; kl++) {
                var decision = response[kl];
                var elements = decision['result_elements'];
                var formattedDecision = {};
                for (var key in elements) {
                    if (elements[key]) {
                        formattedDecision[this.covertKeysToCamelCase(key)] = elements[key].toString();
                    }
                }
                output.push(formattedDecision);
            }
            if (output.length > 0) {
                return JSON.stringify(output[0]);
            }
            return JSON.stringify({});
        } catch (e) {
            this.logger.error("getLobbyActionConfig DecisionTable Exception :: " + e + " \nStack\n " + e.stack);
			return JSON.parse("[]");	
        }
    },
    getRequestUpdates: function(requestType, sysId) {
        var response = {};
		try{
			if (requestType == 'walkin' || requestType == 'schedule') {
				var grVisRequest = new GlideRecordSecure('x_aleen_snguardian_visitor_request');
				if (grVisRequest.get(sysId)) {
					response['number'] = grVisRequest.number.toString();
					if (grVisRequest.status) {
						response['status_code'] = String(grVisRequest.status.code);
						response['status'] = String(grVisRequest.status.name);
					}
					if (grVisRequest.visit) {
						response['visit'] = String(grVisRequest.visit.number);
						response['visitId'] = String(grVisRequest.getValue('visit'));  
						if (grVisRequest.visit.status && response['status_code'] == 'CLOSED') {
							response['status_code'] = String(grVisRequest.visit.status.code);
							response['status'] = String(grVisRequest.visit.status.name);
						}
					}
				}
			} else if (requestType == 'checkin') {
				var grVisReq = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
				if (grVisReq.get(sysId)) {
					response['visitId'] = String(grVisReq.getUniqueValue()); //added
					response['number'] = grVisReq.number.toString();
					if (grVisReq.status) {
						response['status_code'] = String(grVisReq.status.code)=="SCHEDULED"?"OPEN":"CHECK-IN";
						response['status'] = String(grVisReq.status.name)=="Scheduled"?"Loading":"Checked In";
					}
				}
			}
			return response;
		}catch(e){
			this.logger.error("getRequestUpdates Exception :: " + e + " \nStack\n " + e.stack);
			return response;
		}
    },
	checkMergeVisitData : function(visitList){
		var visitMetaData = {};
		var resp = {
			allAllowed: false
		};
		try{
			for(var index=0;index<visitList.length;index++){
				var visit = this.getVisitInfoBySysId(visitList[index]);
				var isRecurring = visit['is_recurring']=="1";
				if(visit['status.code']!='SCHEDULED'){
					resp.message = "Only Scheduled Vists are allowed to merge";
					return resp;
				}
				if(!visitMetaData.location || !visitMetaData.startDate || !visitMetaData.isRecurring){
					visitMetaData.location = visit['location.sys_id'];
					visitMetaData.startDate = !isRecurring?String(new GlideDateTime(visit['start_date']).getDate()):visit['recurring_start_date'];
					visitMetaData.isRecurring = visit['is_recurring'];
					visitMetaData.listItemSelected = 1;
				}else if(visitMetaData.location!=visit['location.sys_id']){
					resp.message = "Location must be same for all visits to merge";
					return resp;
				}else if(visitMetaData.isRecurring!=visit['is_recurring']){
					resp.message = "Either all visits must be Recurring or Non-Recurring";
					return resp;
				}else if(visitMetaData.startDate!=(!isRecurring?String(new GlideDateTime(visit['start_date']).getDate()):visit['recurring_start_date'])){
					resp.message = "Start Date must be same for all visits to merge";
					return resp;
				}else{
					visitMetaData.listItemSelected += 1;
				}
			}
			resp.allAllowed = true;
			resp.data = visitMetaData;
			return resp;
		}catch(e){
			this.logger.error("checkMergeVisitData Exception :: " + e + " \nStack\n " + e.stack);
			return resp;
		}
	},

    type: 'VisitorHelper'
};