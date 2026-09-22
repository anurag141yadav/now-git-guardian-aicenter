(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Process Change Access Request Data Action:: ");
    var accessArray = [];
    var access_levelsObject = inputs.record.variables.access_levels;
    var data = JSON.parse(access_levelsObject);
    var grLocationAccessLevel = new GlideRecordSecure('x_aleen_snguardian_access_location');
    for (var i = 0; i < data.length; i++) {
    var accessEntry = {};
    grLocationAccessLevel.initialize();
    grLocationAccessLevel.get(data[i].access_level);
    accessEntry.access = grLocationAccessLevel.getValue("access_level").toString();
    accessEntry.status = data[i].access_record_status;
    accessEntry.action = data[i].access_action;
    accessEntry.valid_from = "";
    accessEntry.valid_to = "";
    accessEntry.record_id = "";
	accessEntry.associated_asset = data[i].associated_asset;
    try {
        if (accessEntry.status == "EXISTING") {
        accessEntry.record_id = data[i].access_record_id;
         }
    } catch (e) {
        logger.error("Exception : reading EXISTING record Id :: " + e + " \nStack\n " + e.stack);
        }
    try {
        var validFrom = new GlideDateTime(data[i].access_valid_from);
        accessEntry.valid_from = validFrom.getDisplayValue();
    } catch (e) {
        logger.error(" Reading Valid from : Exception :: " + e + " \nStack\n " + e.stack);
        }
    try {
        var validTo = new GlideDateTime(data[i].access_valid_to);
        accessEntry.valid_to = validTo.getDisplayValue();
    } catch (ex) {
        logger.error(" Reading Valid To : Exception :: " + e + " \nStack\n " + e.stack);
       }
    accessArray.push(accessEntry);
    }
    outputs.response = accessArray;

})(inputs, outputs);