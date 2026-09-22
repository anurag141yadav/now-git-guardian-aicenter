(function() {
	data.options = options;
	data.popularTopics = [];
	var vistorHelper = new VisitorHelper();
	var decisondata = vistorHelper.getWidgetHomeTopicsByRole("", options.decision_table);
	data.decision_data = decisondata;
	data.popularTopics = decisondata.topics;
	if(input && input.visitStatusCheck){
		var statusCode = vistorHelper.getVisitorVisitStatus(input.visitor_sys_id);
		var response = {};
		response.status = statusCode;
		data.response = response;
	}else if(input && input.typeCode && input.typeCode=="forgetVisitor"){
		var grVisitEmergency = new GlideRecordSecure('x_aleen_snguardian_visitor_notification');
		grVisitEmergency.initialize();
		grVisitEmergency.to = input.to;
		grVisitEmergency.type = input.typeCode;
		grVisitEmergency.insert();
	}else if (input && input.typeCode == "getVisitorDetails") {
	var grVisitor = new GlideRecordSecure('x_aleen_snguardian_visitor');
	if (grVisitor.get(input.visitor_sys_id)) {
		data.visitor = {
				email: grVisitor.email.toString(),
				first_name: grVisitor.first_name.toString(),
				full_name: grVisitor.full_name.toString(),
				status: "",
				visitorId: grVisitor.sys_id.toString()
			};
		}
	}
})();