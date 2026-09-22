api.controller = function($scope, $sce) {
    var c = this;
    var visitData = $scope.data.visitData;
    $scope.badgeTemplates = $scope.data.badgeTemplates;
    $scope.isFront = true;
    $scope.selectedTemplate = $scope.badgeTemplates[0]; // Default selection
    var newTemplate;
    $scope.asset = $scope.data.asset;

    function generateQRCode(asset) {
        try {

            // Payload to encode in QR

            var qrPayload = {
                id: visitData["visitor.sys_id"],
                name: asset,
                status: 'ACTIVE'
            };
            // Create a hidden canvas
            var canvas = document.createElement('canvas');
            // Generate QR using bwip-js
            bwipjs.toCanvas(canvas, {
                bcid: 'qrcode', // barcode type
                text: JSON.stringify(qrPayload),
                scale: 3,
                height: 20,
                width: 20,
                padding: 2,
                margin: 2,
                color: 'black',
                background: 'white',
            });

            // Get base64 QR data URL
            var dataUrl = canvas.toDataURL('image/png');
            // Store QR in visitData
            visitData["asset.qr"] = dataUrl;

        } catch (e) {
            visitData["asset.qr"] = "";
        }
    }
    generateQRCode($scope.asset);

    // Function to replace placeholders using the server
    function replacePlaceholders(template) {
        return c.server.get({
            actionType: "replacePlaceholder",
            template_data: {
                front: template.front,
                back: template.back,
            },
            visit_data: visitData,
        }).then(function(response) {
            if (response.data.result) {
                var updatedTemplate = response.data.result;
                return {
                    front: updatedTemplate.front,
                    back: updatedTemplate.back,
                    name: template.name,
                };
            }
            return template;
        }).
        catch(function(error) {
            return template; // Return original template in case of error
        });
    }

    // Function to update the displayed template
    $scope.updateTemplate = function(passedTemplate) {
        //var templateHtml =$scope.isFront ? $scope.selectedTemplate.front: $scope.selectedTemplate.back;
        var templateHtml = $scope.isFront ? passedTemplate.front : passedTemplate.back;
        $scope.trustedTemplate = $sce.trustAsHtml(templateHtml);
    };

    // Function to store and update the selected template
    $scope.storeSelectedTemplate = function() {
        var selectedName = $scope.selectedTemplate.name;
        replacePlaceholders($scope.selectedTemplate).then(function(updatedTemplate) {
            // Store updated template separately
            newTemplate = updatedTemplate;
            localStorage.setItem("selectedTemplatelocal", JSON.stringify(updatedTemplate));
            //$scope.selectedTemplate =updatedTemplate; //affecting selected vluein dropdown
            $scope.isFront = true;
            $scope.updateTemplate(updatedTemplate);
        });
    };

    // Function to switch between front and back
    $scope.switchBadgeSide = function() {
        $scope.isFront = !$scope.isFront;
        $scope.updateTemplate(newTemplate);
    };

    // Function to print the badge
    $scope.printBadge = function() {
        var storedTemplate = localStorage.getItem("selectedTemplatelocal");
        var badge_data = storedTemplate ? JSON.parse(storedTemplate) : $scope.selectedTemplate;

        var a = window.open("", "", "height=700, width=500");
        a.document.write("<html><head><style>");
        a.document.write(`@page {
  size: auto;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
}
header, footer {
  display: none !important;
}
.page-break {
  page-break-before: always;
}
`);
        a.document.write("</style></head><body onload='setTimeout(() => { window.print(); window.close(); }, 500)'>");

        // Print Front Side
        a.document.write("<div>" + badge_data.front + "</div>");
        a.document.write('<div class="page-break"></div>'); // Ensures the back side prints on a new page

        // Print Back Side
        a.document.write("<div>" + badge_data.back + "</div>");
        a.document.write("</body></html>");
        a.document.close();


    };

    // Initial replacement on load
    replacePlaceholders($scope.selectedTemplate).then(function(updatedTemplate) {
        localStorage.setItem("selectedTemplatelocal", JSON.stringify(updatedTemplate));
        $scope.selectedTemplate = $scope.badgeTemplates[0];
        newTemplate = updatedTemplate;
        $scope.updateTemplate(newTemplate);
    });
};