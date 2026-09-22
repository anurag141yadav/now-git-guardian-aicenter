api.controller = function($scope, $rootScope) {
    var c = this;
    c.qrData = '';
    c.errorMessage = '';
    c.showQR = false;
    c.generateQRCode = function() {
        c.showQR = false;
        c.errorMessage = '';
        if (!c.qrData) {
            c.errorMessage = 'Please enter data to generate a QR code.';
            return;
        }
        var expirationTime = new Date(Date.now() + 10080 * 60 * 1000);
        var qrPayload = {};
        qrPayload.data = c.qrData;
        qrPayload.expiresAt = expirationTime.toISOString();
        try {
            c.showQR = true;
            bwipjs.toCanvas('qr-canvas', {
                bcid: 'qrcode',
                //text: c.qrData,       
                text: JSON.stringify(qrPayload),
                scale: 3,
                height: 20,
                width: 20,
                padding: 2,
                margin: 2,
                color: 'black',
                background: 'white',
            });

        } catch (e) {
            c.showQR = false;
            c.errorMessage = 'Failed to generate QR code. Please try again.';
        }

    };


    c.onFieldChange = function(event, data) {
        var form = $scope.page.g_form;
        var fieldName = "visit_visitor_single_visitor_id";
        if (event && data && (data.field.name !== fieldName && data.field.name !== "visit_visitor_single_email" && data.field.name !== "visit_visitor_group_name")) { // check if required MRVS field is changed, if not return
            return;
        } else if (event && data && data.field.name == "visit_visitor_group_name") {
            c.qrData = form.getValue('visit_visitor_group_name');
            c.generateQRCode();
            var groupCanvas = document.getElementById('qr-canvas');
            var groupGeneratedQR = groupCanvas.toDataURL('image/png');
            form.setValue('qr_code_data_generated', groupGeneratedQR);
        } else {
            var visitor = form.getValue(fieldName);
            if (visitor == '' || visitor == 'NEW' || visitor == 'CREATE') {
                var newVisitorEmail = form.getValue('visit_visitor_single_email');
                c.qrData = newVisitorEmail;
                c.generateQRCode();
                var canvas = document.getElementById('qr-canvas');
                var generatedQR = canvas.toDataURL('image/png');
                form.setValue('qr_code_data_generated', generatedQR);
            } else {
                c.server.get({
                    action: "fetchVisitorEmail",
                    sys_id: visitor
                }).then(function(response) {
                    if (response.data && response.data.email && response.data.email != "") {
                        c.qrData = response.data.email;
                        c.generateQRCode();
                        var canvas = document.getElementById('qr-canvas');
                        var generatedQR = canvas.toDataURL('image/png');
                        form.setValue('qr_code_data_generated', generatedQR);
                    }
                });
            }
        }
    };

    $rootScope.$on('field.change', c.onFieldChange); //event emitted by form component for every field change
    c.onFieldChange();


};