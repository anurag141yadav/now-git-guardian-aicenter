api.controller = function($location, $scope, $window, $log) {
    var c = this;

    var code        = $location.search().code;
    var redirectUrl = c.data.redirectUrl;

    if (!code) {
        $window.location.href = redirectUrl;
        return;
    }

    sessionStorage.setItem('hid-google-auth-code', code);
    $window.location.href = redirectUrl;
};
