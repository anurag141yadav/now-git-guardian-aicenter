(function() {
	data.sys_id = 	$sp.getParameter("sys_id");
	data.show_all = 	$sp.getParameter("showAll");
	data.showSections =  options.showSections || true;
	data.showVariableSets =  options.showVariableSets || false;
	data._generatedItemGUID = gs.generateGUID();
	data.auto_redirect =  true;
	if (!data.sys_id) {
		data.recordFound = false;
	}else{
		data.recordFound = true;
		data.recordProducer = $sp.getCatalogItem(data.sys_id);
	}
	var m = data.msgs = {};
	m.invalidRecordMsg = 'You are either not authorized or record is not valid.';

	data.sys_properties = {
		twostep: false,
		stopNavigationOnError: true,
		isPolaris: gs.getProperty("glide.ui.polaris.experience", "false")
	};
})();

