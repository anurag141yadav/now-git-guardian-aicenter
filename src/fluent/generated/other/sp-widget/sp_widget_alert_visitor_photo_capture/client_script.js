api.controller = function($scope, $rootScope, $timeout, spUtil) {
    var c = this;
    c.data = $scope.data;
    $scope.consentText = '';
    $scope.deletionNote = '';
    $scope.showDeletionCheckbox = false;
    // Listen to the event from child widget
    var gForm = $scope.page.g_form;
    var visitLocation = gForm ? gForm.getValue('visit_location') : '';

    $rootScope.$on('alert-cam-photo', function(event, data) {

        if (gForm) {
            gForm.setValue('visitor_image_captured', data);
        } else {
            console.warn("gForm is not available");
        }
    });

    c.shouldUpdatePhoto = false;
    gForm.setValue('update_exisiting_visitor_photo', "No");
    // Function to handle checkbox state change
    c.setPhotoUpdationValue = function() {
        if (gForm) {
            var value = c.shouldUpdatePhoto ? "Yes" : "No";
            gForm.setValue('update_exisiting_visitor_photo', value);
        } else {
            console.warn("gForm is not available");
        }
    };

    c.onFieldChange = function(event, data) {
        var form = $scope.page.g_form;
        var fieldName = "visit_location"; //visit_location
        var countFieldName = "visitors_count"; //create one variable to get row count 

        if (event && data && data.field.name !== fieldName) { // check if required MRVS field is changed, if not return
            return;
        }

        try {
            var fieldValue = form.getValue(fieldName);

            // Send data to the server
            c.server.get({
                action: 'getConsentText',
                location: fieldValue
            }).then(function(response) {
                if (response.data.success) {
                    // Clear the form fields after successful send
                    $scope.consentText = response.data.consentText
                    $scope.showDeletionCheckbox = response.data.showDeletionCheckbox
                    $scope.deletionNote = response.data.deletionNote
                } else {
                    console.warn('Error fetching consent Text: ' + (response.data.error || 'Unknown error.'));
                }
            });
        } catch (e) {
            console.warn('Error fetching consent Text: ' + (e.message || 'Unknown error.'));
        }
    };

    // Function to handle checkbox state change
    c.setPhotoDeletionValue = function() {
        if (gForm) {
            var value = !c.shouldDeletePhoto ? "Yes" : "No";
            gForm.setValue('delete_visitor_photo', value);
        } else {
            console.warn("gForm is not available");
        }
    };

    $rootScope.$on('field.change', c.onFieldChange); //event emitted by form component for every field change

};