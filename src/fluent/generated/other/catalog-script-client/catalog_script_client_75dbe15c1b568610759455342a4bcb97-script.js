function onSubmit() {
    try {
        if ((g_form.getValue("access_levels_count") == -1 || g_form.getValue("access_levels_count") == 0) && g_form.getValue("is_valid_request") == "false") {
            alert("Invalid Request :: Please add New Access Levels or Change exisiting Access Action to submit");
            return false;
        }
        var alertMessage;
        var prerequisites = g_form.getValue("prerequisites");
        if (prerequisites == null || prerequisites == undefined || prerequisites == "") {
            return true;
        }
        var existing;
        var required = JSON.parse(prerequisites);
        if (g_form.getValue("user_prerequisites")) {
            existing = JSON.parse(g_form.getValue("user_prerequisites"));
        } else {
            existing = {};
        }
        var missingPrerequisites = [];
        for (var i = 0; i < required.length; i++) {
            var found = false;
            for (var k = 0; k < existing.length; k++) {
                if (required[i].name == existing[k].training_name) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                missingPrerequisites.push(required[i].name);
            }
        }

        if (missingPrerequisites.length == 0) {
            return true;
        } else {
            alertMessage = "Required User Prerequisites are not complete.\n";
            alertMessage += "Missing Prerequisites:\n";
            alertMessage += missingPrerequisites.join("\n");
            alert(alertMessage);
            return false;
        }
    } catch (e) {
        alertMessage = "Required User Prerequisites are not complete.\n";
        alertMessage += "Missing Prerequisites:\n";
        alertMessage += required.join("\n");
        alert(alertMessage);
        return false;
    }
}