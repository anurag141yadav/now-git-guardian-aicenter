api.controller=function($scope, $rootScope,$timeout,spUtil) {
	var c = this;
	c.id_verifed_by_lobby_admin = "";
	c.widgetId = "";
	var verificationData = {};
	c.isLoading = false;
	c.message = "";
	c.isError = -1;
	c.success = 0;
	
	c.locationSysId = "";
	
	var location = localStorage.getItem('visitor-location');
	if(location){
		c.locationSysId = JSON.parse(location).sys_id;
		c.server.get({
				locationValue: c.locationSysId
			}).then(function (response) {
				if (response.data) {
					c.data.notRequired = "";
					if(response.data.notRequired){
						c.data.notRequired = true;
					}else{
						c.data.notRequired = false;
					}
					c.data.cameraWidgets = response.data.cameraWidgets;
					c.data.title = response.data.title;
					c.data.subtitle = response.data.subtitle;
				}
			}).catch(function (error) {
			});
	}
	
	c.setWidgetId = function(widgetText){
		c.widgetId = widgetText;
	};
	
	$rootScope.$on('alert-photo-captured',function(event,data){
		if(data == "NO"){
			c.isError = -1;
			c.message = "";
			c.success = 0;
		}
	});
	
	$rootScope.$on('alert-cam-photo',function(event,data){
		var gForm = $scope.page.g_form;
		if(c.widgetId.indexOf('Photo')!=-1){
			if(gForm){
				gForm.setValue('id_scan_visitor_image',data);
			}
			verificationData.visitorPhoto = data;
		}else if(c.widgetId.indexOf('Front')!=-1){
			if(gForm){
				gForm.setValue('id_scan_visitor_front_card',data);
			}
			verificationData.visitorFrontCard = data;
		}else if(c.widgetId.indexOf('Back')!=-1){
			if(gForm){
				gForm.setValue('id_scan_visitor_back_card',data);
			}
			verificationData.visitorBackCard = data;
		}
	});

	function sendVerificationTypeToServer(){
		if($scope.page && $scope.page.g_form){
			var gForm = $scope.page.g_form;
			var fetched_val = gForm.getValue('visit_location');
			c.server.get({
				locationValue: fetched_val
			}).then(function (response) {
				if (response.data) {
					c.data.notRequired = "";
					if(response.data.notRequired){
						c.data.notRequired = true;
					}else{
						c.data.notRequired = false;
					}
					c.data.cameraWidgets = response.data.cameraWidgets;
					c.data.title = response.data.title;
					c.data.subtitle = response.data.subtitle;
					//c.data = response.data; // Update `c.data` for logging or further use
				}
			}).catch(function (error) {
			});
		}
	}

	var gForm = $scope.page.g_form;
	if(gForm){
		gForm.$private.events.on('change', function (fieldName) {
			if (fieldName === 'visit_location') {
				$timeout(sendVerificationTypeToServer);
				c.success = 0;
				c.message = "";
				c.isError = -1;
			}else if(fieldName === 'visit_visitor_single_visitor_id'){
				c.success = 0;
				c.message = "";
				c.isError = -1;
			}
		});
	}
	
	c.validateIDData = function(){
		c.isLoading = true;
		var gForm = $scope.page.g_form;
		var fetched_val;
		var visitorSysId;
		if(gForm){
			fetched_val = gForm.getValue('visit_location');
			visitorSysId = gForm.getValue('visit_visitor_single_visitor_id');
		}else{
			fetched_val = c.locationSysId;
		}
		c.server.get({
			verifyData : JSON.stringify(verificationData),
			locationValue : fetched_val,
			visitorSysId : visitorSysId?visitorSysId:"",
			submitForVerification : true
		}).then(function(response){
			c.isLoading = false;
			if(response.data.verificationResult){
				if(response.data.verificationResult.success){
					c.success = 1;
					c.isError = 0;
					if(gForm){
						gForm.setValue('is_visitor_verified','Yes');
					}
					c.message = response.data.verificationResult.message;
					if(gForm && response.data.verificationResult.documentInformation){
						c.fillDocumentInfo(response.data.verificationResult.documentInformation);
					}
				}else{
					c.isError = 1;
					c.message = response.data.verificationResult.message;
				}
			}else{
				spUtil.addErrorMessage("Unexpected error occured while verification");
			}
			var kioskVerification = {};
			kioskVerification.location = fetched_val;
			kioskVerification.verificationResult = response.data.verificationResult;
			$rootScope.$emit('id-verification-complete', kioskVerification);
		});
	};
	
	c.fillDocumentInfo = function(documentObj){
		var gForm = $scope.page.g_form;
		gForm.setValue('id_verification_document',documentObj.documentType);
		gForm.setValue('id_verification_date',documentObj.currentTime);
		gForm.setValue('visit_visitor_single_first_name',documentObj.firstName);
		gForm.setValue('visit_visitor_single_last_name',documentObj.lastName);
		gForm.setValue('visitor_visitor_status',documentObj.visitorStatus);
		gForm.setValue('id_document_number', documentObj.documentNumber);
		
	};
	
	c.setVisitorVerification = function(){
		var gForm = $scope.page.g_form;
		if(gForm){
			if(c.id_verifed_by_lobby_admin || c.id_verifed_by_lobby_admin=="true"){
				gForm.setValue('is_visitor_verified','Yes');
			}else{
				gForm.setValue('is_visitor_verified','No');
			}
		}
	};
};