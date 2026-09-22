api.controller = function($scope, $rootScope) {

    var c = this;
    c.onFieldChange = function(event, data) {
        var form = $scope.page.g_form;
        var fieldName = "new_access_levels";
        var total = 0; // TODO: delete this, just an example
        var fieldName2 = "existing_access_levels";
        if (event && data) {
            if (data.field.name != fieldName && data.field.name != fieldName2) {
                return;
            }
        }
        try {
            form.setValue("access_levels_count", -1);
            if (data.field.name == fieldName2) {
                var existing_rows = JSON.parse(form.getValue(fieldName2));
                if (existing_rows) {
                    for (var index in existing_rows) {
                        if (existing_rows[index].existing_action != localStorage.getItem("NONE")) {
                            form.setValue("is_valid_request", "true");
                            break;
                        }
                        form.setValue("is_valid_request", "false");
                    }
                }
            } else {

                var rows = JSON.parse(form.getValue(fieldName));
                rows.map(function(row) {
                    total += row.qty; // TODO: delete this, just an example
                });
                form.setValue("access_levels_count", rows.length);
            }
        } catch (e) {
            form.setValue("access_levels_count", 0);
        }
    };

    $rootScope.$on('field.change', c.onFieldChange);
    c.onFieldChange();

};