(function() {

    var content = prepareData("OPEN");
    data.content = {};
    data.content = content;
    data.visitor_request_sys_id = $sp.getParameter('sys_id') || '';
    data.visitor_action = $sp.getParameter('action') || 'checkin';
    data.table_name = $sp.getParameter('table') || 'x_aleen_snguardian_visitor_request';

    var portalGr = $sp.getPortalRecord();
    data.logo = portalGr.getDisplayValue("logo");
    data.homepage = portalGr.getDisplayValue("homepage.id");

    fetchData();
    if (input && input.action === 'getUpdatedData') {
        fetchData();
    }

    function fetchData() {
        var dataHelper = new VisitorHelper();
        data.record = dataHelper.getRequestUpdates(data.visitor_action, data.visitor_request_sys_id);
        data.content = prepareData(data.record.status_code);
        return data;
    }

    function prepareData(visitStatus) {
        content = {};
        if (visitStatus == "CHECK-IN") {
            content.status = "success";
            content.message = "Check-In Completed Successfully";
            content.show_print_badge = true;
            content.add_more_visitors = false;
            content.visit_id = data.record.visitId;
            return content;
        } else if (visitStatus == "AWAITING-APPROVAL") {
            content.status = "pending";
            content.message = "Approval Pending for Your Request";
            content.show_print_badge = false;
            content.add_more_visitors = false;
            return content;
        } else if (visitStatus == "OPEN") {
            content.status = "loading";
            content.message = "Processing... Please Wait.";
            content.show_print_badge = false;
            content.add_more_visitors = false;
            return content;
        }
        //WALKIN
        else if (visitStatus == "SCHEDULED") {
            content.status = "success";
            content.message = "The visit has been scheduled successfully";
            content.show_print_badge = false;
            content.add_more_visitors = false;
            return content;
        } else if (visitStatus == "CLOSED") {
            content.status = "success";
            content.message = "The Request processed successfully";
            content.show_print_badge = false;
            content.add_more_visitors = false;
            return content;
        } else if (visitStatus == "REJECTED" || visitStatus == "DENIED") {
            content.status = "rejected";
            content.message = "Your request has been rejected!";
            content.show_print_badge = false;
            content.add_more_visitors = false;
            return content;
        } else if (visitStatus == "PROVISION-FAILED") {
						content.status = "error";
            content.message = "Error while processing request!";
            content.show_print_badge = false;
            content.add_more_visitors = false;
            return content;
				}

    }



})();