api.controller=function($scope,$rootScope,$location) {
  var c = this;
	$scope.data =  c.data;
	$location.search($scope.data.roleHomeSettings.homepage);
};