api.controller=function($scope, $rootScope, spUtil, $timeout) {
  /* widget controller */
  var c = this;
  c.data = $scope.data;
	$rootScope.$on('childWidgetSubmitted', function(event, data) {
		c.server.get({
			action:"delete_single_visits",
			visits: data.data.mergeVisitData.mergeVisitsMetdata.visitIds,
			groupVisitCreated: data.createdSysId
		}).then(function(resp){
			
		});
	});
	
	function sendError(){
		$rootScope.$broadcast('mergeVisitError', {
			hasError: true,
			message: c.data.response.message
		});
	}

	function sendSuccess(){
		$rootScope.$broadcast('mergeVisitSuccess', {
			hasError: false
		});
	}
	
	$timeout(function () {
		if (!c.data.response.allAllowed) {
			sendError();
		} else {
			sendSuccess();
		}
	}, 0);
	
	// check visitors-visit conditions to merge on adding visitors on form
	c.onFieldChange = function (event, data) {
		
		var form = $scope.page.g_form;
		var fieldName = "visitors";
		if (event && data) {
			if (data.field.name != fieldName) {
				return;
			}
		}
		try {
			var allVisitors = data.field.value?data.field.value.split(','):[];
			if(allVisitors.length==0){
				$rootScope.$emit('mergeVisitError', {
					hasError: true,
					message: "Please add altleast visitor(s) to continue"
				});
			}else{
				c.server.get({
					action: 'validate-visitors',
					visitors: allVisitors,
					currentVisitIds: c.data.mergeVisits.mergeVisitsMetdata.visitIds
				}).then(function(response){
					if(!response.data.response.allAllowed){
						sendError();
					}else{
						sendSuccess();
					}
				});
			}
		} catch (e) {}
  };

	$rootScope.$on('field.change', c.onFieldChange);
};