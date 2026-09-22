api.controller = function($scope, $sce) {
    var c = this;
    // Load badge templates and initialize variables
    $scope.badgeTemplates = $scope.data.badgeTemplates;
    $scope.isFront = true; // Default view is front side
    $scope.selectedTemplate = $scope.badgeTemplates[0]; // Default selected template
    var newTemplate;

    function replacePlaceholders(template, badgedata) {
        var clonedTemplate = JSON.parse(JSON.stringify(template));
        var clonedBadgedata = JSON.parse(JSON.stringify(badgedata));

        return c.server.get({
            actionType: "replacePlaceholder",
            template_data: {
                front: clonedTemplate.front,
                back: clonedTemplate.back,
            },
            visit_data: clonedBadgedata,
        }).then(function(response) {
            if (response.data.result) {
                return {
                    front: response.data.result.front,
                    back: response.data.result.back,
                    name: clonedTemplate.name,
                };
            }
        }).catch(function(error) {
            console.error("Error replacing placeholders:", error);
            return clonedTemplate; // Fallback to original in case of error
        });
    }

    $scope.updateTemplate = function(passedTemplate) {
        var templateHtml = $scope.isFront ? passedTemplate.front : passedTemplate.back;
        $scope.trustedTemplate = $sce.trustAsHtml(templateHtml);
    };

    $scope.storeSelectedTemplate = function() {
        replacePlaceholders($scope.selectedTemplate, $scope.data.visitDataArr[0])
            .then(function(updatedTemplate) {
                newTemplate = updatedTemplate;
                localStorage.setItem("selectedTemplatelocal", JSON.stringify(updatedTemplate));
                $scope.isFront = true;
                $scope.updateTemplate(updatedTemplate);
            });
    };

    $scope.switchBadgeSide = function() {
        $scope.isFront = !$scope.isFront;
        $scope.updateTemplate(newTemplate);
    };

    $scope.printBadges = async function() {
        try {
            var badgeDataArray = $scope.data.visitDataArr;
            var storedTemplate = localStorage.getItem("selectedTemplatelocal");
            var badgeTemplate = storedTemplate ? JSON.parse(storedTemplate) : $scope.selectedTemplate;

            // Open print window
            var printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Print Badges</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                            }
                            .page-break {
                                page-break-before: always;
                            }
                        </style>
                    </head>
                    <body onload="setTimeout(() => { window.print(); window.close(); }, 500)">
            `);

            // Process each badge one-by-one
            for (let index = 0; index < badgeDataArray.length; index++) {
                try {
                    const badgedata = badgeDataArray[index];
                    let localBadgeTemplate = JSON.parse(JSON.stringify($scope.selectedTemplate));
                    let localBadgeData = JSON.parse(JSON.stringify(badgedata));

                    // Replace placeholders
                    const updatedTemplate = await replacePlaceholders(localBadgeTemplate, localBadgeData);

                    // Render front and back (if available)
                    let badgeHtml = '<div class="badge">' + updatedTemplate.front + '</div>';
                    if (updatedTemplate.back) {
                        badgeHtml += '<div class="page-break"></div>';
                        badgeHtml += '<div class="badge">' + updatedTemplate.back + '</div>';
                    }

                    // Add page break if not last badge
                    if (index < badgeDataArray.length - 1) {
                        badgeHtml += '<div class="page-break"></div>';
                    }

                    printWindow.document.write(badgeHtml);

                } catch (error) {
                    console.error(`Error processing badge at index ${index}:`, error);
                    continue; // Skip to next badge
                }
            }

            // Finalize the print page
            printWindow.document.write('</body></html>');
            printWindow.document.close();

        } catch (error) {
            console.error("Error in printBadges function:", error);
            if (printWindow) {
                printWindow.close(); // Ensure window is closed if something fails
            }
        }
    };

    replacePlaceholders($scope.selectedTemplate, $scope.data.visitDataArr[0])
        .then(function(updatedTemplate) {
            localStorage.setItem("selectedTemplatelocal", JSON.stringify(updatedTemplate));
            $scope.selectedTemplate = $scope.badgeTemplates[0]; // Default again, to be safe
            newTemplate = updatedTemplate;
            $scope.updateTemplate(newTemplate);
        });
};