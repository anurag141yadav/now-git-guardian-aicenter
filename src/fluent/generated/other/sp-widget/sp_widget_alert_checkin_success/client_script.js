api.controller=function($scope,spUtil,spModal, $timeout) {
	var c = this;
	c.data = $scope.data;
	spUtil.recordWatch($scope,c.data.table_name,"sys_id=" + c.data.visitor_request_sys_id ,function(response) {
		if(response.data.changes.includes("status")){
			$scope.getUpdatedData();
		}
	});
	
	//funtion for print badge - pass visit sys id to print badge widget
	$scope.printBadge = function(visitId) {
		var widget_title = "Print Badge";
		var widgetInput = {};
		widgetInput.sys_id = visitId;

		spModal.open({
			title: widget_title,
			widget: "alert-print-widget",
			widgetInput: widgetInput,
			size: 'lg',
			buttons: [{
				label: '✘ Close',
				cancel: true,
				focus: true
			}]
		});
	}
	
	$scope.getUpdatedData = function(){
		c.server.get({ action: 'getUpdatedData'}).then(function (server_response) {
				if (server_response.data.error) {
					$scope.error = server_response.data.error;
				} else {
					c.data.content = server_response.data.content;
					$scope.data.content = server_response.data.content;
					c.data.record = server_response.data.record;
				}
			});
	}
	
	// After 3 seconds, get status updates
	$timeout(function () {
		$scope.getUpdatedData();
	},3000,true);
	
	// After 10 seconds handle any unexpected error
	$timeout(function () {
		if(c.data.content.status == "loading"){
			c.data.content.status = "error";
			c.data.content.message = "Something went wrong, please try again"
			c.data.content.show_print_badge = false;
			c.data.content.add_more_visitors = false;
		}
	},10000,true);
	
};