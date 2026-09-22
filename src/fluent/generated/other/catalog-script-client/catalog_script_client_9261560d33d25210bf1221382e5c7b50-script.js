function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'YES' || newValue == 'Yes') {
        g_form.addDecoration('visitor_need_assistance', 'fa fa-wheelchair', '');
    } else {
        g_form.removeDecoration('visitor_need_assistance', 'fa fa-wheelchair', '','black');
    }


    //Type appropriate comment here, and begin script below

}