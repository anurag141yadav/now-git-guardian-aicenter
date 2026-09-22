api.controller = function($scope, spModal) {
    var c = this;
    // Initialize shared object if it doesn't exist
    $scope.shared = $scope.shared || {};
    // Bind data from the server script
    c.requests = $scope.data.requests || []; // Populate the requests array with data from the server
    // Pagination variables
    c.currentPage = 1;
    c.pageSize = 10;

    c.getTotalPages = function() {
        var totalPage = Math.ceil(c.requests.length / c.pageSize);
        return Math.max(totalPage, 1);
    };
    // Get the data for the current page
    c.getPaginatedRequests = function() {
        var start = (c.currentPage - 1) * c.pageSize;
        var end = start + c.pageSize;
        return c.requests.slice(start, end);
    };

    c.nextPage = function() {
        if (c.currentPage < c.getTotalPages()) {
            c.currentPage++;
        }
    };

    c.previousPage = function() {
        if (c.currentPage > 1) {
            c.currentPage--;
        }
    };

    c.selectedCount = 0;
    c.showBadgeNumberColumn = false;
    c.statusMessage = '';
    c.statusType = '';
    c.canSave = false;
    // Update the count of selected rows // not required now - check once
    c.updateSelectedCount = function() {
        c.selectedCount = c.requests.filter(function(request) {
            return request.selected;
        }).length;
    };

    // Toggle the selection of all rows
    c.toggleSelectAll = function() {
        var selectAll = c.selectAll;
        c.requests.forEach(function(request) {
            request.selected = selectAll;
        });
        c.updateSelectedCount();
    };
    // Generate badges for printing
    c.generateBadgesForPrinting = function() {
        var selectedRequests = c.requests.filter(function(request) {
            return request.selected;
        });
        c.openPrintBadgeModal(selectedRequests);
        // Enable showBadgeNumberColumn only for selected rows
        c.requests.forEach(function(request) {
            request.showBadgeNumber = request.selected; // Enable badge number input only for selected rows
        });
        c.showBadgeNumberColumn = true;
    };
    // Save badge numbers for selected requests
    c.saveBadgeNumbers = function() {
        var selectedRequests = c.requests.filter(function(request) {
            return request.selected;
        });
        if (selectedRequests.length === 0) {
            c.statusMessage = 'No requests selected to save.';
            c.statusType = 'error';
            return;
        }
        // Prepare data to send to the server
        var badgeData = selectedRequests.map(function(request) {
            return {
                sys_id: request.id, // Record ID
                badgeNumber: request.badgeNumber // Badge number entered by the user
            };
        });
        // Call the server to save the badge numbers
        c.processRequest(badgeData);
    };

    c.processRequest = function(badgeData) {
        c.server.get({
            processRequests: true,
            badgeData: badgeData
        }).then(function(response) {
            c.statusMessage = "Requests processed successfully!";
            c.statusType = 'success';
            // Refresh the page after 2 seconds (to show success message)
            setTimeout(function() {
                window.location.reload(true); // Hard refresh
                // OR for ServiceNow portal:
                // $window.location.reload();
            }, 2000);
        }).catch(function(error) {
            c.statusMessage = "Error processing requests: " + error.message;
            c.statusType = 'error';
        });
    };

    // Function to open the "alert_print_badge" widget in a modal
    c.openPrintBadgeModal = function(selectedRequests) {
        // 1. Verify EXACT widget ID matches target
        var WIDGET_ID = 'alert_print_badge'; // Must match exactly

        // 2. Prepare data with both formats
        var requestNumbers = selectedRequests.map(function(item) {
            return item.requestNumber;
        });
        var widgetInput = {
            // Multiple formats for compatibility
            requestNumbers: requestNumbers,
            timestamp: new Date().getTime() // For debugging
        };

        // 4. Open with multiple fallbacks
        try {
            // First try spModal
            spModal.open({
                title: 'Print Badges',
                widget: WIDGET_ID,
                widgetInput: widgetInput
                //size: 'lg',
                //backdrop: 'static' // Prevents closing on click outside
            }).then(function() {
                //Modal opened successfully
                return;
            });
        } catch (e) {
            console.error('spModal error:', e);
            fallbackToUrl(requestNumbers);
        }

    };

    // URL fallback method
    function fallbackToUrl(data) {
        var url = '/sp?id=alert_print_badge_page&data=' + encodeURIComponent(JSON.stringify(data));
        window.open(url, '_blank', 'width=800,height=400');
    }

    c.selectedRequests = [];
    c.isModalOpen = false;

    c.openModal = function() {
        c.updateSelectedRequests();
        c.isModalOpen = true;
    };

    c.closeModal = function() {
        c.isModalOpen = false;
    };
    c.updateSelectedRequests = function() {
        c.selectedRequests = [];
        for (var i = 0; i < c.requests.length; i++) {
            if (c.requests[i].selected) {
                c.selectedRequests.push(c.requests[i]);
            }
        }
    };
};