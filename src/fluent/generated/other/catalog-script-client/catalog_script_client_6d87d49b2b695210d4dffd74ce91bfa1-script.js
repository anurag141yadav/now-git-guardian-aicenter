function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var attachment = g_form.getValue('visit_visitor_attachment'); // sys_id

    var gaCheckFile = new GlideAjax('MRVS_util');
    gaCheckFile.addParam('sysparm_name', 'checkFileFormat');
    gaCheckFile.addParam('sysparm_attachment_id', attachment);
    gaCheckFile.getXMLAnswer(function(response) {
        getAnswer(response, attachment);
    });
}

function getAnswer(response, attachment) {
    try {
        var fileIsValid = response === 'true'; // Check if response matches 'true'

        // If the file format is valid, proceed with fetching CSV data
        if (fileIsValid) {
            fetchCsvData(attachment); // Call to fetch CSV data if valid
        } else {
            g_form.showFieldMsg('visit_visitor_attachment', 'Invalid file format. Only CSV is allowed.');
        }
    } catch (error) {
        console.error("Error in getAnswer: ", error);
        g_form.showFieldMsg('visit_visitor_attachment', 'An error occurred while validating the file format.');
    }
}

function fetchCsvData(attachment) {
    var gaFetchCsv = new GlideAjax('MRVS_util');
    gaFetchCsv.addParam('sysparm_name', 'fetchCSVData');
    gaFetchCsv.addParam('sysparm_cart_id', attachment);
    gaFetchCsv.getXMLAnswer(function(response) {
        try {
            
            var fileSize = JSON.parse(response).length;
            var lobbyConfig = g_form.getValue('lobby_config');
            var configObj = JSON.parse(lobbyConfig);

            g_form.setValue('visit_visitor_mrvs', response);

            if (fileSize > parseInt(configObj.maxGroupSize)) {
                g_form.showFieldMsg('visit_visitor_attachment', 'File uploaded is larger than the required size');
            }
        } catch (error) {
            console.error("Error in fetchCsvData: ", error);
            g_form.showFieldMsg('visit_visitor_attachment', 'An error occurred while processing the uploaded file.');
        }
    });
}
