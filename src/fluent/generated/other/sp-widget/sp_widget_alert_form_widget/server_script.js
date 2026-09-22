// form functionality - URL parameter driven
(function($sp, input, data, options, gs) {
    /* "use strict"; -linter issues */
    // populate the 'data' variable
    data.input = input;
    data.attachmentUploadSuccessMsg = "Attachment upload was successful";
    data.recordAddedMsg = "Record Added";
    data.updatedMsg = "Record Updated";
    data.exportPDFMsg = "Export to PDF";
    data.exportPDFLandMsg = "Export to PDF (landscape)";
    data.addAttachmentMsg = "Add an attachment";
    data.supportedAttachmentExtensions = ".png";
    data.maxAttachmentSize = 1024;
    data.advancedUIEnabled = false;
    data.closeWindowMsg = "Close Window";
    if (isNaN(data.maxAttachmentSize))
        data.maxAttachmentSize = 24;
    data.largeAttachmentMsg = "Attached files must be smaller than {0} - please try again" + data.maxAttachmentSize + "MB";

    data.isAdmin = gs.hasRole('x_aleen_snguardian.admin');
    data.emptyStateTemplate = options.empty_state_template;
    var isPopup = false;

    if (input) {
        data.table = input.table;
        data.sys_id = input.sys_id;
        data.view = input.view;
        if (input.preventUrlUpdateOnSubmit)
            data.preventUrlUpdateOnSubmit = input.preventUrlUpdateOnSubmit;
        var result = {};
        if (input._fields) {
            result = $sp.saveRecord(input.table, input.sys_id, input._fields);
            data.sys_id = result.sys_id;
        }

        if (input.sys_id == '-1' || input.sys_id == -1)
            data.isNewRecord = true;
        if (input.isPopup === true || input.isPopup == "true")
            isPopup = true;
    } else {
        data.table = options.table || $sp.getParameter("t") || $sp.getParameter("table") || $sp.getParameter("sl_table");
        data.sys_id = options.sys_id || $sp.getParameter("sys_id") || $sp.getParameter("sl_sys_id");
        if (!data.sys_id && options.sys_id_required != "true")
            data.sys_id = "-1";
        data.view = options.view || $sp.getParameter("view") || $sp.getParameter("v"); // no default
    }
    if (data.view == "portaledit" && data.table == "x_aleen_snguardian_visitor_visit") {
        var grRecordData = new GlideRecordSecure(data.table);
        if (grRecordData.get(data.sys_id)) {
            if (grRecordData.getElement('status').code == "SCHEDULED") {
                data.addVisitorButton = true;
            }
        }
    }

    data.isValid = true;
    data.hideRelatedLists = options.hideRelatedLists || true;
    data.disableUIActions = options.disableUIActions === "true" || !!(input && input.disableUIActions);

    data.f = $sp.getForm(data.table, data.sys_id, data.query, data.view, isPopup);
    if (options.fieldValues) {
        Object.keys(options.fieldValues).forEach(key => {
            data.f._fields[key].value = options.fieldValues[key].value ? options.fieldValues[key].value : "";
            data.f._fields[key].displayValue = options.fieldValues[key].displayValue ? options.fieldValues[key].displayValue : "";
            if (data.f._fields[key].display_value_list)
                data.f._fields[key].display_value_list = options.fieldValues[key].display_value_list ? options.fieldValues[key].display_value_list : "";
        });
    }
    if (input && input.saveForm) {
        if (input.sys_id == -1) {
            // Insert new record
            var grWatchlist = new GlideRecordSecure(input.table);
            if (input.record.email && input.record.email.value) {
                grWatchlist.addQuery('email', input.record.email.value);
            }
            try {
                if (input.record.location && input.record.scope.displayValue.includes('Location') && input.record.location.value) {
                    var allChildrenLocations = new VisitorHelper().getAllChlidrenLocations(input.record.location.value);
                    grWatchlist.addQuery('location', 'IN', allChildrenLocations);
                }
            } catch (err) {

            }
						grWatchlist.setLimit(1);
            grWatchlist.query();
            if (grWatchlist.next() && input.record.email && input.record.email.value) {
                data.createdSysId = -1;
                data.recordCreated = false;
                data.message = "User already exist with same email !";
                return data;
            } else {
                grWatchlist.initialize();
                for (var field in input.record) {
                    grWatchlist.setValue(field, input.record[field]['value']);
                }
                data.createdSysId = grWatchlist.insert();
                data.recordCreated = true;
                data.message = "Form Data Saved Successfully..";
                return data;
            }
        } else {
            //Updating Existing records
            var tableGr = new GlideRecordSecure(input.table);
            if (tableGr.get(input.sys_id)) {
                for (var field in input.record) {
                    tableGr.setValue(field, input.record[field]['value']);
                }
                tableGr.update();
                data.recordCreated = false;
                data.recordUpdated = true;
                data.message = "Record Updated Successfully..";
                return data;
            } else {
                data.recordCreated = false;
                data.recordUpdated = false;
                data.message = "Data save unsuccessful, User not found !"
                return data;
            }
        }
    }

})($sp, input, data, options, gs);