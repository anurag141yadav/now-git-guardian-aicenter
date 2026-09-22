function onSubmit() {
    var active_badge = g_form.getValue('found_active_badges');
    var action = g_form.getValue('select_action');
    var deactivate_existing = g_form.getValue('deactivate_exisiting_badge');
    if (action == 'return_badge' && active_badge == 'No') {
        alert('No active badge found');
        return false;
    } else if (action == 'issue_badge' && active_badge == 'Yes' && deactivate_existing == 'No') {
        alert('User already has active badge');
        return false;
    } else {
        g_form.addInfoMessage("Request submitted Successfully");
    }
}