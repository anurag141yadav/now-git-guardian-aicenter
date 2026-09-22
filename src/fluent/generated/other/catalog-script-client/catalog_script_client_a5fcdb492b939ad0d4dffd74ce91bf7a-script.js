function onLoad() {
    var visitId = g_form.getValue('visit_id');
    if (visitId) {
        var gaVisitorStatus = new GlideAjax('VisitorClientScriptHelper');
        gaVisitorStatus.addParam('sysparm_name', 'getVisitData');
        gaVisitorStatus.addParam('sysparm_visitId', visitId);
        gaVisitorStatus.getXMLAnswer(function(result) {
			var res = JSON.parse(result);
			var type = res["type.name"];
            if(type.toString().toLowerCase()=="group"){
				g_form.setDisplay('visitor_id_scan',false);
				g_form.setDisplay('id_scan_visitor_back_card',false);
				g_form.setDisplay('id_scan_visitor_front_card',false);
				g_form.setDisplay('is_visitor_verified',false);
				g_form.setDisplay('id_scan_visitor_image',false);
				g_form.setDisplay('id_verification',false);


				g_form.setDisplay('health_questions',false);
				g_form.setDisplay('the_past_14_days',false);
				g_form.setDisplay('health_any_recent_contact_with_sick_person',false);
				g_form.setDisplay('have_you_received_a_covid_19_vaccination',false);
				g_form.setDisplay('have_you_tested_positive_for_covid_19_in_the_past_14_days',false);
				g_form.setDisplay('are_you_currently_under_quarantine',false);
				g_form.setDisplay('do_you_agree_to_wear_a_face_mask_and_maintain_social_distancing_guidelines_while_on_the_premises',false);
				


				g_form.setDisplay('nda_sign',false);
				g_form.setDisplay('terms_and_conditions_agreed',false);
				g_form.setDisplay('visit_nda',false);
				g_form.setDisplay('visitor_signature',false);
				g_form.setDisplay('visit_nda_id',false);
				
				
				g_form.setDisplay('visitor_image',false);
				g_form.setDisplay('visitor_image_capture',false);
			}
        });
    }
    //Type appropriate comment here, and begin script below

}