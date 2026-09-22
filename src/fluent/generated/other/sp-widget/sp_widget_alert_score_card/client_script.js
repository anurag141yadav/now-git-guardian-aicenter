api.controller = function($scope, $rootScope, spUtil) {
    var c = this;
    $scope.data = c.data;
    //$scope.data.scoreData = {};
    $rootScope.$on('visitor-score-refresh', function(event, data) {
        if (data == 'YES') {
            //spUtil.update($scope);
            $scope.refreshDataFromServer();
        }
    });
    $rootScope.$on('visitor-location-data', function(event, data) {
        $scope.server.get({
            location_id: data,
            action: "getAllLocations"
        }).then(function(response) {
            $scope.global_location_filter = "";
            $scope.global_location_filter = response.data.alllocations;
            $scope.prepareExternalFilterQueryAndSearch();
        });
    });
    $rootScope.$on('visit-date-filter', function(event, data) {
        $scope.global_date_filter = data;
        $scope.prepareExternalFilterQueryAndSearch();
    });
    $scope.prepareExternalFilterQueryAndSearch = function() {
        if ($scope.global_date_filter != null && $scope.global_date_filter != undefined && $scope.global_date_filter != "") {
            var dateRegex = /start_dateON\d{4}-\d{2}-\d{2}@javascript:gs\.dateGenerate\('\d{4}-\d{2}-\d{2}','start'\)@javascript:gs\.dateGenerate\('\d{4}-\d{2}-\d{2}','end'\)/;
            if (dateRegex.test($scope.data.filter)) {
                $scope.data.filter = $scope.data.filter.replace(dateRegex, "start_dateON" + $scope.global_date_filter + "@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','start')@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','end')");
            } else {
                if ($scope.data.filter != undefined && $scope.data.filter.length > 1) {
                    $scope.data.filter += '^';
                } else {
                    $scope.data.filter = "";
                }
                var newDateQueryToAppend = "start_dateON" + $scope.global_date_filter + "@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','start')@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','end')";
                $scope.data.filter += newDateQueryToAppend;
            }

        }
        if ($scope.global_location_filter != null && $scope.global_location_filter != undefined && $scope.global_location_filter != "") {
            var query = $scope.data.filter;
            var newLocationIds = $scope.global_location_filter;
            query = query.replace(/locationIN[^\\^]*/, "");
            query = query.replace(/(\^)+$/, '').replace(/^\^+/, '');
            query = query.replace(/\^{2,}/g, '^');
            query += (query ? "^" : "") + "locationIN" + newLocationIds;
            $scope.data.filter = query;
        }
        $scope.refreshDataFromServer();
    };

    $scope.refreshDataFromServer = function() {
        $scope.data.scoreData = {};
        $scope.server.get({
            filter: $scope.data.filter,
            action: "reload"
        }).then(function(response) {
            $scope.data.scoreData = response.data.scoreData;
        });
    };
};