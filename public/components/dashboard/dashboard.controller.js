myApp.controller('dashboardController', function($scope, $http) {

	$scope.title = "Dashboard";

	$scope.query = "";

	$scope.stockArray = [];
	$scope.arrayCounter = 0;

	$scope.searchClick = function(){
		fetch();
	}

	function fetch(){
  $http.get("https://www.quandl.com/api/v3/datasets/WIKI/"+ $scope.query +".json?api_key=yVH-NKSna23zoz6byWy3")
	  .then(function(response){
			console.log(response.data.dataset);
			$scope.stockArray[$scope.arrayCounter++] = response.data.dataset;
		});
	}
});
