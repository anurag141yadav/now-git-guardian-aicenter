(function() {
	if (input) {
		data.recordId = input.sys_id || '';  
		data.type = input.type || '';
		if(input.type == "emergencyForAll"){
			data.location = input.location;
		}else{
			data.visitDetails = "";
			data.visitorName = "[Visitor's Name]";
			if(data && data.recordId && data.recordId!=''){
				var visitorHelper = new VisitorHelper();
				data.visitDetails = visitorHelper.getVisitInfoBySysId(data.recordId);
				data.location = data.visitDetails["location.sys_id"];
				data.visitorName = "[ "+data.visitDetails['visitor.first_name']+"  "+data.visitDetails['visitor.last_name'] +" ]";
			}
			if(input.type == "email"){
				var grEmailTemplates = new GlideRecordSecure('x_aleen_snguardian_visitor_nda_email_templates');
				grEmailTemplates.addQuery('type','EMAIL');
				grEmailTemplates.query();
				var templates = [];
				while(grEmailTemplates.next()){
					var templateObj = {};
					templateObj.name = grEmailTemplates.name.toString();
					templateObj.id = grEmailTemplates.getUniqueValue().toString();
					templates.push(templateObj);
				}
				data.templates = templates;
			}
		}
	} else {
		data.message = "No widget input data found.";
	}
	if(input && (input.button_clicked == true || input.button_clicked=="true")){
		var grVisitorNotification = new GlideRecordSecure('x_aleen_snguardian_visitor_notification');
		grVisitorNotification.initialize();
		grVisitorNotification.location = input.location;
		grVisitorNotification.type = input.typeValue;
		grVisitorNotification.visit = input.visit_sys_id;

		if(input.email_message && input.email_message!=""){
			grVisitorNotification.body = input.email_message;
		}
		if(input.email_template && input.email_template!=""){
			grVisitorNotification.template = input.email_template;
		}	
		if(input.email_additional_id && input.email_additional_id!=""){
			grVisitorNotification.to = input.email_additional_id ;
		}	
		if(input.email_subject && input.email_subject!=""){
			grVisitorNotification.subject = input.email_subject;
		}
		if(input.add_to_watchList && (input.add_to_watchList==true || input.add_to_watchList=="true")){
			grVisitorNotification.add_to_watchlist = true;	
		}
		if(input.host_cc && (input.host_cc==true || input.host_cc=="true")){
			grVisitorNotification.include_host = true;
		}
		if(input.checkout_type && input.checkout_type!=""){
			grVisitorNotification.checkout_type = input.checkout_type;
		}
		if(input.asset_notes && input.asset_notes!=""){
			grVisitorNotification.asset_notes = input.asset_notes;
		}
		if(input.include_security || input.include_security=="true"){
			grVisitorNotification.include_security = true;
		}
		if(input.asset_collection || input.asset_collection=="true"){
			grVisitorNotification.asset_collection = true;
		}
		grVisitorNotification.insert();
	}
})();