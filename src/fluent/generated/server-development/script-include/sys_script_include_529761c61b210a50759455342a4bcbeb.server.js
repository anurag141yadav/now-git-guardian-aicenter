var AccessReviewHelper = Class.create();
AccessReviewHelper.prototype = {
    initialize: function(reviewRecord, processRecords) {
        this.review = reviewRecord;
        this.processData = processRecords;
		this.logger = new AlertGuardianLogger(" AccessReviewHelper:: ");
    },
    processAccess() {
        var grIdentityAccess = new GlideRecordSecure('x_aleen_snguardian_identity_access');
        var resObj = this.Reviewfilter(this.review);
        grIdentityAccess.addQuery(resObj.column, resObj.operator, resObj.choice);
        grIdentityAccess.addQuery('valid_to', '>=', this.review.start_date);
        var prov_status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_provisioning_status', 'FAILED');
        grIdentityAccess.addQuery('provisioning_status', '!=', prov_status);
        if (!this.review.override_records) {
            var code_query = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_status_code', 'COMPLETED');
            var code_query2 = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_status_code', 'CANCELLED');
            grIdentityAccess.addEncodedQuery('review_status=' + GlideStringUtil.escapeQueryTermSeparator(code_query)+ '^ORreview_statusISEMPTYORreview_status=' + GlideStringUtil.escapeQueryTermSeparator(code_query2));
        }
        grIdentityAccess.addQuery('is_deleted', false);
        grIdentityAccess.query();
        var reviewRecords = [];
        var allowners = [];
        var allidentities = [];
        var allaccess_levels = [];
        var fetched_access_levels_for_owners = [];
        var access_owner_map = {};
        while (grIdentityAccess.next()) {
            var reviewrecord = {};
            var task_owners = [];
            if (grIdentityAccess.getValue('identity') != null && grIdentityAccess.getValue('identity') &&
                grIdentityAccess.getValue('access_level') != null && grIdentityAccess.getValue('access_level')) { //Check for NULL data
                reviewrecord.identity_entry_id = grIdentityAccess.getValue("sys_id"); //identity_access_id 
                allidentities.push(grIdentityAccess.getValue('identity').toString()); // 
                allaccess_levels.push(grIdentityAccess.getValue('access_level').toString()); //
                if (this.review.criteria == 'PROCESSDELETED') {
                    var status = new ValueHelper().getIdByStatus('COMPLETED');
                    var action = new ValueHelper().getIdByEntityAction('NOACTIONNEEDED');
                    try {
                        grIdentityAccess.setValue('is_deleted', true);
                        grIdentityAccess.setValue('identifier', '');
                        grIdentityAccess.setValue('review_action', action);
                        grIdentityAccess.setValue('review_status', status);
                        grIdentityAccess.setValue('last_reviewed_on', this.review.start_date);
                        grIdentityAccess.update();
                    } catch (e) {
						this.logger.error("processAccess Exception : processing deleted records :: " + e + " \nStack\n " + e.stack);
                    }
                    this.review.status = status;
                } else if (this.review.type == 'MANAGER') {
                    try {
                        reviewrecord.type = 'MANAGER';
                        var manager = "";
                        var employee_type = grIdentityAccess.identity.type.code;
                        if (employee_type == 'EMPLOYEE') {
                            manager = grIdentityAccess.identity.master_user_id.manager; //
                        } else if (employee_type == 'TEMPWORKER') {
                            manager = grIdentityAccess.identity.manager.master_user_id; //
                        }
                        if (manager == '' || manager == undefined || manager == null) {
                            manager = this.review.owner; //
                        }
                        task_owners.push(manager);
                        task_owners.sort();
                        var combined_owner = task_owners.join('###');
                        reviewrecord.owners = combined_owner.toString();
                        allowners.push(combined_owner.toString());
                    } catch (e) {
						this.logger.error("processAccess Exception : reading Managers : " + e + " \nStack\n " + e.stack);
                    }
                } else if (this.review.type == 'AREAOWNER') {
                    try {
                        reviewrecord.type = 'AREAOWNER';
                        if (fetched_access_levels_for_owners.indexOf(grIdentityAccess.access_level.toString()) == -1) {
                            fetched_access_levels_for_owners.push(grIdentityAccess.access_level.toString());
                            var areaOwnerGr = new GlideRecordSecure('x_aleen_snguardian_access_owner');
                            areaOwnerGr.addQuery('access_level', grIdentityAccess.getValue('access_level')); //
                            areaOwnerGr.addQuery('type', 'OWNER');
                            areaOwnerGr.query();
                            while (areaOwnerGr.next()) {
                                if (null != areaOwnerGr.owner && undefined != areaOwnerGr.owner && areaOwnerGr.owner != "") {
                                    task_owners.push(areaOwnerGr.getElement("owner.master_user_id"));
                                }
                            }
                            if (task_owners.length == 0 && (grIdentityAccess.access_level.criticality == 'CRITICAL' || grIdentityAccess.access_level.criticality == 'HIGH')) {
                                task_owners.push(this.review.owner); //
                            }
                            task_owners.sort();
                            var combined_owners = task_owners.join('###');
                            reviewrecord.owners = combined_owners.toString();
                            allowners.push(combined_owners.toString());
                            access_owner_map[grIdentityAccess.access_level.toString()] = combined_owners.toString(); //
                        } else {
                            reviewrecord.owners = access_owner_map[grIdentityAccess.access_level.toString()]; //
                        }
                    } catch (e) {
						this.logger.error("processAccess Exception : Processing Access Level "+ grIdentityAccess.access_level.name+" for AO Review :: " + e + " \nStack\n " + e.stack);
                    }
                }
                reviewRecords.push(reviewrecord);
            }
        }
        if (this.review.criteria != 'PROCESSDELETED') {
            this.createTask(allowners, allidentities, allaccess_levels, reviewRecords);
        }
    },
    processAssets() {
        var grIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
        var resObj = this.Reviewfilter(this.review);
        this.logger.debug("Filter : " + resObj.column + " " + resObj.operator + " " + resObj.choice);
        grIdentityAsset.addQuery(resObj.column, resObj.operator, resObj.choice);
        grIdentityAsset.addQuery('valid_to', '>=', this.review.start_date);
        var prov_status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_provisioning_status', 'FAILED');
        grIdentityAsset.addQuery('provisioning_status', '!=', prov_status);
        grIdentityAsset.addQuery('is_deleted', false);
        if (!this.review.override_records) {
            var code_query = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_status_code', 'COMPLETED');
            var code_query2 = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_status_code', 'CANCELLED');
            grIdentityAsset.addEncodedQuery('review_status=' + GlideStringUtil.escapeQueryTermSeparator(code_query) + '^ORreview_statusISEMPTYORreview_status=' + GlideStringUtil.escapeQueryTermSeparator(code_query2));
        }
        grIdentityAsset.query();
        var reviewRecords = [];
        var allowners = [];
        var allidentities = [];
        var all_assets = [];
        if (this.review.criteria == 'PROCESSDELETED') {
            var status = new ValueHelper().getIdByStatus('COMPLETED');
            var action = new ValueHelper().getIdByEntityAction('NOACTIONNEEDED');
            while (grIdentityAsset.next()) {
                try {
                    grIdentityAsset.setValue('is_deleted', true);
                    grIdentityAsset.setValue('identifier', '');
                    grIdentityAsset.setValue('review_action', action);
                    grIdentityAsset.setValue('review_status', status);
                    grIdentityAsset.setValue('last_reviewed_on', this.review.start_date);
                    grIdentityAsset.update();

                } catch (e) {
					this.logger.error("processAssets Exception : processing deleted records :: " + e + " \nStack\n " + e.stack);
                }
            }
        } else {
            while (grIdentityAsset.next()) {
                var reviewrecord = {};
                var task_owners = [];
                if (grIdentityAsset.getValue('identity') != null && grIdentityAsset.getValue('identity') &&
                    grIdentityAsset.getValue('asset') != null && grIdentityAsset.getValue('asset')) {
                    reviewrecord.identity_entry_id = grIdentityAsset.getValue("sys_id");
                    reviewrecord.type = 'EXPIRY_BADGE';
                    allidentities.push(grIdentityAsset.getValue('identity').toString());
                    all_assets.push(grIdentityAsset.getValue('asset').toString());
                    task_owners = this.review.task_owners.toString().split(',');
                    task_owners.sort();
                    var combined_owners = task_owners.join('###');
                    reviewrecord.owners = combined_owners.toString();
                    allowners.push(combined_owners.toString());
                    reviewRecords.push(reviewrecord);
                }
            }
        }
        if (this.review.criteria != 'PROCESSDELETED') {
            this.createTask(allowners, allidentities, all_assets, reviewRecords);
        }
    },
    processAssertions() {
        var grIdentityAttestation = new GlideRecordSecure('x_aleen_snguardian_identity_attestation');
        var resObj = this.Reviewfilter(this.review);
        grIdentityAttestation.addQuery(resObj.column, resObj.operator, resObj.choice);
        grIdentityAttestation.addQuery('valid_to', '>=', this.review.start_date);
        //var prov_status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_provisioning_status', 'FAILED');
        //grIdentityAttestation.addQuery('provisioning_status', '!=', prov_status);
        grIdentityAttestation.addQuery('is_deleted', false);
        if (!this.review.override_records) {
            var code_query = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_status_code', 'COMPLETED');
            var code_query2 = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_status_code', 'CANCELLED');
            grIdentityAttestation.addEncodedQuery('review_status=' + GlideStringUtil.escapeQueryTermSeparator(code_query) + '^ORreview_statusISEMPTY^ORreview_status=' + GlideStringUtil.escapeQueryTermSeparator(code_query2));

        }
        grIdentityAttestation.query();
        var reviewRecords = [];
        var allowners = [];
        var allidentities = [];
        var all_assertions = [];
        while (grIdentityAttestation.next()) {
            var reviewrecord = {};
            var task_owners = [];
            if (grIdentityAttestation.getValue('identity') != null && grIdentityAttestation.getValue('identity') &&
                grIdentityAttestation.getValue('assertion') != null && grIdentityAttestation.getValue('assertion')) {
                reviewrecord.identity_entry_id = grIdentityAttestation.getValue("sys_id");
                reviewrecord.type = 'EXPIRY_TRAINING';
                allidentities.push(grIdentityAttestation.getValue('identity').toString());
                all_assertions.push(grIdentityAttestation.getValue('assertion').toString());
                task_owners = this.review.task_owners.toString().split(',');
                task_owners.sort();
                var combined_owners = task_owners.join('###');
                reviewrecord.owners = combined_owners.toString();
                allowners.push(combined_owners.toString());
                reviewRecords.push(reviewrecord);
            }
        }
        this.createTask(allowners, allidentities, all_assertions, reviewRecords);
    },
    processUsers() {
        var status = new ValueHelper().getIdByStatus('COMPLETED');
        var action = new ValueHelper().getIdByEntityAction('NOACTIONNEEDED');
        var resObj = this.Reviewfilter(this.review);
        for (var i = 0; i < resObj.choice.length; i++) {
            //var encodedQuery = '';
            var pair = resObj.choice[i].split('#');
            var grIdentityAccess = new GlideRecordSecure('x_aleen_snguardian_identity_access');
            //encodedQuery = 'identity.user_name=' + pair[0] + '^access_level.system.code=' + pair[1]; 
            grIdentityAccess.addEncodedQuery('identity.user_name=' + GlideStringUtil.escapeQueryTermSeparator(pair[0]) + '^access_level.system.code=' + GlideStringUtil.escapeQueryTermSeparator(pair[1]));
            var prov_status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_provisioning_status', 'FAILED');
            grIdentityAccess.addQuery('provisioning_status', '!=', prov_status);
            grIdentityAccess.addQuery('is_deleted', false);
            grIdentityAccess.query();
            while (grIdentityAccess.next()) {
                grIdentityAccess.setValue('is_deleted', true);
                grIdentityAccess.setValue('identifier', '');
                grIdentityAccess.setValue('review_action', action); //reference -need to pass sysID
                grIdentityAccess.setValue('review_status', status); //reference - sysID
                grIdentityAccess.setValue('last_reviewed_on', this.review.start_date);
                grIdentityAccess.update();
            }
        }
        for (var j = 0; j < resObj.choice.length; j++) {
            var grIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
            //var encodedQuery2 = '';
            var pairAsset = resObj.choice[j].split('#');
            //encodedQuery2 = 'identity.user_name=' + pairAsset[0] + '^asset.system.code=' + pairAsset[1]; 
            grIdentityAsset.addEncodedQuery('identity.user_name=' + GlideStringUtil.escapeQueryTermSeparator(pairAsset[0]) + '^asset.system.code=' + GlideStringUtil.escapeQueryTermSeparator(pairAsset[1]));
            var prov_status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_provisioning_status', 'FAILED');
            grIdentityAsset.addQuery('provisioning_status', '!=', prov_status);
            grIdentityAsset.addQuery('is_deleted', false);
            grIdentityAsset.query();
            while (grIdentityAsset.next()) {
                grIdentityAsset.setValue('is_deleted', true);
                grIdentityAsset.setValue('identifier', '');
                grIdentityAsset.setValue('review_action', action);
                grIdentityAsset.setValue('review_status', status);
                grIdentityAsset.setValue('last_reviewed_on', this.review.start_date);
                grIdentityAsset.update();
            }
        }
        this.review.status = status;
    },
    createTask(allowners, allidentities, all_entries, reviewRecords) {
        var arrayUtil = new global.ArrayUtil();
        var distinct_owners = [];
        allowners.sort();
        var all_identities = allidentities.sort();
        all_entries.sort();
        distinct_owners = arrayUtil.unique(allowners);
        distinct_identities = arrayUtil.unique(all_identities);
        distinct_entries = arrayUtil.unique(all_entries);
        var alert_message = "This Project will create " + distinct_owners.length + " review tasks with  " + reviewRecords.length + " access assignments. The review will impact  " + distinct_identities.length + " individual users and   " + distinct_entries.length + " records ";
        if (this.processData) {
            var grReviewTaskDD = new GlideRecordSecure('x_aleen_snguardian_review_task');
            grReviewTaskDD.addQuery('review', this.review); //
            grReviewTaskDD.query();
            grReviewTaskDD.deleteMultiple();
            let owners_record_count = {};
            reviewRecords.forEach((eventObject) => {
                if (owners_record_count.hasOwnProperty(eventObject.owners)) {
                    owners_record_count[eventObject.owners]++;
                } else {
                    owners_record_count[eventObject.owners] = 1;
                }
            });
            owner_task_map = {};
            for (var j = 0; j < distinct_owners.length; j++) {
                if (distinct_owners[j] != "") { // uncomment this , if we have to create a task for all access levels without any area owners
                    var grReviewTask = new GlideRecordSecure('x_aleen_snguardian_review_task');
                    grReviewTask.initialize();
                    grReviewTask.review = this.review.getUniqueValue();
                    var assigned_list = distinct_owners[j].replaceAll("###", ",");
                    grReviewTask.setValue("assigned_to", assigned_list.toString());
                    grReviewTask.setValue("total_records", owners_record_count[distinct_owners[j]]);
                    grReviewTask.setValue("pending", owners_record_count[distinct_owners[j]]);
                    grReviewTask.insert();
                    owner_task_map[distinct_owners[j]] = grReviewTask.getUniqueValue(); //
                }
            }
            for (var k = 0; k < reviewRecords.length; k++) {
                var review_record_to_update = reviewRecords[k];
                var table_name = "";
                if (review_record_to_update.owners != "") { // uncomment this , if we have to create a task for all access levels without any area owners
                    if (review_record_to_update.type == "EXPIRY_BADGE") {
                        table_name = 'x_aleen_snguardian_identity_asset';
                    } else if (review_record_to_update.type == "EXPIRY_TRAINING") {
                        table_name = 'x_aleen_snguardian_identity_attestation';
                    } else {
                        table_name = 'x_aleen_snguardian_identity_access';
                    }
                    var grRecord = new GlideRecordSecure(table_name);
                    if (grRecord.get(review_record_to_update.identity_entry_id)) {
                        var review_assigned_to = review_record_to_update.owners;
                        var review_assign = review_assigned_to.replaceAll("###", ",");
                        var reviewTaskId = owner_task_map[review_assigned_to];
                        grRecord.review_assigned_to = review_assign;
                        grRecord.review_task = reviewTaskId;
                        grRecord.review_status = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "REVIEW-PENDING");
                        grRecord.review_action = new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "TOBEREVIEWED");
                        grRecord.delegated_to = "NULL";
                        grRecord.update();

                    }
                }
            }
        } else {
            return alert_message;
        }
    },
    Reviewfilter(review) {
        var criteria = review.criteria;
        this.logger.debug("Reviewfilter :: Filter criteria: " + criteria);
        var field = "";
        var operator = "";
        var applied_filter = "";
        var value = "";
        var current = "";
        if (criteria == "ACCESLEVELS") {
            applied_filter = review.access_levels;
            value = applied_filter.toString().split(",");
            if (value != "") {
                operator = "IN";
            } else {
                operator = "!=";
            }
            field = "access_level";

        } else if (criteria == "EXPIRY") {
            applied_filter = review.expiry_status;
            value = "";
            if (applied_filter == "EXP15") {
                current = new GlideDateTime();
                current.addDaysUTC(15);
                value = current.getValue();
                operator = "<=";
            } else if (applied_filter == "EXP30") {
                current = new GlideDateTime();
                current.addDaysUTC(30);
                value = current.getValue();
                operator = "<=";
            } else if (applied_filter == "EXP5") {
                current = new GlideDateTime();
                current.addDaysUTC(5);
                value = current.getValue();
                operator = "<=";
            } else {
                operator = "!=";
                value = "";
            }
            field = "valid_to";
        } else if (criteria == "LOCATION") {
            applied_filter = review.locations;
            var table = "";
            if (review.type == "EXPIRY_BADGE") {
                table = 'x_aleen_snguardian_asset_location';
                field = 'asset';
            } else {
                table = 'x_aleen_snguardian_access_location';
                field = 'access_level';
            }
            var locationGr = new GlideRecordSecure(table); //asset location
            locationGr.addQuery("location", "IN", applied_filter.split(','));
            locationGr.query();
            var val = [];
            while (locationGr.next()) {
                if (val.length > 0) {
                    val.push(',' + locationGr.access_level);
                } else {
                    val.push(locationGr.access_level + '');
                }
            }
            if (val.length != 0) {
                operator = "IN";
            } else {
                operator = "!=";
            }
            value = val;
            //field = "access_level";
        } else if (criteria == "REVIEW") {
            applied_filter = review.review_state;
            field = "last_reviewed_on";
            if (applied_filter == "REVIEWNEVER") { //last reviewed empty?? or some other condition
                value = "";
                operator = "=";
            } else if (applied_filter == "REVIEWED90D") { // should include records also never reviewed??
                current = new GlideDateTime();
                current.addDaysUTC(-90);
                value = current.getValue();
                operator = "<=";
            } else {
                operator = "!=";
                value = "";
                field = "identity";
            }

        } else if (criteria == "USAGE") {
            applied_filter = review.using_status;
            value = "";
            field = "last_used";
            if (applied_filter == "USEDCOMMON") {
                current = new GlideDateTime();
                current.addDaysUTC(-7); // last_used withing 7 days -> used common 
                value = current.getValue();
                operator = ">=";
            } else if (applied_filter == "USEDRARE") { //USEDRARE(month ago)
                current = new GlideDateTime();
                current.addDaysUTC(-30);
                value = current.getValue();
                operator = "<=";
            } else {
                operator = "!=";
                value = "";
                field = "identity";
            }
        } else if (criteria == 'PROCESSDELETED') {
            var list = [];
            var deletedRecords = '';
            if (review.type == "EXPIRY_BADGE") {
                field = 'asset';
                deletedRecords = new GlideRecordSecure('x_aleen_snguardian_asset');
                deletedRecords.addQuery('is_deleted', true);
                deletedRecords.query();
                while (deletedRecords.next()) {
                    if (list.length > 0) {
                        list.push(',' + deletedRecords.getUniqueValue());
                    } else {
                        list.push(deletedRecords.getUniqueValue() + '');
                    }
                }
            } else if (review.type == 'OTHERS') {
                deletedRecords = new GlideRecordSecure('x_aleen_snguardian_identity_system');
                deletedRecords.addQuery('is_deleted', true);
                deletedRecords.addQuery('identity', '!=', '');
                deletedRecords.addQuery('system', '!=', '');
                deletedRecords.query();
                while (deletedRecords.next()) {
                    list.push(deletedRecords.identity.user_name + "#" + deletedRecords.system.code);
                }
            } else {
                field = 'access_level';
                deletedRecords = new GlideRecordSecure('x_aleen_snguardian_access_level');
                deletedRecords.addQuery('is_deleted', true);
                deletedRecords.query();
                while (deletedRecords.next()) {
                    if (list.length > 0) {
                        list.push(',' + deletedRecords.getUniqueValue());
                    } else {
                        list.push(deletedRecords.getUniqueValue() + '');
                    }
                }
            }
            if (list.length != 0) {
                operator = "IN";
            }
            value = list;
        } else {
            value = "";
            field = "identity";
            operator = "!=";
        }
        var return_res = {
            "choice": value,
            "column": field,
            "operator": operator
        };
        return return_res;
    },
    type: 'AccessReviewHelper'
};