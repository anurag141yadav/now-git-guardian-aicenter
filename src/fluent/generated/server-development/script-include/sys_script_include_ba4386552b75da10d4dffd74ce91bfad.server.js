var VisitorClientScriptHelper = Class.create();
VisitorClientScriptHelper.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    //TODO: move server side script include
    getVisitTypeBySysId: function() {
        var visitType = this.getParameter("visit_type_sysid");
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        return metaDataGlideRecordHelper.getCodeRecordBySysId('x_aleen_snguardian_visitor_visit_type', visitType);
    },

    getVisitorStatusBySysId: function() {
        var visitorStatus = this.getParameter("sysparm_visitor_status");
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        return metaDataGlideRecordHelper.getCodeRecordBySysId('x_aleen_snguardian_visitor_status', visitorStatus);
    },

    formatISOToSnowDate: function(isoString) {
        isoString = isoString.replace("T", " ");
        isoString = isoString.replace(".000Z", "");
        return isoString;
    },

    getEndDate: function() {
        var start_date = this.getParameter('sysparm_start_date');
        var snowdateFormat = this.formatISOToSnowDate(start_date);
        var gdt_start_date = new GlideDateTime();
        gdt_start_date.setValueUTC(snowdateFormat, "yyyy-MM-dd HH:mm:ss");
        var location_id = this.getParameter('sysparm_location');
        var lobbyConfig = new VisitorHelper().getLobbyConfig(location_id);
        lobbyConfig = JSON.parse(lobbyConfig);
        var maxHours = lobbyConfig.maxVisitHours;
        var sec = maxHours * 60 * 60 * 1000;
        gdt_start_date.add(sec);
        return gdt_start_date.getValue();
    },
    getVisitValidity: function() {
        var badge_validity = {};
        var status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_visitor_mt_visit_status', 'CHECK-IN');
        var location = this.getParameter('sysparm_location');
        var identity = this.getParameter('sysparm_identity');
        var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        grVisit.addQuery('visitor', identity);
        grVisit.addQuery('status', status);
		grVisit.setLimit(1);
        grVisit.query();
        if (grVisit.next()) {
            if (grVisit.getValue('is_recurring') && grVisit.getValue('is_recurring') === "1") {
                var start_date = grVisit.getDisplayValue('recurring_start_date');
                var start_time = grVisit.getValue('recurring_start_time').toString().split(' ')[1];
                var end_date = grVisit.getValue('recurring_end_date');
                var end_time = grVisit.getValue('recurring_end_time').toString().split(' ')[1];
                badge_validity.valid_from = start_date + " " + start_time;
                badge_validity.valid_to = end_date + " " + end_time;
            } else {
                badge_validity.valid_from = grVisit.getDisplayValue('start_date'); //getValue()
                badge_validity.valid_to = grVisit.getDisplayValue('end_date');
            }
        }
        return JSON.stringify(badge_validity);

    },
    //TODO: requires enhnacement to consider location hierarchy , scope  , type of watchlist
    checkIfWatchlistByData: function() {
        var location = this.getParameter('sysparm_location');
        var email = this.getParameter('sysparm_email');
        var firstname = this.getParameter('sysparm_firstname');
        var lastname = this.getParameter('sysparm_lastname');
        var phone = this.getParameter('sysparm_phone');
        var visitorSysId = this.getParameter('sysparm_visitorid');
        if (null != visitorSysId && visitorSysId != undefined) {
            var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
            var visitorGR = metaDataGlideRecordHelper.getRecordAsJSON('x_aleen_snguardian_visitor', visitorSysId);
            email = visitorGR.email;
        }
        var grWatchlist = new GlideRecordSecure('x_aleen_snguardian_visitor_watch_list');
        //grWatchlist.addQuery('location', location);   //globally watchlisted visitor
        if (email != null && email != "") {
            grWatchlist.addQuery('email', email);
        }
        if (firstname != null && lastname != null && firstname != "" && lastname != "") {
            grWatchlist.addQuery('first_name', firstname);
            grWatchlist.addQuery('last_name', lastname);
        }
        if (phone != null && phone != "") {
            grWatchlist.addQuery('phone', phone);
        }
		grWatchlist.setLimit(1);
        grWatchlist.query();
        if (grWatchlist.next()) {
            return true;
        }
        return false;
    },
    checkIfWatchlistByGroupData: function() {
        var mrvsData = this.getParameter('sysparm_visitors');
        var mrvsObj = JSON.parse(mrvsData);

        var query = '';
        for (var i = 0; i < mrvsObj.length; i++) {
            var row = mrvsObj[i];
            if (row.visit_visitor_email != null && row.visit_visitor_email != "") {
                query += (query === "" ? "" : "^OR") + "email=" + GlideStringUtil.escapeQueryTermSeparator(row.visit_visitor_email);
            }
        }
        var users=[];
        var grWatchlist = new GlideRecordSecure('x_aleen_snguardian_visitor_watch_list');
        grWatchlist.addEncodedQuery(query);
        grWatchlist.query();
        while(grWatchlist.next()) {
			users.push(grWatchlist.getValue('email'));
        }
        return JSON.stringify(users);
    },
    validateGroupName: function() {
        var group_name = this.getParameter('sysparm_group_name');
        var location = this.getParameter('sysparm_location');
        var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        var visit_type = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_visitor_visit_type', 'GROUP');
        grVisit.addQuery('type', visit_type);
        grVisit.addQuery('group', group_name);
        grVisit.addQuery('location', location);
		grVisit.setLimit(1);
        grVisit.query();
        if (grVisit.next()) {
            return true;
        } else {
            return false;
        }
    },
    checkExisitingEmail: function() {
        var visitor_email = this.getParameter('sysparm_email');
        var grVisitor = new GlideRecordSecure('x_aleen_snguardian_visitor');
        grVisitor.addQuery('email', visitor_email);
		grVisitor.setLimit(1);
        grVisitor.query();
        if (grVisitor.next()) {
            return true; //email already exists
        } else {
            return false;
        }
    },
    validateEmail: function() {
        var data = this.getParameter('sysparm_visitors');
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var visitors = JSON.parse(data);
        for (var i = 0; i < visitors.length; i++) {
            var email = visitors[i].visit_visitor_email;
            if (!regex.test(email)) {
                return JSON.stringify({
                    valid: false,
                    info: 'full name: ' + visitors[i].visit_visitor_first_name + ' ' + visitors[i].visit_visitor_last_name + ' email: ' + email
                });
            }
        }
        return JSON.stringify({
            valid: true
        });
    },
    getLobbyConfig: function() {
        var location_id = this.getParameter('sysparm_location');
        return new VisitorHelper().getLobbyConfig(location_id);
    },
    getLocationData: function() {
        var location_id = this.getParameter('sysparm_location');
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        var jsonObj = metaDataGlideRecordHelper.getRecordAsJSON('x_aleen_snguardian_location', location_id);
        return JSON.stringify(jsonObj);
    },
    getHostByEmail: function() {
        var host_email = this.getParameter('sysparm_host_email');
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        var jsonObj = metaDataGlideRecordHelper.getFilterRecordJSON('x_aleen_snguardian_identity', 'email', host_email);
        return JSON.stringify(jsonObj);
    },
    getVisitData: function() {
        var visitId = this.getParameter('sysparm_visitId');
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        // var jsonObj = metaDataGlideRecordHelper.getRecordAsJSON('x_aleen_snguardian_visitor_visit', visitId);
        var jsonObj = metaDataGlideRecordHelper.getRecordAsJSONWithSelectedAttributes('x_aleen_snguardian_visitor_visit', visitId);
        return JSON.stringify(jsonObj);
    },
    getVisitorData: function() {
        var visitor = this.getParameter('sysparm_visitor');
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        var jsonObj = metaDataGlideRecordHelper.getRecordAsJSON('x_aleen_snguardian_visitor', visitor);
        return JSON.stringify(jsonObj);
    },
    getDateInTz: function() {
        var epoch = this.getParameter('sysparm_datetimeepoch');
        var tz = this.getParameter('sysparm_targettimezone');
        return new TimeZoneUtil().getEpochAsStringinTargetTimeZone(parseInt(epoch, 10), tz);
    },
    getLobbyActionConfig: function() {
        var location_input = this.getParameter('sysparm_location');
        var role_input = this.getParameter('sysparm_role');
        var action_input = this.getParameter('sysparm_type');
        var actionConfig = new VisitorHelper().getLobbyActionConfig(location_input, role_input, action_input);
        return JSON.stringify(actionConfig);
    },
    getEarlyDurationalTime: function() {
        var duration = this.getParameter('sysparm_duration');
        var startTimeGMT = new GlideDateTime(this.getParameter('sysparm_start_time'));
        var startTime = startTimeGMT.getDisplayValue();
        var location = this.getParameter('sysparm_location');
        var locationJson = new MetadataGlideRecordHelper().getRecordAsJSON('x_aleen_snguardian_location', location);
        var locationTimeZone = locationJson['time_zone'];
        var timeZoneUtil = new TimeZoneUtil();
        var allowedTime = timeZoneUtil.getDurationDifference(duration, 'add');
        var allowedEpoch = new GlideDateTime(allowedTime).getNumericValue();
        var locationBasedAllowed = timeZoneUtil.getEpochAsStringinTargetTimeZone(allowedEpoch, locationTimeZone);
        var gdt1 = new GlideDateTime(startTime);
        var gdt2 = new GlideDateTime(locationBasedAllowed);
        if (gdt2.compareTo(gdt1) != -1) {
            return "submit";
        }
        var dur = GlideDateTime.subtract(gdt2, gdt1); //the difference between gdt1 and gdt2
        return dur.getDisplayValue();

    },
    compareFromCurrentTime: function() {
        var expiryDT = this.getParameter('sysparm_expiry');
        if (!expiryDT || expiryDT == "")
            return "1";
        var currentTime = new GlideDateTime();
        var expiryTime = new GlideDateTime(expiryDT);
        return currentTime.compareTo(expiryTime).toString();
    },
    getCheckedInVisitors: function() {
        var location = this.getParameter('sysparm_location');
        var visitors = [];
        var status = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_visitor_mt_visit_status', 'CHECK-IN');
        var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        grVisit.addQuery('location', location);
        grVisit.addQuery('status', status);
        grVisit.query();
        while (grVisit.next()) {
            if (grVisit.getValue('visitor') && grVisit.getValue('visitor') != '') {
                visitors.push(grVisit.getValue('visitor'));
            }
            visitors.push(grVisit.getValue('visitor'));

        }
        return JSON.stringify(visitors);
    },
    setVisitStartEndTime: function() {
        var visit_id = this.getParameter('sysparm_visitId');
        var location = this.getParameter('sysparm_location');
        var timezone = this.getParameter('sysparm_timezone');
        var start_time = this.getParameter('sysparm_start_time');
        var end_time = this.getParameter('sysparm_end_time');

        var timeZoneUtil = new TimeZoneUtil();
        start_time = this.formatISOToSnowDate(timeZoneUtil.timeZoneStringtoEpoch(start_time, gs.getSession().getTimeZoneName()));
        end_time = this.formatISOToSnowDate(timeZoneUtil.timeZoneStringtoEpoch(end_time, gs.getSession().getTimeZoneName()));

        var respObj = {};
        respObj.start_time = start_time.split(' ')[1];
        respObj.end_time = end_time.split(' ')[1];

        var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        if (visit_id && grVisit.get(visit_id)){
            grVisit.setValue('recurring_start_time', start_time.split(' ')[1]);
            grVisit.setValue('recurring_end_time', end_time.split(' ')[1]);
            grVisit.update();
        }
        return JSON.stringify(respObj);
    },
    type: 'VisitorClientScriptHelper'
});