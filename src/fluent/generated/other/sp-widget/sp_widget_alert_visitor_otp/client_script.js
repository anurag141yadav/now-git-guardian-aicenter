function visitorOTPCtrl($scope, $http, $window, spModal, $location, spUtil,$timeout) {
	var c = this;
	c.step = 'email';
	c.otp = '';
	c.email = '';
	c.timer = 60; // Timer for resend OTP
	c.resendDisabled = true;
	c.message = ''; // Feedback message
	c.isError = false; // Error flag for styling
	c.retryBlock = false;
	c.maskedEmail = "";

	c.data.url_suffix = $scope.portal ? $scope.portal.url_suffix : "";
	c.verifyOTP = function () {
		verifyOTP();
	};
	c.resendOtp = function () {
		resendOtp();
	}; 
	c.requestOTP = function(){
		requestOTP();
	};

	var alreadyVeified = localStorage.getItem('visitorOTPVerified');
	if(alreadyVeified != undefined && alreadyVeified == "TRUE"){
		$location.search({}); 
	}

	function requestOTP(){
		if(!c.email || c.email.trim() == '' || c.email.indexOf('@') == -1){
			c.message = "Please enter a valid email address.";
			c.isError = true;
			return;
		}
		c.server.get({
			action : "requestOTP",
			email : c.email,
			otp: ""
		}).then(function(requestOTPResponse) {
			if(requestOTPResponse.data.retryBlock){
				//c.resendDisabled = true;
				c.isError = true;
				c.message = "OTP Verification Blocked, Please Contact System Administrator \nor retry after 1 hour";
				c.retryBlock = true;
			}
			else if(requestOTPResponse.data.sendOTPSuccessful){
				c.step = 'otp';
				c.isError = false;
				c.message = "You'll shortly receive an OTP at "+ c.maskEmail(c.email);
				c.maskedEmail = c.maskEmail(c.email);
				c.startTimer();
			}else{
				c.message = "This email is not registered. Please contact admin.";
				c.isError = true;
			}
		});
	}
	function verifyOTP() {
		if(!c.otp || c.otp.trim() == ''){
			c.message = "Please Enter OTP";
			c.isError = true;
			return;
		}
		c.server.get({
			action: 'verifyOTP',
			email: c.email,
			otp: c.otp
		}).then(function(otpresults) {
			if(!otpresults.data.verifyOTPSuccessful){
				localStorage.removeItem('visitorOTPVerified');
				localStorage.removeItem('visitorVerifiedEmail');
				c.message = otpresults.data.verifyOTPError;
				c.isError = false;
				if(otpresults.data.retryBlock){
					//c.resendDisabled = true;
					c.isError = true;
					c.message = "OTP Verification Blocked, Please Contact System Administrator \nor retry after 1 hour";
					c.retryBlock = true;
				}
			}else{
				localStorage.setItem('visitorOTPVerified','TRUE');
				localStorage.setItem('verifedVisitor',JSON.stringify(otpresults.data.visitor));
				c.message = "OTP verified & Login successful!";
				
				localStorage.setItem("mc-user-email",otpresults.data.visitor.email);
				var expiryTime = new Date();
				expiryTime.setMinutes(expiryTime.getMinutes() + 30);
				localStorage.setItem('mc-login-expiry', expiryTime.toISOString());
				
				c.isError = false;
				c.otpValidated = true;
				$location.search({}); 
			}
		});
	}
	function resendOtp()  {
		c.server.get({
			action: 'resendOTP',
			email: c.email,
			otp: c.otp
		}).then(function(resendOTPResults) {
			if(resendOTPResults.data.retryBlock){
				//c.resendDisabled = true;
				c.isError = true;
				c.message = "OTP Verification Blocked, Please Contact System Administrator \nor retry after 1 hour";
				c.retryBlock = true;
			}else{
				c.message = "A new OTP will be sent to " + c.maskEmail(c.email) + " shortly.";
				c.maskedEmail = c.maskEmail(c.email);
				c.isError = false;
				c.startTimer();
			}
		});

	}
	c.startTimer = function () {
		c.timer = 60;
		c.resendDisabled = true;
		var countdown = function () {
			if (c.timer < 40 && c.message) {
				c.message = "";
			}
			if (c.timer > 0) {
				c.timer--;
				$timeout(countdown, 1000);
			} else {
				c.resendDisabled = false;
			}
		};
		countdown();
	};

	c.maskEmail = function (email) {
		if (!email || email.indexOf('@') === -1) {
			return email; // Return as-is if invalid
		}

		var parts = email.split('@');
		var localPart = parts[0];
		var domainPart = parts[1];

		// Mask the local part (keep the first letter)
		var maskedLocal = localPart.charAt(0) + '***';

		// Split domain into name and extension
		var domainParts = domainPart.split('.');
		var domainName = domainParts[0];
		var domainExtension = domainParts[1];

		// Mask the domain name (keep the first letter)
		var maskedDomainName = domainName.charAt(0) + '****';

		return maskedLocal + '@' + maskedDomainName + '.' + domainExtension;
	};


}