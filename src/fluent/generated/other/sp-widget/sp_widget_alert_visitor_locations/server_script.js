(function() {	
	var tableName = "cmn_location";
	data.tableName = tableName;
	var vistorHelper = new VisitorHelper();
	var lobbyListByLoggedInUser = vistorHelper.getLobbyListByRole();
	data.userFilter = lobbyListByLoggedInUser;
	if(options){
		if (options.table_name != ""){
			tableName = options.table_name;
			data.tableName = tableName;
		}
	}
	var queryLimit = "5";
	data.queryLimit = queryLimit;
	if(options){
		if (options.query_limit != ""){
			queryLimit = options.query_limit;
			data.queryLimit = queryLimit;
		}
	}

	var filterQuery = "";
	data.filterQuery = filterQuery;
	if(options){
		if (options.filter_query != ""){
			filterQuery = options.filter_query;
			data.filterQuery = filterQuery;
		}
	}

	if (input && input.searchTerm != null && input.searchTerm!=undefined) {
		var grTab = new MetadataGlideRecordHelper().getGlideRecordByTable(input.table);
		if(input.searchTerm != null && input.searchTerm!=undefined){
			grTab.addQuery('name', 'CONTAINS', input.searchTerm);
		}
		if(input.encodedQuery != "" && input.encodedQuery != undefined ){
			grTab.addEncodedQuery(input.encodedQuery);
		}
		if(input.userLevelFilter != "" && input.userLevelFilter != undefined){
			grTab.addQuery('sys_id', 'IN', input.userLevelFilter);
		}
		grTab.setLimit(input.limit);
		grTab.query();
		var results = [];
		if (input.action == 'getLocations') {
			while (grTab.next()) {
				results.push({
					sys_id: grTab.getUniqueValue(),
					name: grTab.name.toString(),
					timeZone: grTab.time_zone.toString()  
				});
			}
			data.results = results;
		}
		data.results = results;
	}
})();