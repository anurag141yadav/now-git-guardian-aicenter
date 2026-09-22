function controller($scope,$rootScope,$location, spUtil) {
	var c = this;
	$scope.isLoading = false;
	var data = c.data;
	var fetchPopularTopicsData = function() {
		$scope.isLoading = false;
	};
	fetchPopularTopicsData();
  localStorage.setItem('visitor-location',JSON.stringify(c.data.decision_data.kioskLocation));
	$rootScope.$on('visitor-location-data', function(event,data) {
		$scope.isLoading = true;
		c.server.get({
			action: 'getLocationActions',
			visitorLocationID: $rootScope.visitorLocationID
		}).then(function(results) {
			$scope.isLoading = false;
			c.data.popularTopics = results.data.popularTopics;
		});
	});
}
