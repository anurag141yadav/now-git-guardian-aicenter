api.controller = function($scope, $rootScope) {

    var c = this;
    c.onFieldChange = function(event, data) {

        var form = $scope.page.g_form;
        //var main_form = $rootScope.page.g_form;

        var fieldName = "access_levels";
        var total = 0; // TODO: delete this, just an example

        if (event && data) {
            if (data.field.name != fieldName) {
                return;
            }
        }

        try {
            var rows = JSON.parse(form.getValue(fieldName));

            rows.map(function(row) {
                total += row.qty; // TODO: delete this, just an example
            });

            form.setValue("access_levels_count", rows.length);
        } catch (e) {
            form.setValue("access_levels_count", 0);
        }
    };

    $rootScope.$on('field.change', c.onFieldChange);
    c.onFieldChange();

};