api.controller = function($scope, $rootScope) {
    var c = this;

    c.onFieldChange = function(event, data) {
        var form = $scope.page.g_form;
        var fieldName = "identity_details";
        var countFieldName = "identities_count"; //create one variable to get row count 

        if (event && data && data.field.name !== fieldName) { // check if required MRVS field is changed, if not return
            return;
        }

        try {
            var fieldValue = form.getValue(fieldName);
            if (!fieldValue) {
                form.setValue(countFieldName, 0);
                return;
            }
						
            var rows = JSON.parse(fieldValue);
            var rowCount = rows.length;
            form.setValue(countFieldName, rowCount); //set value of count variable 
        } catch (e) {
            form.setValue(countFieldName, 0);
        }
    };

    $rootScope.$on('field.change', c.onFieldChange); //event emitted by form component for every field change
    c.onFieldChange();
};