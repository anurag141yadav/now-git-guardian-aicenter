(function() {
    var widget = $sp.getWidget('alert-visitor-camera-capture', {});
    var visitHelper = new VisitorHelper();
    data.cameraWidget = widget;
    var logger = new AlertGuardianLogger(" Alert Visitor Photo Capture Widget:: ")


    if (input && input.action === 'getConsentText') {
        var decision_table_input = new MetadataGlideRecordHelper().getDecisionTableByCode("CONSENT-TEXT-CONFIG");
        var dtInputs = {};
        dtInputs.u_location = input.location;
        var dt = new sn_dt.DecisionTableAPI();
        var output = [];
        try {
            var response = dt.getDecisions(decision_table_input, dtInputs);
            var output = [];
            for (var kl = 0; kl < response.length; kl++) {
                var decision = response[kl];
                var elements = decision['result_elements'];
                var formattedDecision = {};
                for (var key in elements) {
                    if (elements[key]) {
                        formattedDecision[visitHelper.covertKeysToCamelCase(key)] = elements[key].toString();
                    }
                }
                output.push(formattedDecision);
            }
            data.consentText = output[0]['consentText'];
            data.showDeletionCheckbox = output[0]['showDeletionCheckbox'];
            data.deletionNote = output[0]['deletionNote'];
            data.success = true;
        } catch (e) {
            logger.error("getConsentText Exception :: " + e + " \nStack\n " + e.stack);
            data.success = false;
            data.error = e.getMessage();
        }
    }

    return data;
})();