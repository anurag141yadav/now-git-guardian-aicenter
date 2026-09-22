function onSubmit() {	
	if(
		g_form.getValue('are_you_currently_under_quarantine')=="Yes" || 
		g_form.getValue('do_you_agree_to_wear_a_face_mask_and_maintain_social_distancing_guidelines_while_on_the_premises')=="No" || 
		g_form.getValue('have_you_received_a_covid_19_vaccination')=="No" || 
		g_form.getValue('have_you_tested_positive_for_covid_19_in_the_past_14_days')=="Yes" || 
		g_form.getValue('health_any_recent_contact_with_sick_person')=="Yes" || 
		g_form.getValue('the_past_14_days')!="NONE" 
	){
		g_form.addErrorMessage('Problem with your health-related answers');
		return false;
	}
	else
		return true;
   //Type appropriate comment here, and begin script below
   
}