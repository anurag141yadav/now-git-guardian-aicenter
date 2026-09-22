api.controller = function($scope, $sanitize, $sce, $timeout, $rootScope, spUtil) {
    var c = this;
    c.isAgreed = false;
    c.signed = false;
    $scope.sanitizedHtml = $sce.trustAsHtml('');
    var gForm = $scope.page.g_form;
    c.hasChanged = false; // var to watch nda checkbox changes 
    $scope.ndaFound = false;
    $scope.ndaSigned = false;
    $scope.ndaExpired = false;

    function checkUIPage() {
        if (gForm != undefined) {
            $scope.locationId = gForm.getValue('visit_location');
            c.data.isPortal = false;
            if ($scope.locationId && $scope.locationId != undefined && $scope.locationId != '') {
                c.server.get({
                    action: 'fetch_nda',
                    locationId: $scope.locationId
                }).then(function(response) {
                    if (response.data.success) {
                        $scope.sanitizedHtml = $sce.trustAsHtml(response.data.ndaData.template);
                        $scope.ndaId = response.data.ndaData.sys_id;
                        $scope.ndaFound = true;
                    } else {
                        $scope.ndaFound = false;
                    }
                });
            }
        }
    }
    if (gForm != undefined) {
        $timeout(checkUIPage, 100);
        gForm.$private.events.on('change', function(fieldName) {
            if (fieldName === 'visit_location') {
                $timeout(checkUIPage, 100);
            }
        });
    }

    $rootScope.$on('alert-sign-captured', function(event, data) {
        if (data == 'YES') {
            c.signed = true;
            c.hasChanged = true;
            if (gForm != undefined) {
                gForm.setValue('visitor_signature', data);
                gForm.setValue('visit_nda_id', $scope.ndaId);

            }
        } else {
            c.isAgreed = false;
            c.signed = false;
            if (gForm != undefined) {
                gForm.clearValue('visitor_signature');
                gForm.clearValue('visit_nda_id');
            }
        }
    });

    $scope.$watch(function() {
        return {
            isAgreed: c.isAgreed,
            hasChanged: c.hasChanged
        };
    }, function(newValues) {
        if (newValues.hasChanged) { // Only execute when hasChanged is true
            if (newValues.isAgreed) {
                gForm.setValue('terms_and_conditions_agreed', 'Yes');
            } else {
                gForm.setValue('terms_and_conditions_agreed', 'No');
            }
        }
    }, true);

    if (c.data.ndaData && c.data.ndaData.template) {
        $scope.sanitizedHtml = $sce.trustAsHtml(c.data.ndaData.template);
        $scope.ndaFound = true;
        $scope.ndaSigned = c.data.visitInfo.is_nda_signed == "0" ? false : true;
        $scope.ndaExpired = c.data.nda_Expired;
    }

    c.downloadNDA = function() {
        var pdfContent = c.data.ndaData.template;
        var now = new Date();
        // Options for html2pdf
        if (pdfContent) {
            var options = {
                margin: 10,
                filename: 'nda_' + now.toJSON() + '.pdf', //nda_datetime
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2,
                    logging: true,
                    dpi: 192,
                    letterRendering: true
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                }
            };

            // Clear previous messages
            c.data.message = '';
            c.data.messageType = '';

            // Generate PDF from the 'pdf-content' div
            html2pdf().from(pdfContent).set(options).save()
                .then(function() {
                })
                .catch(function(error) {
                    c.data.message = 'Error generating PDF: ' + (error || 'Unknown error.');
                    c.data.messageType = 'alert-danger';
                    // Update the scope to show the message
                    spUtil.addTrivialMessage(c.data.message);
                });
        } else {
            c.data.message = 'Error generating PDF: No pdf content';
            c.data.messageType = 'alert-danger';
            // Update the scope to show the message
            spUtil.addTrivialMessage(c.data.message);
        }
    };

    c.emailNDA = function() {

        var emailBody = c.data.ndaData.template;

        if (!emailBody) {
            spUtil.addErrorMessage('Please fill in the subject and body fields.');
            return;
        }

        // Clear previous messages
        c.data.message = '';
        c.data.messageType = '';

        // Send data to the server
        c.server.get({
            action: 'sendEmail',
            subject: c.data.visitInfo.number + ' Non-Disclosure Agreement (NDA).',
            body: c.data.ndaData.sys_id,
            visit: c.data.visitInfo.sys_id,
            location: c.data.visitInfo['location.sys_id']
        }).then(function(response) {
            if (response.data.success) {
                c.data.message = 'Email sent successfully to your registered email address!';
                c.data.messageType = 'alert-success';
                // Clear the form fields after successful send
                c.data.subject = '';
                c.data.body = '';
            } else {
                c.data.message = 'Error sending email: ' + (response.data.error || 'Unknown error.');
                c.data.messageType = 'alert-danger';
            }
            // Update the scope to show the message
            spUtil.addTrivialMessage(c.data.message);
        });
    };

    c.acceptNDA = function() {
        var is_agreed = c.isAgreed;

        // Clear previous messages
        c.data.message = '';
        c.data.messageType = '';

        if (!is_agreed) {
            spUtil.addErrorMessage('Please agree to terms and conditions');
            return false;
        }
        // Send data to the server
        c.server.get({
            action: 'is_nda_agreed',
            is_agreed: is_agreed,
            visit_sysId: c.data.visitInfo.sys_id,
            visit_nda: c.data.ndaData.sys_id
        }).then(function(response) {
            if (response.data.success) {
                c.data.message = 'NDA updated successfully to the Visit';
                c.data.messageType = 'alert-success';
                $scope.Signed = true;
            } else {
                c.data.message = 'Error updating NDA: ' + (response.data.error || 'Unknown error.');
                c.data.messageType = 'alert-danger';
            }
            // Update the scope to show the message
            spUtil.addTrivialMessage(c.data.message);
        });
        return true;
    };

};