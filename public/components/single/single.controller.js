myApp.controller('singleController', function($scope, $http) {

	$scope.title = "Single";

	$scope.query = "";

	$scope.searchClick = function(){
		fetch();
	}

	function fetch(){
  $http.get("https://www.quandl.com/api/v3/datasets/WIKI/"+ $scope.query +".json?api_key=yVH-NKSna23zoz6byWy3")
	  .then(function(response){
			console.log(response.data.dataset);
			$scope.StockDetails = response.data.dataset;
			$scope.title = $scope.StockDetails.name;
			$scope.title = $scope.title.substring(0, $scope.title.length - 45);
		});
	}
});
