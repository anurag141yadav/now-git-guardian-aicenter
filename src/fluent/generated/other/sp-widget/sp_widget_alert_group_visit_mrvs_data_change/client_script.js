api.controller = function($scope, $rootScope) {
    var c = this;

    c.onFieldChange = function(event, data) {
        var form = $scope.page.g_form;
        var fieldName = "visit_visitor_mrvs";
        var countFieldName = "visitors_count"; //create one variable to get row count 

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
            if (form.getValue(countFieldName) == rowCount) {
                c.server.get({
                    action: "checkWatchlistByData",
                    mrvs: form.getValue(fieldName),
                }).then(function(resp) {
                    try {
                        var responseObj = JSON.parse(resp.data.list);
                        if (responseObj.length) {
                            watchlisted = 'true';
                            var message = "Visitor(s) found in watchlist: " + responseObj;
                            form.hideFieldMsg('visit_visitor_mrvs', true);
                            form.showFieldMsg('visit_visitor_mrvs', message);
                            form.setValue('found_in_watchlist', "Yes");

                        } else {
                            form.hideFieldMsg('visit_visitor_mrvs', true);
                            //form.clearMessages();
                        }
                    } catch (e) {
                        console.error(e);
                    }

                });

            }
            form.setValue(countFieldName, rowCount); //set value of count variable 
        } catch (e) {
            form.setValue(countFieldName, 0);
        }
    };

    $rootScope.$on('field.change', c.onFieldChange); //event emitted by form component for every field change
    c.onFieldChange();
};