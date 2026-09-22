function alertClockCOntroller($scope, $rootScope, $timeout) {
    var c = this;
    c.locationTZ = c.options.default_timezone;
    c.locationName = c.options.default_location_name;
    (function tick() {
        var localDateTime = moment();
        c.localDate = localDateTime.format(c.options.date_format || 'YYYY-MM-DD');
        c.localTime = localDateTime.format(c.options.time_format || 'HH:mm:ss');
        c.localTZ = moment.tz.guess();
        var locationDateTime = moment().tz(c.locationTZ);
        c.locationDate = locationDateTime.format(c.options.date_format);
        c.locationTime = locationDateTime.format(c.options.time_format);
        $timeout(tick, 1000);
    })();
    $rootScope.$on('visitor-location', function(event, data) {
        $scope.locationTZ = data.timeZone;
        $scope.locationName = data.name;
        if ($scope.locationTZ != undefined || $scope.locationTZ != "") {
            c.locationTZ = $scope.locationTZ;
        }
        if ($scope.locationName != undefined || $scope.locationName != "") {
            c.locationName = $scope.locationName;
        }
    });
}