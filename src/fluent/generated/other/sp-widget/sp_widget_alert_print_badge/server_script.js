(function() {
    /* populate the 'data' object */
    var logger = new AlertGuardianLogger(" Alert print badge:: ");
    data.badgeTemplates = [];
    data.visitDataArr = [];
    data.request_for = [];
    // For widgetInput (spModal)
    // Check for widgetInput data
    data.requestNumbers = [];
    data.debugInfo = {};

    // 1. First check for standard widgetInput
    if (input && input.requestNumbers) {
        data.debugInfo.source = 'widgetInput';

        // Try both possible property names
        var requestNumbers = input.requestNumbers;
        if (requestNumbers) {
            try {
                data.requestNumbers = requestNumbers;
                data.debugInfo.dataLength = data.requestNumbers.length;
            } catch (e) {
                data.debugInfo.parseError = e.message;
                logger.error("Exception (JSON parse):: " + e + " \nStack\n " + e.stack);
            }
        } else {
            data.debugInfo.missingProperty = true;
        }
    }
    // 2. Check for URL parameters (fallback)
    else if (typeof window !== 'undefined' && window.location) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var urlData = urlParams.get('data');
            if (urlData) {
                data.debugInfo.source = 'URL';
                data.requestNumbers = JSON.parse(decodeURIComponent(urlData));
                data.debugInfo.dataLength = data.requestNumbers.length;
            }
        } catch (e) {
            data.debugInfo.urlError = e.message;
            logger.error("Exception :: " + e + " \nStack\n " + e.stack);

        }
    }

    // 3. Log the debugging information
    logger.debug('Data load results: ' + JSON.stringify(data.debugInfo));

    // 4. Final fallback - empty array
    if (!data.requestNumbers.length) {
        logger.warn('No valid request numbers found - using empty array');
        data.requestNumbers = [];
    }

    logger.debug('Data load results : Request Numbers : ' + JSON.stringify(data.requestNumbers));

    // Query the x_aleen_snguardian_request table
    var gr1 = new GlideRecordSecure('x_aleen_snguardian_request');
    gr1.addQuery('number', 'IN', data.requestNumbers.join(','));
    gr1.query();
    while (gr1.next()) {
        // Process each record
        data.request_for.push(gr1.getValue("request_for"));
    }

    if (data.request_for && data.request_for.length > 0) {
        // Fetch Visitor Template
        for (var i = 0; i < data.request_for.length; i++) {
            var grIdentity = new GlideRecordSecure("x_aleen_snguardian_identity");
            if (grIdentity.get(data.request_for[i])) {
                var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
                var visitorJsonData = guardianGlideRecordUtil.toJSON(grIdentity, null);
                data.visitDataArr.push(visitorJsonData);
            }
            //    var identityHelper = new IdentityHelper();
            //    var visitorData = identityHelper.getIdentity(data.request_for[i]);

        }
    }

    //get badge templates from tablebased on type - visitor
    var grBadgeTemplate = new GlideRecordSecure('x_aleen_snguardian_badge_template');
    grBadgeTemplate.addQuery('type', 'Employee');
    grBadgeTemplate.query();
    while (grBadgeTemplate.next()) {
        var templates = {
            name: grBadgeTemplate.getValue('name'),
            front: grBadgeTemplate.getValue('front'),
            back: grBadgeTemplate.getValue('back')
        };
        data.badgeTemplates.push(templates);
    }

    if (input && input.actionType === "replacePlaceholder") {
        // Function: Replace placeholders
        var stringUtil = new StringUtil();
        var visitData = input.visit_data;
        var template_front = input.template_data.front;
        var template_back = input.template_data.back;
        if (visitData["type.code"] == "TEMPWORKER") {
            var grBadgeTemp = new GlideRecordSecure('x_aleen_snguardian_badge_template');
            grBadgeTemp.addQuery('type', 'Temporary Worker');
            grBadgeTemp.setLimit(1);
            grBadgeTemp.query();
            if (grBadgeTemp.next()) {
                template_front = grBadgeTemp.getValue('front');
                template_back = grBadgeTemp.getValue('back');
            }
        }
        var front_side = stringUtil.replacePlaceholders(template_front, visitData);
        var back_side = stringUtil.replacePlaceholders(template_back, visitData);
        data.result = {
            "front": front_side,
            "back": back_side
        };
    }

    if (input && input.print_badge) {
        //Fetch Visitor Template
        var badgeData = input.badge_data;
        var visitData = input.visit_data;
        var template = {};
        template.front = badgeData.front;
        template.back = badgeData.back;
        var dataObj = {};
        dataObj.template = template;
        var stringUtil = new StringUtil();
        var front_side = stringUtil.replacePlaceholders(dataObj.template.front, visitData);
        var back_side = stringUtil.replacePlaceholders(dataObj.template.back, visitData);
        var formattedBadge = {
            "front": front_side,
            "back": back_side
        };

        data.result = formattedBadge;
        return data;
    }

})();