api.controller=function($scope, $rootScope, spScUtil, spUtil, $location, $window, $sce, $timeout,spModal, i18n,
												$document, spAtf, spSCNavStateManager, $q, cabrillo, spAriaFocusManager) {
	var c = this;
	$scope.m = c.data.msgs;
	$scope.url = "id={page}&table={table}&sys_id={sys_id}";
	$scope.leftNav= [];
	c.mandatory=[];
	function updateLayout() {
		$scope.isLargeScreen = window.innerWidth >= 1024;
	}
	updateLayout();
	window.addEventListener('resize', updateLayout);
	$scope.hasMandatory = function() {
		return c.mandatory && c.mandatory.length > 0;
	};
	function showPageLoader() {
		cabrillo.viewLayout.showSpinner();
	}
	function hidePageLoader() {
		cabrillo.viewLayout.hideSpinner();
	}
	function setFieldsReadonly() {
		var allFields = g_form.getFieldNames();
		for (var fieldName in allFields) {
			g_form.setReadonly(allFields[fieldName], true);
		}
	}
	function handleFailure(response) {
		registerSubmitListeners();
		$scope.submitting = false;
		hidePageLoader();
		if (response.data.result && response.data.result.errMsg)
			spUtil.addErrorMessage(response.data.result.errMsg);

		return $q.reject(response);
	}
	$scope.backtoHome = function(){
		$location.search({});
	}


	$scope.getFocus = function(field) {
		var focusVar = (field.type == "reference") ? "sp_formfield_reference_" : "sp_formfield_";
		focusVar += (field.name.startsWith("IO:") ? field._children[0] : field.name);
		var elem = document.getElementById(focusVar);
		if (field.type == "url" && elem.style.display == "none")
			elem = document.getElementById(focusVar + "_unlock");
		else if (field.type == "sc_multi_row")
			elem = document.getElementById(field.sys_id + "_add_row");
		else if (field.type == "sc_attachment") {
			var buttonElem = angular.element(elem).find('button')[0];
			if (buttonElem)
				elem = buttonElem;
		} else if (field.type != "html") {
			var inputElem = angular.element(elem).find('input')[0];
			if (inputElem)
				elem = inputElem;
		}
		if (elem)
			elem.focus();
	}
	c.options.show_less_description = true;
	c.options.image_gallery = false;
	c.options.native_mobile = false;
	$scope.submitting = false;
	$scope.validating = false;
	$scope.triggerPostValidation = null;
	function prepareSections(){
		$scope.sc_cat_item = c.data.recordProducer;
		$scope.sc_cat_item.trusted_description = $sce.trustAsHtml($scope.sc_cat_item.description);
		if (!$scope.sc_cat_item._fields || angular.equals($scope.sc_cat_item._fields, {}))
			$scope.no_fields = true;
		var number_seq = 1;
		for(var index in c.data.recordProducer._sections){
			var vsitem =  c.data.recordProducer._sections[index];
			if(vsitem.id != "" && vsitem.name != ""){
				var vsId = vsitem.id;
				var vsName = vsitem.name;
				if(c.data.recordProducer._fields[vsId] && c.data.recordProducer._fields[vsId].variable_name ){
					vsName = c.data.recordProducer._fields[vsId].variable_name;
				}
				var section = {};
				section.sequence = number_seq;
				section.name = vsName;
				section.id = vsId;
				$scope.leftNav.push(section);
				number_seq = number_seq+1 ;
			}
		}
	}
	prepareSections();
	c.getItemId = function() {
		return $scope.sc_cat_item ? $scope.sc_cat_item.sys_id : -1;
	};
	var g_form;
	var cleanFailedSubmit;
	var validationComplete;

	$scope.$on('spModel.gForm.initialized', function(e, gFormInstance) {
		if (gFormInstance.getSysId() != -1 && gFormInstance.getSysId() != c.getItemId())
			return;
		g_form = gFormInstance;
		spSCNavStateManager.register(g_form);
		spSCNavStateManager.isNative(false);
		spSCNavStateManager.isPreview(false);
		g_form.$private.events.on('submitted', function() {
			cleanFailedSubmit();
			submitForm();
		});
	});


	function submitForm() {
		postCatalogFormRequest().then(function(response) {
			g_form.$private.userState.clearModifiedFields();
			var a = response.data.result;
			if ($scope.data.sys_properties.stopNavigationOnError) {
				if (a.sys_id == -1) { 
					if (a.$$uiNotification.length > 0) {
						var errorNotify = a.$$uiNotification.find(function(elem) {
							if (elem.type == 'error')
								return true;
						});
						if (errorNotify) {
							$scope.$emit("$$uiNotification", a.$$uiNotification);
							$scope.submitted = false;
							$scope.submitting = false;
							return;
						}
					}
				}
			}
			hidePageLoader();
			handleRedirect(a.number, a.table, a.sys_id, a.redirect_to, a.redirect_url, a.redirect_portal_url);
		});
	}

	function handleRedirect(n, table, sys_id, redirectTo, redirectUrl, redirectPortalUrl) {
		var page = 'form';
		var url = formatRedirectUrl(page, table, sys_id);
		  $window.onbeforeunload = null;
		if (redirectPortalUrl) {
			if (isPortalURL(redirectPortalUrl)) {
				var queryParamURL = getQueryParams(redirectPortalUrl);
				var currentParamURL = getQueryParams($location.$$url);
				if (queryParamURL == currentParamURL)
					$location.search(queryParamURL + '&' + Date.now());
				else{
					var newURLRedirectNew = $location.search(queryParamURL);
					spAriaFocusManager.navigateToLink(newURLRedirectNew.url());
				}
			} else{
				//	$window.location.href = redirectPortalUrl;
				var newURLRedirect = $location.search(redirectPortalUrl);
				spAriaFocusManager.navigateToLink(newURLRedirect.url());
			}
		} else {
			var newURL = $location.search(url);
			spAriaFocusManager.navigateToLink(newURL.url());
		}
		return;
	}
	function getQueryParams(url){
		var paramIndex = getQueryParameterIndex(url);
		return url.substr(paramIndex+1, url.length);
	}
	function isPortalURL(url) {
		var currentPortalName = $location.path().replace('/','');
		var paramIndex = getQueryParameterIndex(url)
		var redirectPortalName = url.substr(0, paramIndex).replace('/', '');
		return currentPortalName === redirectPortalName || paramIndex == 0;
	}
	function getQueryParameterIndex(url){
		var paramIndex = url.search(/\?/);
		return paramIndex >= 0 ? paramIndex : url.length;
	}

	function formatRedirectUrl(page, table, sys_id) {
		var url;
		var paramObj = {page: page, table: table, sys_id: sys_id};
		url = spUtil.format($scope.url, paramObj);
		return url;
	}

	function getVarData(fields) {
		var reqData = {};
		for (var obj in fields)
			reqData[fields[obj].name] = fields[obj].value;
		return reqData;
	}


	function postCatalogFormRequest() {
		$scope.submitting = true;
		showPageLoader();
		var additionalParms = {};
		var genSysID = $scope.data._generatedItemGUID;
		var variableData = getVarData($scope.sc_cat_item._fields);
		var recordSys_id = $scope.sc_cat_item.sys_id;
		if ($scope.sc_cat_item.sys_class_name === "sc_cat_item_producer") {
			return spScUtil.submitProducer(recordSys_id, variableData, genSysID, additionalParms).then(null, function(response) {
				return handleFailure(response);
			});
		} 
	}

	$scope.triggerOnSubmit = function() {
		$scope.$evalAsync(function() {
			if (g_form && !$scope.submitting) {
				$scope.submitting = true;
				if (!spScUtil.isRegexDone($scope.sc_cat_item._fields)) {
					$scope.submitting = false;
					$scope.validating = true;
					$scope.triggerPostValidation = $scope.triggerOnSubmit;
				} else if (!g_form.submit()) {
					$timeout(function() {
						$scope.$broadcast('$sp.service_catalog.form_submit_failed', {
							action_name: 'submit'
						});
					}, 1000);
				}
			}
		})
	}

	function registerSubmitListeners() {
		cleanFailedSubmit = $scope.$on('$sp.service_catalog.form_submit_failed', function() {
			$scope.submitting = false;
		});
		validationComplete = $rootScope.$on('$sp.service_catalog.form_validation_complete', function() {
			if ($scope.validating) {
				$scope.validating = false;
				if (typeof $scope.triggerPostValidation === 'function')
					$scope.triggerPostValidation();
			}
			$scope.triggerPostValidation = null;
		});
	}
	registerSubmitListeners();
	
	
	$scope.$on("$destroy", function() {
		$rootScope.$broadcast("$sp.service_catalog.item.close");
		if (g_form)
			spSCNavStateManager.unregisterForms([g_form.getSysId()]);
		
		//unregister();
		//mespClosePopupUnregister();
		mespOpenPopupUnregister();
		validationComplete();
	});
	
	var mespOpenPopupUnregister = $rootScope.$on("mesp.popup.open", function() {
		// Timeout is to give a better user experience otherwise when this popup opens,
		// the cabrillo buttons will be displayed immediately giving a bad user experience.
		$timeout(function(){
			removeCabrilloButtons();
		});
	});
	
		function removeCabrilloButtons() {
			if (!c.isNative) return;
			cabrillo.viewLayout.setBottomButtons();
	}
}