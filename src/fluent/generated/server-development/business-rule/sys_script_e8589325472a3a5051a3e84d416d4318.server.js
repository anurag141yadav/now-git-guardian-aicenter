(function executeRule(current, previous /*null when async*/ ) {
    if (current.visit.type.code == "GROUP") {
        var grVisitGrUpdate = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        grVisitGrUpdate.addNotNullQuery('parent');
        grVisitGrUpdate.addQuery('parent', current.getValue("visit"));
        grVisitGrUpdate.query();
        while (grVisitGrUpdate.next()) {
            grVisitGrUpdate.status = updateVisitStatus(grVisitGrUpdate);
            grVisitGrUpdate.update();
        }
    }

    function updateVisitStatus(child_visit) {
        try {
            var isUserWatchlisted = isWatchlisted(child_visit.getValue("visitor"));
            var isHostApproval = current.getDisplayValue("variables.metadata.need_host_confirmation") == "Yes" ? true : false;
            var parent_status = current.getDisplayValue("visit.status.code");
            var child_status = child_visit.getDisplayValue("status.code");
            var request_stage = current.getValue("stage");
            var request_approval = current.getDisplayValue('approval');
            if (isUserWatchlisted && request_stage == "ADMIN-APPROVAL") {
                if (request_approval == "Requested") {
                    return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "PENDING-APPROVAL");
                }
                if (request_approval == "Rejected") {
                    return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "DENIED");
                }
                if (request_approval == "Approved") {
                    return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "SCHEDULED");
                }
            }
            if (isHostApproval) {
                if (isUserWatchlisted && request_stage == "HOST-APPROVAL" && child_status != "DENIED") {
                    if (request_approval == "Requested") {
                        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "PENDING-APPROVAL");
                    }
                    if (request_approval == "Approved") {
                        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "SCHEDULED");
                    }
                }
                if (!isUserWatchlisted) {
                    if (request_approval == "Requested" && (request_stage == "ADMIN-APPROVAL" || request_stage == "HOST-APPROVAL")) {
                        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "PENDING-APPROVAL");
                    }
                    if (request_approval == "Rejected" && request_stage == "HOST-APPROVAL") {
                        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "DENIED");
                    }
                    if (request_approval == "Approved" && request_stage == "HOST-APPROVAL") {
                        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "SCHEDULED");
                    }
                }
            }
            if ((!isHostApproval || parent_status == "SCHEDULED") && child_status != "DENIED") {
                return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_visitor_mt_visit_status", "SCHEDULED");
            }
            throw "No Condition Matched checking !!!";
        } catch (e) {}
    }

    function isWatchlisted(visitor_sys_id) {
        var grVisitor = new GlideRecordSecure("x_aleen_snguardian_visitor");
        if (visitor_sys_id && grVisitor.get(visitor_sys_id)) {
            var grWatchList = new GlideRecordSecure("x_aleen_snguardian_visitor_watch_list");
            grWatchList.addQuery("email", grVisitor.getValue('email'));
            grWatchList.setLimit(1);
            grWatchList.query();
            if (grWatchList.next()) {
                return true;
            } else {
                return false;
            }
        }
        throw "Exception Visitor Doesn't Exist";
    }
})(current, previous);