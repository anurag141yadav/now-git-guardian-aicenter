function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setDisplay('visit_visitor_single_visitor_id', false);
    g_form.setDisplay('visit_visitor_group_name', false);
    g_form.setDisplay('check_in_out_as_one', false);
    g_form.setDisplay('visit_visitor_attachment', false);

    var gaVisitType = new GlideAjax('VisitorClientScriptHelper');
    gaVisitType.addParam('sysparm_name', 'getVisitTypeBySysId');
    gaVisitType.addParam('visit_type_sysid', newValue);
    gaVisitType.getXMLAnswer(getResponse);

    function getResponse(response) {
        var type = response;
        g_form.setValue('visit_type_metadata', type);
        if (type == 'GROUP') {
            g_form.setMandatory('visit_visitor_group_name', true);
            g_form.setDisplay('visit_visitor_group_name', true);
            g_form.setDisplay('check_in_out_as_one', true);
            g_form.setDisplay('visit_visitor_attachment', true);
            g_form.setDisplay('visit_visitor_mrvs', true);
            g_form.setDisplay('visit_visitor_single_visitor_id', false);

			g_form.setMandatory('visit_visitor_single_first_name', false);
            g_form.setMandatory('visit_visitor_single_last_name', false);
            g_form.setMandatory('visit_visitor_single_email', false);
            g_form.setMandatory('visitor_type', false);
            g_form.setDisplay('visit_visitor_details', false);

            //For Walk in form
            g_form.setDisplay('nda_sign', false);
            g_form.setDisplay('visitor_image', false);
            g_form.setDisplay('health_questions', false);
            g_form.setDisplay('visitor_id_scan', false);
            g_form.setDisplay('visitor_image', false);


        } else if (type == 'SINGLE') {
            g_form.setMandatory('visit_visitor_group_name', false);
            g_form.setDisplay('visit_visitor_single_visitor_id', true);
            var visitorControl = g_form.getControl('visit_visitor_single_visitor_id');
            if (visitorControl) {
                g_form.addOption('visit_visitor_single_visitor_id', 'CREATE', '-- Create a new Visitor --', 0);
            }

			if (g_form.getValue('visit_visitor_single_visitor_id') == 'CREATE') {
				g_form.setDisplay('visit_visitor_details', true);
                g_form.setMandatory('visit_visitor_single_first_name', true);
                g_form.setMandatory('visit_visitor_single_last_name', true);
                g_form.setMandatory('visit_visitor_single_email', true);
                g_form.setMandatory('visitor_type', true);
                
            }
            g_form.setDisplay('visit_visitor_group_name', false);
            g_form.setDisplay('check_in_out_as_one', false);
            g_form.setDisplay('visit_visitor_attachment', false);
            g_form.setDisplay('visit_visitor_mrvs', false);

            //For Check in form - based on lobby action config
            var location = g_form.getValue('visit_location');
            g_form.clearValue('visit_location');
            g_form.setValue('visit_location', location);

        }
    }

}