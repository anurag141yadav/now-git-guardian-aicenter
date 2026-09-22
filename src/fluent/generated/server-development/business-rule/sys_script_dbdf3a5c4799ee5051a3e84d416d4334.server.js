(function executeRule(current, previous /*null when async*/ ) {
	var logger = new AlertGuardianLogger("BR Update Group Visit Children :: ");
    if (current.operation() == "insert" && current.check_in_check_out_as_a_group == false) {
        var grLocation = new GlideRecordSecure('x_aleen_snguardian_location');
        grLocation.addQuery('sys_id', current.location);
        grLocation.query();
        if (grLocation.next()) {
            timezone = grLocation.getValue('time_zone');
            var gdt = new GlideDateTime();
            currentDate = new TimeZoneUtil().getEpochAsStringinTargetTimeZone(gdt.getNumericValue(), timezone).split(' ')[0].split('-')[2];
            var visitStartDate = new GlideDateTime(current.start_date).getDayOfMonthLocalTime();
            if (currentDate == visitStartDate) {
                var grVisitInsert = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
                var allVisitors = current.getValue('visitors') ? current.getValue('visitors').toString().split(',') : [];
                for (var i = 0; i < allVisitors.length; i++) {
                    grVisitInsert.initialize();
                    createChildVisit(grVisitInsert, current, allVisitors[i]);
                }
            }
        }

    } else if (current.operation() == "update" && current.check_in_check_out_as_a_group == false) {

        var previousVisitors = previous.visitors ? previous.visitors.toString().split(',') : [];
        var currentVisitors = current.visitors ? current.visitors.toString().split(',') : [];

        for (var prev = 0; prev < previousVisitors.length; prev++) { // Some visitors are deleted, so those visits will be deleted
            if (currentVisitors.indexOf(previousVisitors[prev]) == -1) {
                deleteOldVisitorVisits(current, previousVisitors[prev]);
            }
        }
        for (var curr = 0; curr < currentVisitors.length; curr++) { //New visitors are added, so new visits will be created
            if (previousVisitors.indexOf(currentVisitors[curr]) == -1) {
                var grInsertNewVisitors = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
                grInsertNewVisitors.initialize();
                createChildVisit(grInsertNewVisitors, current, currentVisitors[curr]);
            }
        }


        var grVisitUpdate = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        grVisitUpdate.addNotNullQuery('parent');
        grVisitUpdate.addQuery('parent', current.getUniqueValue());
        grVisitUpdate.query();
        while (grVisitUpdate.next()) {
            grVisitUpdate.location = current.location;
            grVisitUpdate.group = current.group;

            grVisitUpdate.nda = current.nda;
            grVisitUpdate.is_nda_signed = current.is_nda_signed;
            grVisitUpdate.nda_signed_date_time = current.nda_signed_date_time;
            grVisitUpdate.nda_sign_expiry_date_time = current.nda_sign_expiry_date_time;


            grVisitUpdate.recurring_type = current.recurring_type;
            grVisitUpdate.recurring_value = current.recurring_value;
            grVisitUpdate.recurring_start_time = current.recurring_start_time;
            grVisitUpdate.recurring_end_time = current.recurring_end_time;
            grVisitUpdate.is_recurring = current.is_recurring;
            grVisitUpdate.recurring_start_date = current.recurring_start_date;
            grVisitUpdate.recurring_end_date = current.recurring_end_date;
            grVisitUpdate.start_date = current.start_date;
            grVisitUpdate.end_date = current.end_date;
			if(current.status.code=="CHECK-IN"){
				grVisitUpdate.status = current.status;
			}
            grVisitUpdate.purpose = current.purpose;
            grVisitUpdate.host = current.host;
			grVisitUpdate.setWorkflow(false);
            grVisitUpdate.update();
        }
		if(!current.status.code=="CHECK-IN"){
			updateParentStatus();
		}
    }

    function deleteOldVisitorVisits(current, visitorSysId) {
        var grVisitDelete = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        grVisitDelete.addNotNullQuery('parent');
        grVisitDelete.addQuery('parent', current.getUniqueValue());
        grVisitDelete.addQuery('visitor', visitorSysId);
        grVisitDelete.query();
        grVisitDelete.deleteMultiple();
    }

    function createChildVisit(grVisitInsert, current, visitorSysId) {
        grVisitInsert.location = current.location;
        grVisitInsert.parent = current.getUniqueValue();
        grVisitInsert.visitor = visitorSysId;
        grVisitInsert.type = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_visitor_visit_type', 'SINGLE');
        grVisitInsert.group = current.group;

        grVisitInsert.nda = current.nda;
        grVisitInsert.is_nda_signed = current.is_nda_signed;
        grVisitInsert.nda_signed_date_time = current.nda_signed_date_time;
        grVisitInsert.nda_sign_expiry_date_time = current.nda_sign_expiry_date_time;

        grVisitInsert.recurring_type = current.recurring_type;
        grVisitInsert.recurring_value = current.recurring_value;
        grVisitInsert.recurring_start_time = current.recurring_start_time;
        grVisitInsert.recurring_end_time = current.recurring_end_time;
        grVisitInsert.is_recurring = current.is_recurring;
        grVisitInsert.recurring_start_date = current.recurring_start_date;
        grVisitInsert.recurring_end_date = current.recurring_end_date;
        grVisitInsert.start_date = current.start_date;
        grVisitInsert.end_date = current.end_date;

        grVisitInsert.purpose = current.purpose;
        grVisitInsert.host = current.host;
        grVisitInsert.status = current.status;
        grVisitInsert.insert();
    }
	function updateParentStatus() {
		var parentVisitSysId = current.getUniqueValue();
        var allDenied = true;
        var anyScheduled = false;
        var allFinalStates = true; // only SCHEDULED or DENIED allowed

        var grChildVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        grChildVisit.addQuery('parent', parentVisitSysId);
        grChildVisit.query();
        while (grChildVisit.next()) {
            var childStatus = grChildVisit.getDisplayValue("status.code");
            logger.debug('Child ' + grChildVisit.number + ' status = ' + childStatus);

            if (childStatus != 'SCHEDULED' && childStatus != 'DENIED') {
                allFinalStates = false; // found PENDING-APPROVAL or others
            }

            if (childStatus == 'SCHEDULED') {
                anyScheduled = true;
                allDenied = false;
            }

            if (childStatus != 'DENIED') {
                allDenied = false;
            }
        }

        if (!allFinalStates) {
            logger.debug('Parent not updated: some children are still pending approval or intermediate states');
            return;
        }

        var grParentVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        if (grParentVisit.get(parentVisitSysId)) {
            if (anyScheduled) {
                logger.debug('All children final & at least one scheduled → parent = SCHEDULED');
                grParentVisit.status = new MetadataGlideRecordHelper()
                    .getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "SCHEDULED");
            } else if (allDenied) {
                logger.debug('All children final & all denied → parent = DENIED');
                grParentVisit.status = new MetadataGlideRecordHelper()
                    .getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "DENIED");
            }
			grParentVisit.setWorkflow(false);
            grParentVisit.update();
        }
    }
})(current, previous);