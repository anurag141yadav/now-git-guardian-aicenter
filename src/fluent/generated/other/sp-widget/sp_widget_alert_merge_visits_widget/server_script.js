(function () {
    if(input && input.action=="delete_single_visits"){
		//fetch merged group visit created number
		var grMergedVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
		var groupVisitNumber = "";
		if(input.groupVisitCreated){
			if(grMergedVisit.get(input.groupVisitCreated)){
				groupVisitNumber = grMergedVisit.getValue('number');
			}
		}
		
		//update single visits
		var grSingleVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
		var visitNumbers = [];
		grSingleVisit.initialize();
		grSingleVisit.addQuery('sys_id','IN',input.visits.join());
		grSingleVisit.query();
		while(grSingleVisit.next()){
			grSingleVisit.is_deleted = true;
			visitNumbers.push(grSingleVisit.getValue('number'));
			grSingleVisit.work_notes = "Visit has been merged to Group Visit "+groupVisitNumber;
			grSingleVisit.update();
		}
		
		//update merged group visit
		if(input.groupVisitCreated){
			grMergedVisit.initialize();
			if(grMergedVisit.get(input.groupVisitCreated)){
				grMergedVisit.work_notes = visitNumbers+" visits have been merged to Group";
				grMergedVisit.update();
				
				// Create Visitor Notification Record for scheduling
				var grVisitorNotification = new GlideRecordSecure('x_aleen_snguardian_visitor_notification');
				grVisitorNotification.initialize();
				grVisitorNotification.location = grMergedVisit.location;
				grVisitorNotification.type = "visitScheduled";
				grVisitorNotification.visit = grMergedVisit.getUniqueValue();
				if(input.email_subject && input.email_subject!=""){
					grVisitorNotification.subject = "Visits Merge Successfull";
				}
				grVisitorNotification.insert();
			}			
		}
		return;
	}
	
	if(input && input.action == "validate-visitors"){
			validateVisitors(input);
		}
	
		function validateVisitors(input){
			data.response = {};
			var visits = fetchVisitorsVisit(input.visitors); 
			var mergedVisits = input.currentVisitIds;
			for(var i =0;i<mergedVisits.length;i++){
				if(visits.indexOf(mergedVisits[i])==-1){
					visits.push(mergedVisits[i]);
				}
			}
			var visitorHelper = new VisitorHelper();
			data.response = visitorHelper.checkMergeVisitData(visits);
			return ;
		}
	
		function fetchVisitorsVisit(visitors){
			var visits = [];
			var userArr = visitors;
			var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
			var qc; 
			for (var ind = 0; ind < userArr.length; ind++) {
				var id = userArr[ind].trim();
				if (!id) continue;
					if (!qc) {
							qc = grVisit.addQuery('visitor', id);
					} else {
							qc.addOrCondition('visitor', id);
					}
				qc.addOrCondition('visitors', 'CONTAINS', id);
			}
			grVisit.query();
			while(grVisit.next()){
				if(visits.indexOf(grVisit.getUniqueValue())==-1){
					visits.push(grVisit.getUniqueValue());
				}
			}
			return visits;
		}
	
		var optionsData = {};
		optionsData.table = "x_aleen_snguardian_visitor_visit";
		optionsData.view = "mergevisit";
		optionsData.sys_id = -1;
		optionsData.fieldValues = {};
		var groupVisitData = {};
		var metadataGlideRecordHelper = new MetadataGlideRecordHelper();
		data.mergeVisits = input;
		groupVisitData.singleVisitData = {};
		groupVisitData.visitors = {};
		groupVisitData.visitors.value = [];
		groupVisitData.visitors.displayValue = [];
		groupVisitData.host = {};
		groupVisitData.host.value = [];
		groupVisitData.host.displayValue = [];
		groupVisitData.escort = {};
		groupVisitData.escort.value = [];
		groupVisitData.escort.displayValue = [];
		groupVisitData.startEndDateTime = {};
		var isRecurring = false;
		if(input && input.mergeVisitsMetdata){
			for (var i = 0; i < data.mergeVisits.mergeVisitsMetdata.visitIds.length; i++) {
					//store visit Id
					var visit = data.mergeVisits.mergeVisitsMetdata.visitIds[i];
					groupVisitData.singleVisitData[visit] =
							metadataGlideRecordHelper.getRecordAsJSONWithSelectedAttributes(
									"x_aleen_snguardian_visitor_visit",
									visit);
					//set isRecurring
					isRecurring = groupVisitData.singleVisitData[visit].is_recurring=="1";
					//set location data
					if (!groupVisitData.location) {
							var location = {};
							location.value = groupVisitData.singleVisitData[visit]["location.sys_id"];
							location.displayValue = groupVisitData.singleVisitData[visit]["location.name"];
							groupVisitData.location = location;
					}
					//set groupVisitData.visitors list
					if(groupVisitData.singleVisitData[visit]['type.code']=='GROUP'){
						var groupVisitVisitorList = groupVisitData.singleVisitData[visit].visitors?groupVisitData.singleVisitData[visit].visitors.split(','):[];
						for(var eachVisitor=0;eachVisitor<groupVisitVisitorList.length;eachVisitor++){
							if(groupVisitData.visitors.value.indexOf(groupVisitVisitorList[eachVisitor])){
								groupVisitData.visitors.value.push(groupVisitVisitorList[eachVisitor]);
							}
						}
						var grVisitor = new GlideRecordSecure('x_aleen_snguardian_visitor');
						grVisitor.addQuery('sys_id','IN',groupVisitData.visitors.value);
						grVisitor.query();
						while(grVisitor.next()){
							groupVisitData.visitors.displayValue.push(grVisitor.getValue('full_name'));
						}
						
					}else if (groupVisitData.visitors.value.indexOf(groupVisitData.singleVisitData[visit]["visitor.sys_id"]) == -1) {
							groupVisitData.visitors.value.push(groupVisitData.singleVisitData[visit]["visitor.sys_id"]);
							groupVisitData.visitors.displayValue.push(groupVisitData.singleVisitData[visit]["visitor.full_name"]);
					}
					if(groupVisitData.singleVisitData[visit].host && groupVisitData.singleVisitData[visit].host!="NULL"){
						var hostList = groupVisitData.singleVisitData[visit].host?groupVisitData.singleVisitData[visit].host.toString().split(','):[];
						for(var jthHost=0;jthHost<hostList.length;jthHost++){
							if(groupVisitData.host.value.indexOf(hostList[jthHost])==-1){
								groupVisitData.host.value.push(hostList[jthHost]);
							}
						}
						var grSysUser = new GlideRecordSecure('sys_user');
						grSysUser.addQuery('sys_id','IN',groupVisitData.host.value);
						grSysUser.query();
						while(grSysUser.next()){
							var fullName = grSysUser.getValue('first_name')+" "+grSysUser.getValue('last_name');
							if(groupVisitData.host.displayValue.indexOf(fullName)==-1)
								groupVisitData.host.displayValue.push(fullName);
						}
					}
					if(groupVisitData.singleVisitData[visit].escrort && groupVisitData.singleVisitData[visit].escrort!="NULL"){
							var escortList = groupVisitData.singleVisitData[visit].escrort?groupVisitData.singleVisitData[visit].escrort.toString().split(','):[];
							for(var jthescort=0;jthescort<escortList.length;jthescort++){
									if(groupVisitData.escort.value.indexOf(escortList[jthescort])==-1){
											groupVisitData.escort.value.push(escortList[jthescort]);
									}
							}
							var grSysUserRec = new GlideRecordSecure('sys_user');
							grSysUserRec.addQuery('sys_id','IN',groupVisitData.escort.value);
							grSysUserRec.query();
							while(grSysUserRec.next()){
									var escortFullName = grSysUserRec.getValue('first_name')+" "+grSysUserRec.getValue('last_name');
									if(groupVisitData.escort.displayValue.indexOf(escortFullName)==-1)
											groupVisitData.escort.displayValue.push(escortFullName);
							}
					}
					if (!isRecurring) {
							//set start end date time, all 6 for recurring and non-recurring
							if (!groupVisitData.startEndDateTime.start_date) {
									groupVisitData.startEndDateTime.start_date = groupVisitData.singleVisitData[visit].start_date;
									groupVisitData.startEndDateTime.end_date = groupVisitData.singleVisitData[visit].end_date;
							} else {
									groupVisitData.startEndDateTime.start_date =
											(new GlideDateTime(groupVisitData.startEndDateTime.start_date)).before(new GlideDateTime(groupVisitData.singleVisitData[visit].start_date)) ?
											groupVisitData.startEndDateTime.start_date:
											groupVisitData.singleVisitData[visit].start_date;
									groupVisitData.startEndDateTime.end_date =
											(new GlideDateTime(groupVisitData.startEndDateTime.end_date)).after(new GlideDateTime(groupVisitData.singleVisitData[visit].end_date))?
											groupVisitData.startEndDateTime.end_date :
											groupVisitData.singleVisitData[visit].end_date;
							}
					} else {
							if (!groupVisitData.startEndDateTime.start_date) {
									groupVisitData.startEndDateTime.start_date =
											groupVisitData.singleVisitData[visit].recurring_start_date;
									groupVisitData.startEndDateTime.end_date =
											groupVisitData.singleVisitData[visit].recurring_end_date;
									groupVisitData.startEndDateTime.start_time =
											groupVisitData.singleVisitData[visit].recurring_start_time;
									groupVisitData.startEndDateTime.end_time =
											groupVisitData.singleVisitData[visit].recurring_end_time;
							} else {
									groupVisitData.startEndDateTime.start_date =
											(new GlideDateTime(groupVisitData.startEndDateTime.start_date)).before(new GlideDateTime(groupVisitData.singleVisitData[visit].recurring_start_date)) ?
											groupVisitData.startEndDateTime.start_date:
											groupVisitData.singleVisitData[visit].recurring_start_date;
									groupVisitData.startEndDateTime.end_date =
											(new GlideDateTime(groupVisitData.startEndDateTime.end_date)).after(new GlideDateTime(groupVisitData.singleVisitData[visit].recurring_end_date))?
											groupVisitData.startEndDateTime.end_date :
											groupVisitData.singleVisitData[visit].recurring_end_date;
									groupVisitData.startEndDateTime.start_time =
											groupVisitData.startEndDateTime.start_time <
											groupVisitData.singleVisitData[visit].recurring_start_time ?
											groupVisitData.startEndDateTime.start_time :
											groupVisitData.singleVisitData[visit].recurring_start_time;
									groupVisitData.startEndDateTime.end_time =
											groupVisitData.startEndDateTime.end_time >
											groupVisitData.singleVisitData[visit].recurring_end_time ?
											groupVisitData.startEndDateTime.end_time :
											groupVisitData.singleVisitData[visit].recurring_end_time;
							}
					}
			}
		}else if(input && input.visitor){
			groupVisitData.visitors.value = input.visitor.value;
			groupVisitData.visitors.displayValue = input.visitor.displayValue;
		}			
		optionsData.fieldValues.visitors = {
					value: groupVisitData.visitors.value.join(),
					displayValue: groupVisitData.visitors.displayValue.join(),
					display_value_list: groupVisitData.visitors.displayValue,
			};
		optionsData.fieldValues.host = {
					value: groupVisitData.host.value.join(),
					displayValue: groupVisitData.host.displayValue.join(),
					display_value_list: groupVisitData.host.displayValue,
			};
		optionsData.fieldValues.escrort = {
					value: groupVisitData.escort.value.join(),
					displayValue: groupVisitData.escort.displayValue.join(),
					display_value_list: groupVisitData.escort.displayValue,
			};
			if (!isRecurring) {
					optionsData.fieldValues.start_date = {
							value: new GlideDateTime(
									groupVisitData.startEndDateTime.start_date).getDisplayValue(),
							displayValue: new GlideDateTime(
									groupVisitData.startEndDateTime.start_date).getDisplayValue(),
					};
					optionsData.fieldValues.end_date = {
							value: new GlideDateTime(
									groupVisitData.startEndDateTime.end_date).getDisplayValue(),
							displayValue: new GlideDateTime(
									groupVisitData.startEndDateTime.end_date).getDisplayValue(),
					};
			} else {
					optionsData.fieldValues.is_recurring = {
						value: "true",
						displayValue:"true",
					};
				
					optionsData.fieldValues.recurring_start_date = {
							value: new GlideDateTime(
									groupVisitData.startEndDateTime.start_date).getValue(),
							displayValue: new GlideDateTime(
									groupVisitData.startEndDateTime.start_date).getDisplayValue(),
					};
					optionsData.fieldValues.recurring_end_date = {
							value: new GlideDateTime(
									groupVisitData.startEndDateTime.end_date).getValue(),
							displayValue: new GlideDateTime(
									groupVisitData.startEndDateTime.end_date).getDisplayValue(),
					};
					optionsData.fieldValues.recurring_start_time = {
							value: new GlideDateTime(groupVisitData.startEndDateTime.start_time).getDisplayValue().split(' ')[1],
							displayValue: new GlideDateTime(groupVisitData.startEndDateTime.start_time).getDisplayValue().split(' ')[1]
					};
					optionsData.fieldValues.recurring_end_time = {
							value: new GlideDateTime(groupVisitData.startEndDateTime.end_time).getDisplayValue().split(' ')[1],
							displayValue: new GlideDateTime(groupVisitData.startEndDateTime.end_time).getDisplayValue().split(' ')[1]
					};
			}
			if(groupVisitData.location){
				optionsData.fieldValues.location = {
						value: groupVisitData.location.value,
						displayValue: groupVisitData.location.displayValue,
				};
			}
			var groupVisitTypeSysId = metadataGlideRecordHelper.getRecordSysIdByCode("x_aleen_snguardian_visitor_visit_type","GROUP").toString();
			optionsData.fieldValues.type = {
					value: groupVisitTypeSysId,
					displayValue: "Group",
			};
			var statusSysId = metadataGlideRecordHelper.getRecordSysIdByCode('x_aleen_snguardian_visitor_mt_visit_status','SCHEDULED').toString();
			optionsData.fieldValues.status = {
					value: statusSysId,
					displayValue: "Scheduled",
			};
	
			//validate initial data of widget opening
			validateVisitors({
				'currentVisitIds':data.mergeVisits.mergeVisitsMetdata.visitIds,
				'visitors': groupVisitData.visitors.value
			});
	
			optionsData.mergeVisitData = input;
			data.widget = $sp.getWidget("alert-form-widget", optionsData);
			data.groupVisitData = groupVisitData;
			return data;
})();
