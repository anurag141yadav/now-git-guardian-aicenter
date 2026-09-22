(function() {
    var userRoles = [];
    var user = gs.getUser(); // Get the current user
    if (user) {
        userRoles = user.getRoles(); // Fetch roles as an array
    }
    data.userRoles = userRoles;

    data.email = null;
    data.search_type = $sp.getParameter('search_type') || 'email';
    data.visitFound = false;
    data.message = 'Please enter an email to search for scheduled visits.';
    data.visits = [];
    data.visitsGr = [];
    data.walkinLink = options.walkin_record_producer || undefined;
    data.idScanWidget = options.id_scan_widget || "alert-visitor-camera-capture";
    data.qrScanWidget = options.qr_scan_widget || "alert-qr-code-reader";
    data.visitActions = JSON.parse(options.visit_actions) || undefined;
    if (input && input.email) {
        data.email = input.email;
        var email = input.email;
        var visitGr = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
        visitGr.addQuery('visitor.email', email);
        visitGr.addQuery('location', input.location);
        visitGr.query();
        var metaDataGlideRecordHelper = new MetadataGlideRecordHelper();
        while (visitGr.next()) {
            var emailBasedVisitMetadata = metaDataGlideRecordHelper.getRecordAsJSONWithSelectedAttributes('x_aleen_snguardian_visitor_visit', visitGr.getUniqueValue());
            data.visitsGr.push(emailBasedVisitMetadata);
            if (emailBasedVisitMetadata['status.code'] != 'COMPLETED') {
                data.visitFound = true;
            }
            data.visits.push({
                visit_id: visitGr.getValue('sys_id'),
                visit_date: visitGr.getValue('start_date'),
                location: String(visitGr.location.name),
            });
        }
        if (data.visits.length == 1) {
            data.message = data.visits.length + ' Visit found for ' + email + '.';
        } else if (data.visits.length > 1) {
            data.message = data.visits.length + '  Visits found for ' + email + '.';
        } else {
            data.message = 'No visits found for ' + email + '. Proceed with registration.';
        }
        return data;
    }
    if (input && input.visitId) {
        data.visitId = input.visitId;
        var visitId = input.visitId;
        var grVisit = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');
    
 				grVisit.addQuery('visitor.email', input.visitId);
				grVisit.addQuery('location', input.location);
				var visitQuery = grVisit.addQuery('type.code', 'SINGLE'); // SINGLE

				visitQuery.addOrCondition('type.code', 'GROUP') // GROUP
					.addCondition('location', input.location)
					.addCondition('check_in_check_out_as_a_group', true)
					.addCondition('group', input.visitId);
				grVisit.query();
        var metaDataGlideRecordHelperVisitId = new MetadataGlideRecordHelper();
        while (grVisit.next()) {
            var visitIdBasedVisitMetadata = metaDataGlideRecordHelperVisitId.getRecordAsJSONWithSelectedAttributes('x_aleen_snguardian_visitor_visit', grVisit.getUniqueValue());
            data.visitsGr.push(visitIdBasedVisitMetadata);
            if (visitIdBasedVisitMetadata['status.code'] != 'COMPLETED') {
                data.visitFound = true;
            }
            data.visits.push({
                visit_id: grVisit.getValue('sys_id'),
                visit_date: grVisit.getValue('start_date'),
                location: String(grVisit.location.name),
            });
        }
        if (data.visits.length == 1) {
            data.message = data.visits.length + ' Visit found for ' + visitId + '.';
        } else if (data.visits.length > 1) {
            data.message = data.visits.length + '  Visits found for ' + visitId + '.';
        } else {
            data.message = 'No visits found for ' + visitId + '. Proceed with registration.';
        }
        return data;
    }
    if (input && input.action == "fetch-visits-by-visitor-id") {

        var firstName = input.scanIdResponse.documentInformation.firstName ? input.scanIdResponse.documentInformation.firstName : "";
        if (firstName) {
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        }
        var grVisitorId = new GlideRecordSecure('x_aleen_snguardian_visitor');
        grVisitorId.addQuery('first_name', input.scanIdResponse.documentInformation.firstName);
        grVisitorId.addQuery('last_name', input.scanIdResponse.documentInformation.lastName);
        if (input.scanIdResponse.documentInformation.visitorStatus) {
            grVisitorId.addQuery('visitor_status', input.scanIdResponse.documentInformation.visitorStatus);
        }
        grVisitorId.query();
        var visitorMatched = false;
        while (grVisitorId.next()) {
            // document number matched with any one visitor
            if (grVisitorId.getElement('document_number').getDecryptedValue() == input.scanIdResponse.documentInformation.documentNumber) {
                visitorMatched = true;

                var grVisitId = new GlideRecordSecure('x_aleen_snguardian_visitor_visit');

                grVisitId.addQuery('visitor', grVisitorId.getUniqueValue());
                grVisitId.addQuery('location', input.location);
                var visitQuery = grVisitId.addQuery('type.code', 'SINGLE'); // SINGLE

                visitQuery.addOrCondition('type.code', 'GROUP') // GROUP
                    .addCondition('location', input.location)
                    .addCondition('check_in_check_out_as_a_group', true)
                    .addCondition('visitors', 'CONTAINS', grVisitorId.getUniqueValue());

                grVisitId.query();

                var metaDataHelper = new MetadataGlideRecordHelper();
                while (grVisitId.next()) {
                    var visitMetadata = metaDataHelper.getRecordAsJSONWithSelectedAttributes('x_aleen_snguardian_visitor_visit', grVisitId.getUniqueValue());
                    if (visitMetadata['status.code'] != 'COMPLETED') {
                        data.visitFound = true;
                    }
                    data.visitsGr.push(visitMetadata);
                    data.visits.push({
                        visit_id: grVisitId.getValue('sys_id'),
                        visit_date: grVisitId.getValue('start_date'),
                        location: String(grVisitId.location.name),
                    });
                }
                if (data.visits.length == 1) {
                    data.message = data.visits.length + ' Visit found for ' + firstName + '.';
                } else if (data.visits.length > 1) {
                    data.message = data.visits.length + '  Visits found for ' + firstName + '.';
                } else {
                    data.existing_visitor = true;
                    data.message = 'No visits found for ' + firstName + '. Proceed with registration.';
                }
                return data;
            }

        }

        if (!visitorMatched) {
            data.existing_visitor = false;
        }
        data.message = "Visitor not registered, please contact Lobby Administrator";
        return data;

    }

    if (input && input.auto_populate_visitor) {
        data.response = {};
        data.response.visitType = new MetadataGlideRecordHelper().getRecordSysIdByCode('x_aleen_snguardian_visitor_visit_type', "SINGLE");
        if (input.visitor_email) {
            var grVisitor = new GlideRecordSecure("x_aleen_snguardian_visitor");
            grVisitor.addQuery('email', input.visitor_email);
            grVisitor.addQuery('is_deleted', false);
            grVisitor.setLimit(1);
            grVisitor.query();
            if (grVisitor.next()) {
                data.response.visSysId = grVisitor.getUniqueValue();
            }
        } 
				if (input.visitorDocumentData) {
						if(input.visitorDocumentData.existingVisitor)
            	data.response.existing_visitor = input.visitorDocumentData.existingVisitor;
						if(input.visitorDocumentData.visitorData){
							var formattedFirstName = input.visitorDocumentData.visitorData.firstName ? input.visitorDocumentData.visitorData.firstName : "";
							data.response.first_name = formattedFirstName.charAt(0).toUpperCase() + formattedFirstName.slice(1).toLowerCase();
							var formattedLastName = input.visitorDocumentData.visitorData.lastName ? input.visitorDocumentData.visitorData.lastName : "";
							data.response.last_name = formattedLastName.charAt(0).toUpperCase() + formattedLastName.slice(1).toLowerCase();
						}
				}
        return data;
    }

})();