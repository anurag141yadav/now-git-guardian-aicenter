(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Process Change Access Request Data Action:: ");
    var accessArray = [];
    var rolesObject = inputs.record.variables.roles;
    var data = JSON.parse(rolesObject);
    var grLocationAccessLevel = new GlideRecordSecure('x_aleen_snguardian_access_level');
    for (var i = 0; i < data.length; i++) {
    var accessEntry = {};
    grLocationAccessLevel.initialize();
    grLocationAccessLevel.get(data[i].role);
    accessEntry.access = grLocationAccessLevel.getUniqueValue().toString();
    accessEntry.record_id = "";
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