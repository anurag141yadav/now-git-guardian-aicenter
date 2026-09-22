function visitListController($scope, $rootScope, $timeout) {
    var c = this;
    $scope.hasMin = false;
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var defaultDate = year + '-' + month + '-' + day;
    $scope.datePicker = defaultDate;

    $timeout(function() {
        $rootScope.$emit('visit-date-filter', defaultDate);
        localStorage.setItem('visit-date-filter', defaultDate);
    }, 0);

    $scope.customDate = function() {
        var fullDate = convertToYYYYMMDD($scope.datePicker, $scope.data.systemDateFormat);

        $rootScope.$emit('visit-date-filter', fullDate);
        localStorage.setItem('visit-date-filter', fullDate);
    };

    function convertToYYYYMMDD(dateStr, inputFormat) {
        if (!dateStr || !inputFormat) return '';

        // Replace / with - to normalize separators
        var cleanDate = dateStr.replace(/\//g, '-');
        var cleanFormat = inputFormat.replace(/\//g, '-');

        // Map format positions
        var formatParts = cleanFormat.split('-');
        var dateParts = cleanDate.split('-');

        var day, month, year;

        for (var i = 0; i < formatParts.length; i++) {
            switch (formatParts[i]) {
                case 'dd':
                    day = dateParts[i];
                    break;
                case 'MM':
                    month = dateParts[i];
                    break;
                case 'yyyy':
                    year = dateParts[i];
                    break;
            }
        }

        // Zero-pad if needed
        day = ('0' + parseInt(day, 10)).slice(-2);
        month = ('0' + parseInt(month, 10)).slice(-2);

        return year + '-' + month + '-' + day;
    }
    //$scope.customDate();
    $rootScope.$on('visitor-location', function(event, data) {
        $scope.locationTZ = data.timeZone;
        if ($scope.locationTZ != undefined || $scope.locationTZ != "") {
            var momentTime = moment().tz($scope.locationTZ);
            var defaultDate1 = momentTime.format("YYYY-MM-DD");
            $scope.datePicker = defaultDate1;
            $rootScope.$emit('visit-date-filter', $scope.datePicker);
        }
    });
}