var EventsDataHelper = Class.create();
EventsDataHelper.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" EventsDataHelper:: ");
	},
    processAccessLastUsedDateTime() {
        this.logger.info("processAccessLastUsedDateTime :: Begin()");
        var random_id = GlideSecureRandomUtil.getSecureRandomString(30);
        //step3 :  Reader Access Levels
        var readerAccessLevels = {};
        var gaReaderAccessLevels = new GlideAggregate('x_aleen_snguardian_reader_access_levels');
        // TODO-Add filter reader_id
        gaReaderAccessLevels.query();
        while (gaReaderAccessLevels.next()) {
            readerAccessLevels[gaReaderAccessLevels.asset.number] = gaReaderAccessLevels.access_levels;
        }
        //step1: get badge reader latest event
        var gaEventsRaw = new GlideAggregate('x_aleen_snguardian_event');
        gaEventsRaw.addAggregate('COUNT');
        gaEventsRaw.addAggregate('MAX', 'event_date_time');
        gaEventsRaw.groupBy('badge_id');
        gaEventsRaw.groupBy('reader_id');
        gaEventsRaw.query();
        while (gaEventsRaw.next()) {
            var last_occur = gaEventsRaw.getAggregate('MAX', 'event_date_time');
            var badge_id = gaEventsRaw.badge_id;
            var reader_id = gaEventsRaw.reader_id;
            //step2. sometimes badge can be reassigned to multiple people , get recent assigned to time
            var last_recent_badge_assigned_date_time = "";
            var last_recent_badge_assigned_to = "";
            var gaAssetAssigned = new GlideAggregate('x_aleen_snguardian_identity_asset');
            gaAssetAssigned.addQuery('asset.serial', badge_id);
            gaAssetAssigned.addAggregate('COUNT');
            gaAssetAssigned.addAggregate('MAX', 'sys_created_on');
            gaAssetAssigned.groupBy('asset');
            gaAssetAssigned.query();
            while (gaAssetAssigned.next()) {
                last_recent_badge_assigned_date_time = gaAssetAssigned.getAggregate('MAX', 'sys_created_on');
                var gaIdentityAsset = new GlideAggregate('x_aleen_snguardian_identity_asset');
                gaIdentityAsset.addQuery('asset', gaAssetAssigned.getValue('asset'));
                gaIdentityAsset.addQuery('sys_created_on', last_recent_badge_assigned_date_time);
                gaIdentityAsset.query();
                while (gaIdentityAsset.next()) {
                    last_recent_badge_assigned_to = gaIdentityAsset.getValue('identity');
                }
            }
            // in some case if assigned identity not found
            if (last_recent_badge_assigned_to != "") {
                //step 3 --- getting reader access levels ( for now it is moved to TOP)
                // step4: identity, each access_level of reader & last_used data extraction
                var access_levels_of_reader = readerAccessLevels[reader_id];
                // if access levels are not configured in reader
                if (access_levels_of_reader != undefined && access_levels_of_reader != "") {
                    var access_levels_arr = access_levels_of_reader.split(',');
                    for (var j = 0; j < access_levels_arr.length; j++) {
                        var grEventsRefined = new GlideRecordSecure('x_aleen_snguardian_events_refined');
                        grEventsRefined.batch_id = random_id;
                        grEventsRefined.category = "ACCESS_LAST_USED_DATETIME_UPDATE";
                        grEventsRefined.event_date_time = new GlideDateTime(last_occur);
                        grEventsRefined.access_level = access_levels_arr[j];
                        grEventsRefined.identity = last_recent_badge_assigned_to;
                        grEventsRefined.insert();
                    }
                }
            }
        }
        this.logger.info("processAccessLastUsedDateTime :: after Refinining()");
        var gaEventsFiltered = new GlideAggregate('x_aleen_snguardian_events_refined');
        gaEventsFiltered.addAggregate('COUNT');
        gaEventsFiltered.addAggregate('MAX', 'event_date_time');
        gaEventsFiltered.groupBy('identity');
        gaEventsFiltered.groupBy('access_level');
        gaEventsFiltered.query();
        while (gaEventsFiltered.next()) {
            var last_access_occur = gaEventsFiltered.getAggregate('MAX', 'event_date_time');
            var identity = gaEventsFiltered.identity;
            var access_level = gaEventsFiltered.access_level;
            var grIdentityAccess = new GlideRecordSecure('x_aleen_snguardian_identity_access');
            grIdentityAccess.addQuery('identity', identity);
            grIdentityAccess.addQuery('access_level', access_level);
            //TODO :  add active, query , ideally we expect one record, but for now using while 
            grIdentityAccess.query();
            while (grIdentityAccess.next()) {
                grIdentityAccess.last_used_on = new GlideDateTime(last_access_occur);
                grIdentityAccess.update();
            }
        }
    },
    processAssetLastUsedDateTime() {
        this.logger.info("processAssetLastUsedDateTime :: Begin()");
        var random_id = GlideSecureRandomUtil.getSecureRandomString(30);
        //STEP 1: get badge reader latest event
        var gaEventsRaw = new GlideAggregate('x_aleen_snguardian_event');
        gaEventsRaw.addAggregate('COUNT');
        gaEventsRaw.addAggregate('MAX', 'event_date_time');
        gaEventsRaw.groupBy('badge_id');
        gaEventsRaw.groupBy('reader_id');
        gaEventsRaw.query();
        while (gaEventsRaw.next()) {
            var last_occur = gaEventsRaw.getAggregate('MAX', 'event_date_time');
            var badge_id = gaEventsRaw.badge_id;
            var reader_id = gaEventsRaw.reader_id;
            //STEP2: sometimes an access can be assigned to mulitple people, get recent assigned to time
            var last_recent_badge_assigned_date_time = "";
            var last_recent_badge_assigned_to = "";
            var gaAssetAssigned = new GlideAggregate('x_aleen_snguardian_identity_asset');
            gaAssetAssigned.addQuery('asset.serial', badge_id);
            gaAssetAssigned.addAggregate('COUNT');
            gaAssetAssigned.addAggregate('MAX', 'sys_created_on');
            gaAssetAssigned.groupBy('asset');
            gaAssetAssigned.query();
            while (gaAssetAssigned.next()) {
                last_recent_badge_assigned_date_time = gaAssetAssigned.getAggregate('MAX', 'sys_created_on');
                var gaIdentityAsset = new GlideAggregate('x_aleen_snguardian_identity_asset');
                gaIdentityAsset.addQuery('asset', gaAssetAssigned.getValue('asset'));
                gaIdentityAsset.addQuery('sys_created_on', last_recent_badge_assigned_date_time);
                gaIdentityAsset.query();
                while (gaIdentityAsset.next()) {
                    last_recent_badge_assigned_to = gaIdentityAsset.getValue('identity');
                }
            }
            if (last_recent_badge_assigned_to != "") {
                //
                var grEventsRefined = new GlideRecordSecure('x_aleen_snguardian_events_refined');
                grEventsRefined.initialize();
                grEventsRefined.batch_id = random_id;
                grEventsRefined.category = "ASSET_LAST_USED_DATETIME_UPDATE";
                grEventsRefined.event_date_time = new GlideDateTime(last_occur);
                var grAsset = new GlideRecordSecure('x_aleen_snguardian_asset');
                grAsset.addQuery('serial', badge_id);
                grAsset.query();
                while (grAsset.next()) {
                    grEventsRefined.asset = grAsset.serial;
                }
                grEventsRefined.identity = last_recent_badge_assigned_to;
                grEventsRefined.insert();
            }
        }
        this.logger.info("processAssetLastUsedDateTime :: after Refinining()");
        var gaEventsFiltered = new GlideAggregate('x_aleen_snguardian_events_refined');
        gaEventsFiltered.addAggregate('COUNT');
        gaEventsFiltered.addAggregate('MAX', 'event_date_time');
        gaEventsFiltered.groupBy('identity');
        gaEventsFiltered.groupBy('asset');
        gaEventsFiltered.query();
        while (gaEventsFiltered.next()) {
            var last_access_occur = gaEventsFiltered.getAggregate('MAX', 'event_date_time');
            var identity = gaEventsFiltered.identity;
            var asset = gaEventsFiltered.asset;
            grIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
            grIdentityAsset.addQuery('identity', identity);
            grIdentityAsset.addQuery('asset.serial', asset);
            //TODO : add active, query , ideally we expect one record, but for now using while 
            grIdentityAsset.query();
            while (grIdentityAsset.next()) {
                grIdentityAsset.last_used_on = new GlideDateTime(last_access_occur);
                grIdentityAsset.update();
            }
        }
    },
	createImportSet: function() {
        var impSet = new GlideRecord('sys_import_set');
        impSet.initialize();
        impSet.table_name = "x_aleen_snguardian_u_event__import_set";
        impSet.short_description = "x_aleen_snguardian_u_event__import_set";
        impSet.insert();
		this.logger.info("createImportSet:: create import set");
        return impSet;
    },
    transformImportSet: function(impSet) {
        impSet.state = "loaded";
        impSet.load_completed = new GlideDateTime();
        impSet.update();
        var transformer = new GlideImportSetTransformer();
        transformer.transformAllMaps(impSet);
        if (transformer.isError()) {
            this.logger.debug('Error executing the transform on  Asset  Import Set  -- ' + impSet.number);
        }
    },
    type: 'EventsDataHelper'
};