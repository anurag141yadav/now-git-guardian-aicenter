(function() {
	data.options = options;
	data.popularTopics = [];
	var vistorHelper = new VisitorHelper();
	var decisondata = vistorHelper.getWidgetHomeTopicsByRole("", options.decision_table);
	data.decision_data = decisondata;
	data.popularTopics = decisondata.topics;
	
	if (input && input.visitorLocationID) {
		var decisionResponse = vistorHelper.getWidgetHomeTopicsByRole(input.visitorLocationID, options.decision_table);
		data.decision_data = decisionResponse;
		data.popularTopics = decisionResponse.topics;
	}
})();