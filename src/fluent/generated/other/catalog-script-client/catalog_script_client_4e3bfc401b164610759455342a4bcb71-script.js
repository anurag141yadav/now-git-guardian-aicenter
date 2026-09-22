function onLoad(control, oldValue, newValue, isLoading) {
	var building;
	if (isLoading || newValue == '') {
		try {
			//esc portal 
			var access_levels_filter = g_list.get("access_level");
			access_levels_filter.reset();
			var filter = "location=" + null;
			access_levels_filter.setQuery(filter);
		} catch (e) {
			//service catalog 
			access_levelg_filter.reset();
			filterString = 'location=""';
			access_levelg_filter.setQuery(filterString);
			access_levelacRequest(null);
			return;
		}
	}
	try {
		//esc portal 
		access_levels_filter = g_list.get("access_level");
		building = g_service_catalog.parent.getValue("location");
		access_levels_filter.reset();
		filter = "location=" + building;
		access_levels_filter.setQuery(filter);
	} catch (e) {
		//service catalog 
		building = g_service_catalog.parent.getValue("location");
		var filterString = 'location=' + building;
		access_levelg_filter.reset();
		access_levelg_filter.setQuery(filterString);
		access_levelacRequest(null);
	}
} 