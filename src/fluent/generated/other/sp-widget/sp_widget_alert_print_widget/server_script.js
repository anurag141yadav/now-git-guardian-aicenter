(function() {
    /* populate the 'data' object */
    data.badgeTemplates = [];
    // get badge templates from table based on type - visitor
    var grBadgeTemplate =
        new GlideRecordSecure('x_aleen_snguardian_badge_template');
    grBadgeTemplate.addQuery('type', 'Visitor');
    grBadgeTemplate.query();
    while (grBadgeTemplate.next()) {
        var templates = {
            name: grBadgeTemplate.getValue('name'),
            front: grBadgeTemplate.getValue('front'),
            back: grBadgeTemplate.getValue('back')
        };
        data.badgeTemplates.push(templates);
    }
    if (input && input.sys_id && input.sys_id != '') {
        data.recordId = input.sys_id;
        var visitorHelper = new VisitorHelper();
        data.visitData = visitorHelper.getVisitInfoBySysId(data.recordId);
        data.asset = hasActiveBadge(data.visitData["visitor.sys_id"]);
    }

    // ---- Helper function ----
    function hasActiveBadge(visitorSysId) {
        var metadataHelper = new MetadataGlideRecordHelper();
        var activeStatus = metadataHelper.getRecordSysIdByCode('x_aleen_snguardian_status_code', 'ACTIVE');

        var grIdentityAsset = new GlideRecordSecure('x_aleen_snguardian_identity_asset');
        grIdentityAsset.addQuery('identity', visitorSysId);
        grIdentityAsset.addQuery('status', activeStatus);
		grIdentityAsset.setLimit(1);
        grIdentityAsset.query();
        if (grIdentityAsset.next()) {
            var badge_number = grIdentityAsset.getValue('number');
            return badge_number;
        } else {
            return "";
        }
    }

    if (input && input.actionType === "replacePlaceholder") {
        // Function: Replace placeholders
        var stringUtil = new StringUtil();
        input.visit_data["visitor.photo"] = getProfileImage(input.visit_data["visitor.sys_id"]);
        var front_side = stringUtil.replacePlaceholders(input.template_data.front,
            input.visit_data);
        var back_side = stringUtil.replacePlaceholders(input.template_data.back,
            input.visit_data);
        data.result = {
            "front": front_side,
            "back": back_side
        };

    }

    if (input && input.print_badge) {
        // Fetch Visitor Template
        var badgeData = input.badge_data;
        var visitData = input.visit_data;
        var template = {};
        template.front = badgeData.front;
        template.back = badgeData.back;
        var dataObj = {};
        dataObj.template = template;

        var stringUtilPrint = new StringUtil();
        var front_side_print =
            stringUtilPrint.replacePlaceholders(dataObj.template.front, visitData);
        var back_side_print =
            stringUtilPrint.replacePlaceholders(dataObj.template.back, visitData);
        var formattedBadge = {
            "front": front_side_print,
            "back": back_side_print
        };

        data.result = formattedBadge;

        return data;
    }

    function getProfileImage(visitorId) {
        var imageId;

        var grAttachment = new GlideRecordSecure('sys_attachment');
        grAttachment.addQuery('table_name', 'x_aleen_snguardian_visitor');
        grAttachment.addQuery('table_sys_id', visitorId);
		grAttachment.setLimit(1);
        grAttachment.query();
        if (grAttachment.next()) {
            imageId = grAttachment.getUniqueValue();
        }

        if (!imageId) {
            var grSpecificAttachment = new GlideRecordSecure('sys_attachment');
            grSpecificAttachment.addQuery('table_name', 'ZZ_YYx_aleen_snguardian_visitor');
            grSpecificAttachment.addQuery('table_sys_id', visitorId);
            grSpecificAttachment.query();
			grSpecificAttachment.setLimit(1);
            if (grSpecificAttachment.next()) {
                imageId = grSpecificAttachment.getUniqueValue();
            }
        }

        return imageId;
    }
})();