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

    var email;
    var isVisitorOTPVerifed = localStorage.getItem("visitorOTPVerified");
    if (isVisitorOTPVerifed == undefined || isVisitorOTPVerifed != "TRUE") {
        $location.search("id=alert_visitor_otp_page");
    }
    var expiryStr = localStorage.getItem('mc-login-expiry');
    if (expiryStr) {
        var now = new Date();
        var expiryDate = new Date(expiryStr);
        if (now < expiryDate) {
            email = localStorage.getItem("mc-user-email");
            if (email) {
                c.server.get({
                    email: email
                }).then(function(response) {
                    c.data = response.data;
                });
            }
        } else {
            localStorage.removeItem('expiry');
            localStorage.removeItem('mc-user-email');
            localStorage.removeItem('visitorOTPVerified');
            $location.search("id=alert_visitor_otp_page");
        }
    } else {
        $location.search("id=alert_visitor_otp_page");
    }
    if (email) {
        c.server.get({
            email: email,
        }).then(function(response) {
            c.data = response.data;
        });
    }
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
    /*c.addToWallet = function(badgeParam){
		c.server.get({
			addToWallet:true,
			badge:badgeParam
			
		}).then(function(response){
			//openLink(response.data.responseRequest.prov_link);
			//window.open(response.data.responseRequest.prov_link);
		$scope.openExternalLink = function(response) {
    window.open(response.data.responseRequest.prov_link);
  };
		})
	}*/
    c.logOut = function() {
        localStorage.removeItem('expiry');
        localStorage.removeItem('mc-user-email');
        localStorage.removeItem('visitorOTPVerified');
        $location.search("id=alert_visitor_otp_page");
    };
};