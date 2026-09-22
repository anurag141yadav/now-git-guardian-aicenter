(function() {

	data.filter="is_deleted=false";
	data.scoreData = getData(data.filter);
	if (input && input.action == 'reload') {
		data.scoreData = getData(input.filter);
	}
	
	var vistorHelper = new VisitorHelper();
	function getData(filter) {
		var statusCounts = {};
		var ga = new GlideAggregate("x_aleen_snguardian_visitor_visit");
		ga.addAggregate('COUNT', 'status');
		if(filter != undefined || filter != "" ){
			ga.addEncodedQuery(filter,true);
		}
		ga.query();
		while (ga.next()) {
			var statusCode = ga.status.code;
			var count = parseInt(ga.getAggregate('COUNT', 'status'), 10);
			statusCounts[statusCode] = count;
		}
		var gaTotal = new GlideAggregate("x_aleen_snguardian_visitor_visit");
		if(filter != undefined || filter != "" ){
			gaTotal.addEncodedQuery(filter,true);
		}
		gaTotal.addAggregate('COUNT');
		gaTotal.query();
		if (gaTotal.next()) {
			statusCounts.TOTAL = parseInt(gaTotal.getAggregate('COUNT'), 10);
		}
		return statusCounts;
	}

	if (input && input.action === 'getAllLocations') {
		var allLocationsArray = getAllLocations(input.location_id);
		var locationString = allLocationsArray.join(',');
		data.alllocations =  locationString;
	}

	function getAllLocations(location_id){
		var allChildrenLocation=vistorHelper.getAllChlidrenLocations(location_id);
		return allChildrenLocation;
	}
	


})();