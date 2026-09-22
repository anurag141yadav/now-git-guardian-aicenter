(function() {
    data.requests = [];
    var grRequest = new GlideRecordSecure('x_aleen_snguardian_request');
    grRequest.addQuery("request_type.name", "New Badge Request");
    grRequest.addQuery("state", "IN", [1, 2]);
    grRequest.addQuery("stage", "=", "BO");
    grRequest.addQuery("status.code", "!=", "PROVISION-FAILED");

    // Add join to identity_location table and filter by current user
    var identityLocationJoin = grRequest.addJoinQuery('x_aleen_snguardian_identity_location', 'request_for', 'identity');
    identityLocationJoin.addCondition('location', 'IN', getLocationsUserCanAccess());

    grRequest.orderByDesc('sys_created_on');
    grRequest.query();
    while (grRequest.next()) {
        data.requests.push({
            id: grRequest.getUniqueValue(),
            name: grRequest.request_for.first_name + " " + grRequest.request_for.last_name,
            requestNumber: grRequest.getValue('number') || '',
            status: grRequest.getDisplayValue("status"),
            created: grRequest.getDisplayValue("sys_created_on"),
            stage: grRequest.getDisplayValue("stage"),
            //location:grRequest.location.name,
            selected: false // Default to not selected
        });
    }

    function getLocationsUserCanAccess() {
        var locations = [];
        var grBadgeOffice = new GlideRecordSecure('x_aleen_snguardian_badge_office');
        grBadgeOffice.addQuery('officers', gs.getUserID());
        grBadgeOffice.query();
        while (grBadgeOffice.next()) {
            var badgeOfficerLocations = grBadgeOffice.locations.toString();
            if (badgeOfficerLocations.indexOf(',') !== -1) {
                // If multiple locations, split into array and add to userLocations
                var locArray = badgeOfficerLocations.split(',');
                //locations = locations.concat(locArray); // Merge arrays
                for (var i = 0; i < locArray.length; i++) {
                    locations.push(locArray[i]);
                }
            } else {
                // If single location, push directly
                locations.push(badgeOfficerLocations);
            }
        }
        return locations.toString();
    }

    if (input && input.processRequests == true) {
        var requestHelper = new RequestHelper();
        requestHelper.populateAndProcessRequest(input.badgeData);
    }

})();