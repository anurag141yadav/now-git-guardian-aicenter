(function() {
    var logger = new AlertGuardianLogger(" Alert NDA Widget:: ");
    var visitHelper = new VisitorHelper();
    data.isPortal = true;
    if (input && input.sys_id) {
        data.recordId = input.sys_id || '';
    }
    if (input && input.action) {
        var inputAction = input && input.action;
        if (inputAction == 'fetch_nda') {
            data.isPortal = false;
            data.ndaData = visitHelper.getNDAByLocationId(input.locationId);
            data.success = true;
            return data;
        }
    }
    if (data.recordId != undefined && data.recordId != '') {
        data.visitInfo = visitHelper.getVisitInfoBySysId(data.recordId);
        var visitLocation = data.visitInfo['location.sys_id'];
        var isNDASignedValue = data.visitInfo['is_nda_signed'];
        var stringUtil = new StringUtil();
        if (isNDASignedValue == "0") {
            data.ndaData = visitHelper.getNDAByLocationId(visitLocation);
            var replacedString = stringUtil.replacePlaceholders(data.ndaData.template.toString(), data.visitInfo);
            data.ndaData.template = replacedString;
            data.nda_Expired = false;
        } else {
            data.ndaId = data.visitInfo['nda.sys_id'];
            data.ndaData = visitHelper.getNDABySysId(data.ndaId);
            var replacedStringNew = stringUtil.replacePlaceholders(data.ndaData.template.toString(), data.visitInfo);
            data.ndaData.template = replacedStringNew;
            var dateUtil = new DateUtil();
            var ndaExpDate = data.visitInfo.nda_sign_expiry_date_time;
            var ndaExpMilliseconds = dateUtil.getDateTimeEpoch(ndaExpDate);
            var currentMilliseconds = parseInt(dateUtil.getCurrentDateTimeEpoch());
            data.nda_Expired = false;
            if (currentMilliseconds > ndaExpMilliseconds) {
                data.nda_Expired = true;
            }
        }
    }

    if (input && input.action === 'sendEmail') {
        try {
            var grEmail = new GlideRecordSecure('x_aleen_snguardian_visitor_notification');
            grEmail.initialize();
            grEmail.setValue('type', 'email'); // Set to 'send-ready' to trigger sending
            grEmail.setValue('visit', input.visit);
            grEmail.setValue('host_cc', false);
            grEmail.setValue('template', input.body);
            grEmail.setValue('subject', input.subject);
            grEmail.setValue('location', input.location);
            // You can add more fields like grEmail.setValue('user', gs.getUserID());
            grEmail.insert();
            data.result = "Email sent successfully via sys_email.";
            data.success = true;
        } catch (ex) {
            logger.error("sendEmail Exception :: " + ex + " \nStack\n " + ex.stack);
            data.success = false;
            data.error = ex.getMessage();
        }
    }

    if (input && input.action === 'is_nda_agreed') {
        try {
            var is_nda_agreed = input.is_agreed ?? false;
            var table = 'x_aleen_snguardian_visitor_visit';
            var sysId = input.visit_sysId;
            var grTable = new GlideRecordSecure(table);
            if (grTable.get(sysId)) {
                var decision_table_input = new MetadataGlideRecordHelper().getDecisionTableByCode("LOBBY-ACTIVITY-CONFIG");
                var inputs = {};
                var dt = new sn_dt.DecisionTableAPI();
                var output = [];
                try {
                    var response = dt.getDecisions(decision_table_input, inputs);
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
                } catch (e) {
                    logger.error("is_nda_agreed Exception :: " + e + " \nStack\n " + e.stack);
                    data.success = false;
                    data.error = e.getMessage();
                }
                var dateUtilNew = new DateUtil();
                var milliseconds = dateUtilNew.getDateTimeEpoch(output[0]['ndaValidity']);
                var currentMillisec = parseInt(dateUtilNew.getCurrentDateTimeEpoch());
                grTable.setValue('is_nda_signed', is_nda_agreed);
                grTable.setValue('nda_signed_date_time', dateUtilNew.getGlideDateTimeFromEpoach(currentMillisec));
                grTable.setValue('nda_sign_expiry_date_time', dateUtilNew.getGlideDateTimeFromEpoach(currentMillisec + milliseconds));
                grTable.setValue('nda', input.visit_nda);
                data.success = grTable.update();
            } else {
                logger.debug("is_nda_agreed : Signed NDA : Visit Record not found")
                data.success = false;
                data.error = 'Signed NDA : record not found';
            }
        } catch (e) {
            logger.error("is_nda_agreed Exception Signed NDA :: " + e + " \nStack\n " + e.stack);
            data.success = false;
            data.error = e.getMessage();
        }
    }

})();