function onSubmit() {
    try {
        var valid_from = g_form.getValue("access_valid_from");
        var valid_to = g_form.getValue("access_valid_to");
        var fromDate = new Date(valid_from.replace(" ", "T"));
        var toDate = new Date(valid_to.replace(" ", "T"));
        if (fromDate > toDate) {
            alert("Valid From Date cannot be later than Valid To Date.");
            return false;
        }
        var exisiting_access = g_service_catalog.parent.getValue("existing_access_mrvs");
        if (exisiting_access) {
            var currentObj = JSON.parse(exisiting_access);
            if (currentObj[g_form.getValue("access_level")] != undefined) {
                if (!g_service_catalog.parent.getValue("validate_dates") || g_service_catalog.parent.getValue("validate_dates") == "false") {
                    alert("Unable to add because access level already assigned to you");
                    return false;
                } else {
                    var arr = JSON.parse(g_service_catalog.parent.getValue("existing_access_mrvs"));
                    for (var i = 0; i < arr["access_list"].length; i++) {
                        var record = arr["access_list"][i];
                        var level = record.existing_access_location;
                        var validFrom = record.existing_valid_from;
                        var validTo = record.existing_valid_to;
						var associated_asset = record.existing_associated_asset;
                        if (level == g_form.getValue("access_level")) {
                            if (g_service_catalog.parent.getValue("validate_dates") == "true") {
                                var existingFromDate = new Date(validFrom.replace(" ", "T"));
                                var existingToDate =new Date(validTo.replace(" ", "T"));
                                if (fromDate <= existingToDate && toDate >= existingFromDate) {
                                    alert("Sorry, Unable to add because you currently have this access assigned for these validity dates");
                                    return false;
                                }
                            }
                            if (g_service_catalog.parent.getValue("validate_associated_asset") == "true") {
                                if (g_form.getValue("associated_asset") == associated_asset) {
                                    alert("Sorry, Unable to process request this access level is already provisioned to this asset");
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
        }
        return true;
    } catch (e) {
    }
}