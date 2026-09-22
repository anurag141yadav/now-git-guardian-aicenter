function onSubmit() {
    var visit_type = g_form.getValue('visit_type_metadata');
    if (visit_type == "GROUP") {
        var mrvs = g_form.getValue('visit_visitor_mrvs');
        if (!mrvs) {
            g_form.addErrorMessage('Visitor MRVS data is missing or invalid.');
            return false;
        }
        var obj = JSON.parse(mrvs);
        var mrvsSize = obj.length;

        var config_obj;
        var lobby_config = g_form.getValue('lobby_config');
        if (!lobby_config) {
            g_form.addErrorMessage('Lobby configuration is missing or not set.');
            return false;
        }

        // Parse the lobby configuration value
        try {
            config_obj = JSON.parse(lobby_config);
        } catch (e) {
            g_form.addErrorMessage('Error parsing lobby configuration.');
            return false;
        }

        var maxGroupSize = parseInt(config_obj.maxGroupSize);
        if (isNaN(maxGroupSize)) {
            g_form.addErrorMessage('Invalid maximum group size configuration.');
            return false;
        }

        if (mrvsSize > maxGroupSize) {
            g_form.addErrorMessage('Group size exceeded the maximum allowed value.');
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}