function visitorHeaderController($rootScope, $scope, $window, $uibModal, cabrillo, $timeout, $location) {
    var c = this;
    c.INITIAL_TIMEOUT = 500;
    $scope.userID = $scope.user.sys_id;
    $scope.expanded = false;
    $scope.loadingIndicator = $rootScope.loadingIndicator;
    $scope.showMobileMenuOnDesktop = false;
    var currentPath = $location.path();
    $scope.portalUrl = currentPath;
    c.MOBILE_DEVICE_SCREEN_WIDTH = 767;
    $scope.mobileDevice = $scope.mobileDevice || c.data.isMobile || ($window.innerWidth <= c.MOBILE_DEVICE_SCREEN_WIDTH);
    if (cabrillo.isNative())
        $scope.isViewNative = true;
    $scope.reloadHeader = function(actionName) {
        c.server.update();
    };
    $scope.openLogin = function() {
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'modalLogin',
            scope: $scope
        });
    };
    $rootScope.$on('sp.avatar_changed', function() {
        $scope.userID = '';
        $timeout(function() {
            $scope.userID = $scope.user.sys_id;
        });
    });
    $timeout(function() {
        resizeObserverForTopNav();
    }, c.INITIAL_TIMEOUT);

    function resizeObserverForTopNav() {
        var headerSearch = document.querySelector(".header-search");
        var navbarBrand = document.querySelector(".navbar-brand-logo > img");
        var navbarRight = document.querySelector(".navbar-right > div");
        //fix for firefox/chrome on cmd + text zoom increase
        if (window.ResizeObserver) {
            var resizeObserver = new ResizeObserver(function(entries) {
               
            });
            if (headerSearch)
                resizeObserver.observe(headerSearch);

            if (navbarBrand)
                resizeObserver.observe(navbarBrand);

            if (navbarRight)
                resizeObserver.observe(navbarRight);
        }
    }
    $scope.collapse = function() {
        $rootScope.$emit('sp-navbar-collapse');
    };
    $scope.isHomepage = function() {
        if (!$scope.page.id)
            return true;
        if ($scope.page.id == $scope.portal.homepage_dv)
            return true;
        return false;
    };
}