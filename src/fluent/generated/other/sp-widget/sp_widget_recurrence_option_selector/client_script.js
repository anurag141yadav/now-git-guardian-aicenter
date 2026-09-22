api.controller = function ($scope, $timeout) {
    var c = this;
    $scope.days = c.data.days || [];

    $scope.repeatEvery = c.data.repeatEvery;
    $scope.intervals = c.data.intervals;
    $scope.repeatInterval = $scope.intervals[0].value;

    $scope.showVisitMessage = false;
    $scope.showDaySelection = false;
    $scope.showCustomRecurring = false;
    $scope.visitMessage = '';

    // Function to update the visit options based on the selected recurring type
    function updateVisitOptions() {
        var gForm = $scope.page.g_form;
        $scope.fetched_val = gForm.getValue('visit_recurring_type');

        $scope.showVisitMessage = false;
        $scope.showDaySelection = false;
        $scope.showCustomRecurring = false;
        $scope.visitMessage = '';

        if ($scope.fetched_val === "daily" || $scope.fetched_val === "DAILY") {
            $scope.showVisitMessage = true;
            $scope.visitMessage = "The visit is scheduled daily.";
            gForm.setValue('recurring_value', 'daily'); // Set to 'daily'
        } else if ($scope.fetched_val === "weekly" || $scope.fetched_val === "WEEKLY") {
            $scope.showDaySelection = true;
            $scope.visitMessage = "Please select the days of the week for the visit.";
            $scope.updateSelectedDays(); // Update the field based on selected days
        } else if ($scope.fetched_val === "custom" || $scope.fetched_val === "CUSTOM") {
            $scope.showCustomRecurring = true;
            $scope.visitMessage = "Please select the recurrence settings.";
            gForm.setValue('recurring_value', 'custom'); // Set to 'custom'
        }
    }


    $scope.toggleDay = function (day) {
        day.selected = !day.selected;
        $scope.updateSelectedDays(); 
    };

    // Function to update the recurrence value based on selected days
    $scope.updateSelectedDays = function () {
        var gForm = $scope.page.g_form;
        var selectedDays = $scope.getSelectedDays().map(function (day) {
            return day.value; 
        }).join(', ');
        if (selectedDays) {
            gForm.setValue('recurring_value', selectedDays);
        } else {
            gForm.clearValue('recurring_value');
        }
    };

    $scope.getSelectedDays = function () {
        return $scope.days.filter(function (day) {
            return day.selected;
        });
    };

    var gForm = $scope.page.g_form;
    gForm.$private.events.on('change', function (fieldName) {
        if (fieldName === 'visit_recurring_type') {
            $scope.$apply(updateVisitOptions);
        }
    });

    $timeout(updateVisitOptions, 100);
};
