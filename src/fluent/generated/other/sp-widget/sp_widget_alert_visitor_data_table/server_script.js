(function() {
    var userRoles = [];
    var user = gs.getUser(); // Get the current user
    if (user) {
        userRoles = user.getRoles(); // Fetch roles as an array
    }
    data.userRoles = userRoles;

    if (gs.hasRole('x_aleen_snguardian.lobby_admin') || gs.hasRole('x_aleen_snguardian.host')) {
        var vistorHelperBeta = new VisitorHelper();
        var identityId = vistorHelperBeta.getIdentityId();
        data.identity_id = String(identityId);
        data.user_id = gs.getUserID();
        data.user_name = gs.getUserName();
    }
		data.showSearchbox = options.show_searchbox;

    if (!input) // asynch load list
        return;
    data.msg = {};
    data.msg.sortingByAsc = gs.getMessage("Sorting by ascending");
    data.msg.sortingByDesc = gs.getMessage("Sorting by descending");
    data.searchMsg = gs.getMessage("Search");
    data.actions = [];
    optCopy(['table', 'p', 'o', 'd', 'filter', 'fixed_query', 'filterACLs', 'fields', 'keywords', 'view']);
    optCopy(['relationship_id', 'apply_to', 'apply_to_sys_id', 'window_size']);
    if (!data.table) {
        data.invalid_table = true;
        data.table_label = "";
        return;
    }
    var vistorHelper = new VisitorHelper();
    var columnnames = vistorHelper.getDataTableColumnNamesByRole(data.table);
    if (columnnames != "") {
        data.fields = columnnames;
    }
    if (!data.fields) {
        if (data.view) {
            data.fields = $sp.getListColumns(data.table, data.view);
        } else {
            data.fields = $sp.getListColumns(data.table);
        }
    }
    data.view = data.view || 'mobile';
    data.table = data.table || $sp.getValue('table');
    data.filter = data.filter || $sp.getValue('filter');
    data.keywords = data.keywords || $sp.getValue('keywords');
    data.p = data.p || $sp.getValue('p') || 1;
    data.p = parseInt(data.p);
    data.o = data.o || $sp.getValue('o') || $sp.getValue('order_by');
    data.d = data.d || $sp.getValue('d') || $sp.getValue('order_direction') || 'asc';
    data.useTinyUrl = gs.getProperty('glide.use_tiny_urls') === 'true';
    data.tinyUrlMinLength = gs.getProperty('glide.tiny_url_min_length');
    //var grForMetaData = new GlideRecord(data.table);
    var grForMetaData = new MetadataGlideRecordHelper().getGlideRecordByTable(data.table);
    if (input.setOrderUserPreferences) {
        gs.getUser().savePreference(data.table + ".db.order", data.o);
        gs.getUser().savePreference(data.table + ".db.order.direction", data.d == "asc" ? "" : "DESC");
        data.setOrderUserPreferences = false;
    }
    if (!data.o){
        getOrderColumn();
	}

    data.page_index = data.p - 1;
    var windowSize = data.window_size || $sp.getValue('maximum_entries') || 20;
    windowSize = parseInt(windowSize);
    if (isNaN(windowSize) || windowSize < 1)
        windowSize = 20;
    data.window_size = windowSize;
    var gr;
    var gaAggregate = new GlideAggregate(data.table);
    gaAggregate.addAggregate('COUNT');
    // FilteredGlideRecord is not supported in scoped apps, so GlideRecordSecure will always be used in an application scope
    if (typeof FilteredGlideRecord != "undefined" && (gs.getProperty("glide.security.ui.filter") == "true" || grForMetaData.getAttribute("glide.security.ui.filter") != null)) {
        gr = new FilteredGlideRecord(data.table);
        gr.applyRowSecurity();
    } else{
        gr = new GlideRecordSecure(data.table);
		}
    if (!gr.isValid()) {
        data.invalid_table = true;
        data.table_label = data.table;
        return;
    }
    data.canCreate = gr.canCreate();
    data.newButtonUnsupported = data.table == "sys_attachment";
    data.table_label = gr.getLabel();
    data.table_plural = gr.getPlural();
    data.title = input.useInstanceTitle && input.headerTitle ? gs.getMessage(input.headerTitle) : data.table_plural;
    data.hasTextIndex = $sp.hasTextIndex(data.table);
    if (data.filter) {
        if (data.filterACLs)
            gr = $sp.addQueryString(gr, data.filter);
        else
            gr.addEncodedQuery(data.filter);
    }
    if (data.keywords) {
        gr.addQuery('123TEXTQUERY321', data.keywords);
        data.keywords = null;
    }

    data.filter = gr.getEncodedQuery();

    if (!gs.nil(data.fixed_query)) {
        gr = $sp.addQueryString(gr, data.fixed_query);
    }
    // if (data.relationship_id) {
    // 	var rel = GlideRelationship.get(data.relationship_id);
    // 	// var target = new GlideRecord(data.table);
    // 	// var applyTo = new GlideRecord(data.apply_to);
    // 	var target = new MetadataGlideRecordHelper().getGlideRecordByTable(data.table);
    // 	var target = new MetadataGlideRecordHelper().getGlideRecordByTable(data.applyTo);
    // 	applyTo.get("sys_id", data.apply_to_sys_id);
    // 	rel.queryWith(applyTo, target); // put the relationship query into target
    // 	data.exportQuery = target.getEncodedQuery();
    // 	gr = $sp.addQueryString(gr, data.exportQuery); // get the query the relationship made for us
    // }
    if (data.exportQuery)
        data.exportQuery += '^' + data.filter;
    else
        data.exportQuery = data.filter;
    data.exportQueryEncoded = encodeURIComponent(data.exportQuery + (!gs.nil(data.fixed_query) ? ('^' + data.fixed_query) : ''));
    if (data.o) {
        if (data.d == "asc")
            gr.orderBy(data.o);
        else
            gr.orderByDesc(data.o);
        if (gs.getProperty("glide.secondary.query.sysid") == "true")
            gr.orderBy("sys_id");
    }

    data.window_start = data.page_index * data.window_size;
    data.window_end = (data.page_index + 1) * data.window_size;
    gr.chooseWindow(data.window_start, data.window_end);
    gr.setCategory("service_portal_list");
    //gaAggregate.addEncodedQuery(GlideStringUtil.escapeQueryTermSeparator(gr.getEncodedQuery()));
	gaAggregate.addEncodedQuery(gr.getEncodedQuery());  
	gaAggregate.query();
    gr._query();
    while (gaAggregate.next()) {
        var grSize = gaAggregate.getAggregate('COUNT');
    }
    //data.row_count = gr.getRowCount(); //-> need to change to aggregate
    data.row_count = grSize;
    data.num_pages = Math.ceil(data.row_count / data.window_size);
    data.column_labels = {};
    data.column_types = {};
    data.fields_array = data.fields.split(',');
    var customHeaders = {};
    customHeaders['visitor.visitor_type'] = "Visitor Type";
    customHeaders['visitor.visitor_status.name'] = "Visitor Status";
    customHeaders['status.name'] = "Status";
    customHeaders['visitor_type'] = "Visitor Type";
    customHeaders['visitor_status.name'] = "Visitor Status";
    customHeaders['visitor.full_name'] = "Visitor";
    customHeaders['host.full_name'] = "Host";
    for (var i in data.fields_array) {
        var field = data.fields_array[i];
        var ge = grForMetaData.getElement(field);
        if (ge == null)
            continue;
        if (customHeaders.hasOwnProperty(field)) {
            data.column_labels[field] = customHeaders[field];
        } else {
            data.column_labels[field] = ge.getLabel();
        }
        data.column_types[field] = ge.getED().getInternalType();
    }
    data.list = [];
    data.fields = data.fields;
		var grChildVisits = new GlideRecordSecure(data.table);
		grChildVisits.addQuery('parent', '!=', '');
		grChildVisits.query();
		var parentSysIds = [];
		while(grChildVisits.next()) {
			parentSysIds.push(grChildVisits.parent.toString());
		}
		gr.addQuery('sys_id', 'NOT IN', parentSysIds);
		gr.query();
    while (gr._next()) {
        var record = {};
        $sp.getRecordElements(record, gr, data.fields);
        $sp.getRecordElements(record, gr, options.additional_columns);
        if (typeof FilteredGlideRecord != "undefined" && gr instanceof FilteredGlideRecord) {
            for (var f in data.fields_array) {
                var fld = data.fields_array[f];
                if (!gr.isValidField(fld))
                    continue;
                if (!gr[fld].canRead()) {
                    record[fld].value = null;
                    record[fld].display_value = null;
                }
            }
        }
        record.sys_id = gr.getValue('sys_id');
        record.targetTable = gr.getRecordClassName();
        data.list.push(record);
    }

    data.enable_filter = (input.enable_filter == true || input.enable_filter == "true" ||
        options.enable_filter == true || options.enable_filter == "true");
    var breadcrumbWidgetParams = {
        table: data.table,
        query: data.filter,
        enable_filter: data.enable_filter
    };
    data.filterBreadcrumbs = $sp.getWidget('widget-filter-breadcrumbs', breadcrumbWidgetParams);

    // copy to data from input or options
    function optCopy(names) {
        names.forEach(function(name) {
            data[name] = input[name] || options[name];
        });
    }

    // getOrderColumn logic mirrors that of Desktop UI when no sort column is specified
    function getOrderColumn() {
        // // First check for user preference
         var pref = gs.getUser().getPreference(data.table + ".db.order");
         if (!GlideStringUtil.nil(pref)) {
             data.o = pref;
             if (gs.getUser().getPreference(data.table + ".db.order.direction") == "DESC")
                 data.d = 'desc';
             return;
         }

        // // If no user pref, check for table default using same logic as Desktop UI:
        // // 1) if task, use number
        // // 2) if any field has isOrder attribute, use that
        // // 3) use order, number, name column if exists (in that priority)
         if (grForMetaData.isValidField("sys_id") && grForMetaData.getElement("sys_id").getED().getFirstTableName() == "task") {
             data.o = "number";
             return;
         }

        // // Next check for isOrder attribute on any column
        // var elements = grForMetaData.getElements();
        // // Global and scoped GlideRecord.getElements return two different things,
        // // so convert to Array if needed before looping through
         if (typeof elements.size != "undefined") {
             var elementArr = [];
             for (var i = 0; i < elements.size(); i++) {
                 elementArr.push(elements[i]);
             }
             elements = elementArr;
         }
        // // Now we can loop through
         for (var j = 0; elements.length > j; j++) {
             var element = elements[j];
             if (element.getAttribute("isOrder") == "true") {
                 data.o = element.getName();
                 return;
             }
         }
        // // As last resort, sort on Order, Number, or Name column
         if (grForMetaData.isValidField("order"))
             data.o = "order";
         else if (grForMetaData.isValidField("number"))
             data.o = "number";
         else if (grForMetaData.isValidField("name"))
             data.o = "name";
    }

    if (input && input.action === 'updateDataInTable') {
        var recordSysId = input.recordSysId;
        var refcolumnTableName = input.refcolumnTableName;
        var propertyvalueToUpdate = input.propertyvalueToUpdate;
        var tableName = input.tableName;
        var propertyNameToUpdate = input.propertyNameToUpdate;
        var propertyDataType = input.propertyDataType;
        if (recordSysId) {
            var vistorHelperToUpdate = new VisitorHelper();
            data.response = vistorHelperToUpdate.update(tableName, recordSysId, propertyNameToUpdate, propertyvalueToUpdate, refcolumnTableName, propertyDataType);
        } else {
            data.response = {
                success: false,
                message: 'Missing required parameters'
            };
        }
    }
	
		if(input && input.action==="checkMergeVisitData"){
			var vistitorHelperToMergeVisits = new VisitorHelper();
			data.response = vistitorHelperToMergeVisits.checkMergeVisitData(input.visits);
		}
		

    if (input && input.action === 'getAllLocations') {
        var allLocationsArray = getAllLocations(input.location_id);
        var locationString = allLocationsArray.join(',');
        data.alllocations = locationString;
    }

    function getAllLocations(location_id) {
        var allChildrenLocation = vistorHelper.getAllChlidrenLocations(location_id);
        return allChildrenLocation;
    }

})();