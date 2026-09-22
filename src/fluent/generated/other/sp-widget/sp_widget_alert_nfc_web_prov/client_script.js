api.controller = function($location, $scope, $rootScope) {
    var c = this;
    var platform = navigator.platform.toLowerCase();
    var userAgent = navigator.userAgent.toLowerCase();
    c.data.userAgent = userAgent;
    var isAndroid = userAgent.includes("android");
    c.platform = platform;
    c.userAgent = userAgent;
    var isIOS = /iphone|ipod|ipad/.test(platform) || /iphone|ipod|ipad/.test(userAgent);
    c.isMobile = isAndroid || isIOS;
    c.isAndroid = isAndroid;
    c.isIOS = isIOS;
    c.addToWallet = function(badgeParam) {
        // Open blank window immediately to avoid popup blocking
        var newTab = window.open("about:blank", "_blank");
        // If blocked, newTab will be null
        if (!newTab) {
            alert("Popup was blocked. Please allow popups for this site.");
            return;
        }
        c.server.get({
            addToWallet: true,
            badge: badgeParam
        }).then(function(response) {
            if (newTab) {
                newTab.location.href = response.data.responseRequest.prov_link;
            }
        });
    };
};