function controller($scope, $rootScope) {
    var c = this;
    $scope.dataLocal = c.data;
    c.suggestions = [];
    $scope.showNotFound = false;
    $scope.showNoLoobyFound = false;
    c.showDropdown = true;
    c.showDropdownFunction = function() {
        c.showDropdown = true;
    };
    c.hideDropdownFunction = function() {
        c.showDropdown = false;
    };
    c.getAutocompleteResults = function(query, autoSelect) {
        $scope.showNotFound = false;
        if (c.disableServerCall) {
            c.disableServerCall = false;
            return;
        }
        if (!query) {
            query = '';
        }
        var limit = $scope.dataLocal.queryLimit;
        var table = $scope.dataLocal.tableName;
        var encodedQuery = $scope.dataLocal.filterQuery;
        var userLevelFilter = $scope.dataLocal.userFilter;
        c.server.get({
            action: 'getLocations',
            table: table,
            limit: limit,
            searchTerm: query,
            userLevelFilter: userLevelFilter,
            encodedQuery: encodedQuery
        }).then(function(response) {
            if (query == '') {
                if (response.data.results && response.data.results.length > 0) {
                    c.suggestions = response.data.results;
                    if (autoSelect) {
                        c.selectItem(response.data.results[0]);
                    }
                    $scope.showNoLoobyFound = false;
                } else {
                    $scope.showNoLoobyFound = true;
                }
            } else {
                if (response.data.results && response.data.results.length > 0) {
                    c.suggestions = response.data.results;
                    $scope.showNotFound = false;
                } else {
                    $scope.showNotFound = true;
                }
            }
        });
    };
    c.selectItem = function(item) {
        c.query = item.name;
        c.suggestions = [];
        c.disableServerCall = true;
        $scope.showNotFound = false;
        $rootScope.visitorLocationID = item.sys_id;
        $rootScope.$emit('visitor-location-data', item.sys_id);
        $rootScope.$emit('visitor-location-timezone', item.timeZone);
        localStorage.setItem('visitor-location', JSON.stringify(item));
        $rootScope.$emit('visitor-location', item);
    };
    c.getAutocompleteResults("", true);
    c.hideDropdownFunction();

}