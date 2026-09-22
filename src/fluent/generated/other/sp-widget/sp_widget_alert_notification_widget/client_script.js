api.controller=function($scope, spModal, $rootScope, spUtil) {
	var c = this;	
	var locationSysId = "";
	if($scope.data.location && $scope.data.location!="")
		locationSysId = $scope.data.location;
	this.host_cc = false;
	this.email_subject = "";
	this.additional_id = "";
	this.email_message = "";
	c.email_template = "";
	this.addToWatchList = false;
	c.checkout_type = "final";
	this.asset_notes = "";
	this.cc_security = false;
	this.handover_notes = "";
	c.show_action_content = "YES";
	c.show_action_result= "NO";

	$scope.templates = c.data.templates;
	$scope.initiateEmergency = function(){
		var host = this.host_cc;
		var visit = $scope.data.recordId;
		var typeCode = $scope.data.type;
		locationSysId = $scope.data.location;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			visit_sys_id : visit,
			location : locationSysId,
			typeValue : typeCode
		}).then(function(response) {
			var obj = {};
			$scope.$parent.$parent.$close(obj);
		});
	};
	$scope.confirmSendEmail = function(){
		var host = this.host_cc;
		var visit = $scope.data.recordId;
		var typeCode = $scope.data.type;
		var template = c.email_template;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			email_template : template,
			visit_sys_id : visit,
			location : locationSysId,
			typeValue : typeCode
		}).then(function(response) {
			var obj = {};
			$scope.$parent.$parent.$close(obj);
		});
	};
	$scope.confirmEmergency = function(){
		var typeCode = $scope.data.type;
		c.server.get({
			button_clicked : true,
			location : locationSysId,
			typeValue : typeCode
		}).then(function(response) {
			spUtil.addInfoMessage("Emergency Response Activated");
			var obj = {};
			$scope.$parent.$parent.$close(obj);
		});
	};

	$scope.sendComposedEmail = function(){
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var subject = this.email_subject;
		var message = this.email_message;
		var additional_id = this.additional_id;
		var visit = $scope.data.recordId;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			location : locationSysId,
			email_subject : subject,
			email_message : message,
			email_additional_id : additional_id,
			visit_sys_id : visit,
			typeValue : typeCode
		}).then(function(response) {
			var obj = {};
			$scope.$parent.$parent.$close(obj);
		});
	};

	$scope.confirmIndividualEmergency = function(){
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var visit = $scope.data.recordId;
		var watchList = this.addToWatchList;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			add_to_watchList : watchList,
			location : locationSysId,
			visit_sys_id : visit,
			typeValue : typeCode
		}).then(function(response) {
			var obj = {};
			$scope.$parent.$parent.$close(obj);
		});
	};

	$scope.confirmCheckout = function(){
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var visit = $scope.data.recordId;
		var checkoutTypeValue = c.checkout_type;
		if(c.checkout_type == 'final'){
			c.message_data = "Visitor Successfully Checked Out";
			c.sub_message_data = "The visitor's visit has ended. We appreciate their time with us and hope to see them again.";
		}else{
			c.message_data = "Visitor Checked Out Temporarily";
			c.sub_message_data = "The visitor has been checked out temporarily. Please remind them to check back in when they return.";
		}
		var assetNotes = this.asset_notes;
		var assetCollection = this.asset_collected_by_lobbyadmin;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			checkout_type: checkoutTypeValue,
			asset_notes : assetNotes,
			location : locationSysId,
			visit_sys_id : visit,
			typeValue : typeCode,
			asset_collection:assetCollection
		}).then(function(response) {
			c.show_action_content = "NO";
			c.show_action_result= "YES";
		});
	};


	$scope.confirmCheckoutByHost = function(){
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var visit = $scope.data.recordId;
		var checkoutTypeValue = c.checkout_type;
		if(c.checkout_type == 'final'){
			c.message_data = "Visitor Successfully Checked Out";
			c.sub_message_data = "You have successfully checked out your guest. Thank you for being a great host!";
		}else{
			c.message_data = "Visitor Checked Out Temporarily";
			c.sub_message_data = "You have checked out your guest temporarily. Please ensure they are aware of the re-entry process.";
		}
		var assetNotes = this.asset_notes;
		var securityCC = this.cc_security;
		var assetCollection = this.asset_collected_by_host;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			cc_security : securityCC,
			checkout_type: checkoutTypeValue,
			asset_notes : assetNotes,
			location : locationSysId,
			visit_sys_id : visit,
			typeValue : typeCode,
			asset_collection:assetCollection
		}).then(function(response) {
			c.show_action_content = "NO";
			c.show_action_result= "YES";
		});
	};

	$scope.redirectToHome = function(){
		var obj = {};
		$scope.$parent.$parent.$close(obj);
	};

	$scope.confirmCheckoutByKiosk = function(){
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var visit = $scope.data.recordId;
		var checkoutTypeValue = this.checkout_type;
		if(c.checkout_type == 'final'){
			c.message_data = "Thank you for your visit!";
			c.sub_message_data = "We appreciate your visit and look forward to seeing you again.";
		}else{
			c.message_data = "See you again soon!";
			c.sub_message_data = "Thank you for checking out temporarily. We hope to see you back soon!";
		}
		var handoverNotes = this.handover_notes;
		var asset_collection = this.asset_handover;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			checkout_type: checkoutTypeValue,
			asset_notes : handoverNotes,
			location : locationSysId,
			visit_sys_id : visit,
			typeValue : typeCode,
			assetCollection:assetCollection
		}).then(function(response) {
			c.show_action_content = "NO";
			c.show_action_result= "YES";
		});
	};

	$scope.confirmCheckoutByKiosk = function(){
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var visit = $scope.data.recordId;
		var checkoutTypeValue = this.checkout_type;
		if(c.checkout_type == 'final'){
			c.message_data = "Thank you for your visit!";
			c.sub_message_data = "We appreciate your visit and look forward to seeing you again.";
		}else{
			c.message_data = "See you again soon!";
			c.sub_message_data = "Thank you for checking out temporarily. We hope to see you back soon!";
		}
		var handoverNotes = this.handover_notes;
		var asset_collection = this.asset_handover;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			checkout_type: checkoutTypeValue,
			asset_notes : handoverNotes,
			location : locationSysId,
			visit_sys_id : visit,
			typeValue : typeCode,
			assetCollection:assetCollection
		}).then(function(response) {
			c.show_action_content = "NO";
			c.show_action_result= "YES";
		});
	};

	$scope.confirmCheckin = function(){
		$scope.host_cc = this.host_cc;
		var host = this.host_cc;
		var typeCode = $scope.data.type;
		var visit = $scope.data.recordId;
		c.server.get({
			button_clicked : true,
			host_cc: host,
			location : locationSysId,
			visit_sys_id : visit,
			typeValue : typeCode
		}).then(function(response) {
			c.show_action_content = "NO";
			c.show_action_result= "YES";
		});
	};



};