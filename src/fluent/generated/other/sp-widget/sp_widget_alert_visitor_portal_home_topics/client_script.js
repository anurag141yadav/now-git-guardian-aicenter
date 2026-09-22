function controller($scope, $rootScope, $location, spUtil, spModal) {
	var c = this;

	c.logOut = function() {
		logout();
	};
	var loggedInVisitorEmail = "";
	$scope.isLoading = false;
	$scope.userVerified = false;
	$scope.foundValidVisit = false;
	var item = {};
	var data = c.data;
	var isVisitorOTPVerifed = localStorage.getItem("visitorOTPVerified");
	if (isVisitorOTPVerifed == undefined || isVisitorOTPVerifed != "TRUE") {
		$location.search("id=alert_visitor_otp_page");
	} else {
		var verifiedVisitor = localStorage.getItem("verifedVisitor");
		if (verifiedVisitor != undefined) {
			var visitor = JSON.parse(verifiedVisitor);
			data.options.widget_title = "Welcome  " + visitor.first_name;
			if (visitor.status == "VERIFIED") {
				$scope.userVerified = true;
			}
			item.visitor_sys_id = visitor.visitorId;
			loggedInVisitorEmail = visitor.email;
			checkScheduledVisits();
		}
	}

	$scope.performAction = function(action) {
		if (action.action == null || action.action == undefined) {
			return;
		}
		if (action.action != null) {
			var action_type = action.action.type;
			if (action_type == "" || action_type == undefined) {
				return;
			} else {
				var action_value = action.action.value;
				if (action_type == 'catalog') {
					$location.search(action.action.value);
				} else if (action_type == 'widget') {
					var widget_title = action.action.confirmMessage;
					var widgetInput = {};
					if (item != undefined && item.sys_id != undefined) {
						widgetInput.sys_id = item.sys_id;
					}
					if (action.action.propertyName != undefined && action.action.propertyName != "" &&
							action.action.propertyValue != undefined && action.action.propertyValue != "") {
						if (action.action.propertyName.includes(',')) {
							var propertyNames_array = action.action.propertyName.split(',');
							var propertyValues_array = action.action.propertyValue.split(',');
							for (var ivq = 0; ivq < propertyNames_array.length; ivq++) {
								var widgetInputPropertyName = propertyNames_array[ivq];
								var widgetInputPropertyValue = propertyValues_array[ivq];

								if (widgetInputPropertyValue.includes('$')) {
									var widgetPropertyFromItem = widgetInputPropertyValue.replace(/\$/g, '');
									var widgetInputValueFromItem = getDataFromItem(item, widgetPropertyFromItem);
									widgetInput[
										widgetInputPropertyName] = widgetInputValueFromItem;
								} else {
									if (widgetInputPropertyValue == "true") {
										widgetInput[widgetInputPropertyName] = true;
									} else if (widgetInputPropertyValue == "false") {
										widgetInput[widgetInputPropertyName] = false;
									} else {
										widgetInput[widgetInputPropertyName] = widgetInputPropertyValue;
									}
								}
							}
						} else {
							if (action.action.propertyValue.includes('$')) {
								var propertyFromItem = action.action.propertyValue.replace(/\$/g, '');
								var valueFromItem = getDataFromItem(item, propertyFromItem);
								widgetInput[action.action.propertyName] = valueFromItem;
							} else {
								if (action.action.propertyValue == "true") {
									widgetInput[action.action.propertyName] = true;
								} else if (action.action.propertyValue == "false") {
									widgetInput[action.action.propertyName] = false;
								} else {
									widgetInput[action.action.propertyName] = action.action.propertyValue;
								}
							}
						}
					}
					spModal.open({
						title: widget_title,
						widget: action_value,
						widgetInput: widgetInput,
						buttons: [{
							label: '✘ Close',
							cancel: true,
							focus: true
						}]
					}).then(function(response) {

					});
				}
			}
		}
	};
	$rootScope.$on('sp.form.record.updated', function () {
			refreshVisitorFromServer();
	});
	
	function refreshVisitorFromServer() {
	c.server.get({
		typeCode: 'getVisitorDetails',
		visitor_sys_id: item.visitor_sys_id
	}).then(function (response) {
		if (response.data && response.data.visitor) {
			localStorage.setItem('verifedVisitor',JSON.stringify(response.data.visitor));
			data.options.widget_title = "Welcome " + response.data.visitor.first_name;
		}
	});
}

	function getDataFromItem(object, propertyPath) {
		return propertyPath.split('.').reduce(function(obj, key) {
			return obj && obj[key];
		}, object);
	}

	function logout() {
		localStorage.removeItem('visitorOTPVerified');
		localStorage.removeItem('verifedVisitor');
		$location.search("id=alert_visitor_otp_page");
	}
	function checkScheduledVisits(){
		var item_sys_id = item.visitor_sys_id;
		var checkStatus = true;
		c.server.get({
			visitor_sys_id: item_sys_id,
			visitStatusCheck: checkStatus
		}).then(function(response) {
			var statusCode = response.data.response.status;
			if (statusCode == 'VALID-VISITS') {
				$scope.foundValidVisit = true;
			}
		});
		$scope.forgetMe =  function(){
			var action_value = "Confirm account deletion";
			var confirm_message;
			var buttons = [];
			if($scope.foundValidVisit){
				confirm_message = "You currently have scheduled, checked-in or overstayed visits. The 'Right to be Forgotten' option is unavailable at this time. Please contact the administrator for assistance.";
				buttons = [{
						label: '✘ Ok',
						cancel: true,
						focus: true
					}];
			}else{
				confirm_message = "By proceeding with the 'Right to Be Forgotten', data will be permanently erased from system.<br><br><b>This action cannot be undone</b>. Are you sure you wish to confirm?";	
				buttons = [{
						label: '✔ Confirm',
						primary: true,
						class: 'modal-button',
					},
					{
						label: '✘ Cancel',
						cancel: true,
						focus: true
					}];
			}
			
			spModal.open({
				title: action_value,
				message: confirm_message,
				buttons : buttons,
				
			}).then(function(response) {
				if (response) {
					var typeCode = "forgetVisitor";
					c.server.get({
						typeCode: typeCode,
						to: loggedInVisitorEmail
					}).then(function(response) {
						logout();
					});
				}
			});
		};
	}

}