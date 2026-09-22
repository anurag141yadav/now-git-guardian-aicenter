function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var action = g_form.getValue('select_action');
    if (newValue == 'plastic' && action == 'issue_badge') {
        g_form.setDisplay('badge_number', true);
        g_form.setMandatory('badge_number', true);
        g_form.setDisplay('empty', true);
    } else {
        g_form.setMandatory('badge_number', false);
        g_form.setDisplay('badge_number', false);
        g_form.setDisplay('empty', false);
    }
    var gaBadgeAvailability = new GlideAjax('IdentityClientScriptHelper');
    gaBadgeAvailability.addParam('sysparm_name', 'checkBadgeAvailability');
    gaBadgeAvailability.addParam('sysparm_badge_type', newValue);
    if (newValue == 'mobile_cred') {
        gaBadgeAvailability.addParam('sysparm_nfc', g_form.getValue('nfc_system')); //code
        gaBadgeAvailability.addParam('sysparm_subtype', g_form.getValue('sub_type')); //code
    }
    gaBadgeAvailability.getXMLAnswer(getResponse);

    function getResponse(response) {
        if (response && response == 'false') {
            g_form.showFieldMsg('badge_type', 'No badge available in inventory according to Config');
        }
    }

}