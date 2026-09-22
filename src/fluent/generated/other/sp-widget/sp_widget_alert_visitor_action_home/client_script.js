api.controller=function($scope,$rootScope,$location, spModal,spUtil) {
	var c = this;
	c.visitorInformation = {};
	$scope.searchCompleted = false;
	c.location = localStorage.getItem('visitor-location')?JSON.parse(localStorage.getItem('visitor-location')).sys_id:"";
	$scope.search = function() {
		$scope.searchCompleted = false;
		c.server.get({ 
			email: c.data.email,
			location: c.location
		}).then(function(response) {
			$scope.data = response.data; 
			$scope.searchCompleted = true;
		});
	};
	
	$rootScope.$on("id-verification-complete", function(event, scanIdResponse){
		if(scanIdResponse.verificationResult.success && scanIdResponse.verificationResult.documentInformation){
			c.server.get({
				action: "fetch-visits-by-visitor-id",
				scanIdResponse: scanIdResponse.verificationResult,
				location : scanIdResponse.location
			}).then(function(response){
				$scope.data = response.data; 
				$scope.searchCompleted = true;
				c.visitorInformation.existingVisitor = response.data.existing_visitor;
			});
			c.visitorInformation.visitorData = scanIdResponse.verificationResult.documentInformation; 
		}
	});
	
	$rootScope.$on('alert-qr-captured', function(event, qrCapturedResponse) {
		$scope.qrCaptured = qrCapturedResponse;
		if ($scope.qrCaptured  == "YES" && $scope.qrCode != ""){
			$scope.getVisitByVisitId();
		}
	});
	$rootScope.$on('alert-qr-data', function(event, responseQR) {
		$scope.qrCode = responseQR;
		if ($scope.qrCaptured  == "YES" && $scope.qrCode != ""){
			$scope.getVisitByVisitId();
		}
	});
	$scope.getVisitByVisitId = function(){
		$scope.searchCompleted = false;
		c.server.get({ 
				visitId: $scope.qrCode,
				location: c.location
		}).then(function(response) {
			$scope.data = response.data; 
			$scope.searchCompleted = true;
		});
	};
	$scope.displayCheck = function(action, item) {
		if (action.condition == null || action.condition == undefined) {
			return true;
		}
		if (action.condition != null) {
			var conditionType = action.condition.type;
			if (conditionType == "" || conditionType == undefined || conditionType == 'data' || conditionType == 'data&role') {
				var propName = action.condition.propertyName;
				if (propName == "" || propName == undefined) {
					return true;
				} else {
					var ifCondition = action.condition.condition;
					var condtionValue = action.condition.value;
					if (ifCondition == "=") {
						if (item[propName] == condtionValue) {
							if (conditionType == 'data&role') {
								return $scope.validateRoles(action.condition.role);
							}
							return true;
						} else {
							return false;
						}
					}
					if (ifCondition == "!=") {
						if (item[propName].value.indexOf(condtionValue) != -1) {
							return false;
						} else {
							if (conditionType == 'data&role') {
								return $scope.validateRoles(action.condition.role);
							}
							return true;
						}
					}
					if (ifCondition == "in") {
						var conditions_array = condtionValue.split(',');
						for (var i in conditions_array) {
							var condVal = conditions_array[i];
							if (item[propName] == condVal ) {
								if (conditionType == 'data&role') {
									return $scope.validateRoles(action.condition.role);
								}
								return true;
							}
						}
						return false;
					}
				}
			}
			if (conditionType == 'role') {
				return $scope.validateRoles(action.condition.role);
			}
		}
		return true;
	};
	$scope.validateRoles = function(rolesValue) {
		if (rolesValue == undefined || rolesValue == "") {
			return true;
		}
		var roleFoundInList = false;
		var roleCondtionValue = rolesValue;
		var roles_array = roleCondtionValue.split(',');
		for (var idrole in roles_array) {
			var roleToFind = roles_array[idrole];
			if (c.data.userRoles != undefined) {
				roleFoundInList = c.data.userRoles.includes(roleToFind);
				if (roleFoundInList == true) {
					return roleFoundInList;
				}
			}
		}
		return roleFoundInList;
	};
	$scope.performAction = function(item, action) {
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
					var updatedUrl = replacePlaceholders(action_value, item);
					$location.search(updatedUrl);
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
									var widgetInputValueFromItem = item[widgetPropertyFromItem];
									widgetInput[widgetInputPropertyName] = widgetInputValueFromItem;
								} else {
									widgetInput[widgetInputPropertyName] = widgetInputPropertyValue;
								}
							}
						} else {
							if (action.action.propertyValue.includes('$')) {
								var propertyFromItem = action.action.propertyValue.replace(/\$/g, '');
								var valueFromItem = item[propertyFromItem];
								widgetInput[action.action.propertyName] = valueFromItem;
							} else {
								widgetInput[action.action.propertyName] = action.action.propertyValue;
							}
						}
					}
					spModal.open({
						title: widget_title,
						widget: action_value,
						widgetInput: widgetInput,
						buttons: [{
							label: '✘ Close',
							focus: true,
							onClick:function(){
								if(c.data.search_type=='email'){
									$scope.search();
								}else{
									$scope.getVisitByVisitId();
								}
							},
						}]
					}).then(function(response) {
						if(c.data.search_type=='email'){
							$scope.search();
						}else{
						 	$scope.getVisitByVisitId();
						}
					});
				}
			}
		}
	};
	$scope.registerWalkIn = function() {
		c.server.get({
			auto_populate_visitor: true,
			visitor_email: c.data.email?c.data.email:"",
			visitorDocumentData: c.visitorInformation?c.visitorInformation:{}
		}).then(function(response){
			if(response.data.response){
				localStorage.setItem('prePopulatedVisitDetails',JSON.stringify(response.data.response));
			}
		});
		$location.search(c.data.walkinLink);	
	}
	function replacePlaceholders(template, values) {
		var result = template; 
		while (result.indexOf('##') !== -1) {
			var start = result.indexOf('##');
			var end = result.indexOf('##', start + 2);
			if (end === -1) {
				break;
			}
			var placeholder = result.substring(start + 2, end);
			var value = getDataFromItem(values, placeholder);
			result =
				result.substring(0, start) +
				(value !== undefined ? value : '##' + placeholder + '##') +
				result.substring(end + 2);
		}
		return result;
	}

	function getDataFromItem(object, propertyPath) {
		if(object.hasOwnProperty(propertyPath)){
		    return object[propertyPath];
		}
	}
};