myApp.controller('portfolioController', function($scope, $http) {

	$scope.title = "Portfolio";

	$scope.query = "";

	$scope.stockPortfolio = ["rad","amzn"];
	$scope.stockArray = [];
	$scope.arrayCounter = 0;

	$scope.searchClick = function(){
		fetchPortfolio($scope.stockPortfolio);
	}

	function fetchPortfolio(sp){
		for(var i = 0; i < sp.length; i++){
		  $http.get("https://www.quandl.com/api/v3/datasets/WIKI/"+ sp[i] +".json?api_key=yVH-NKSna23zoz6byWy3")
			  .then(function(response){
					console.log(response.data.dataset);
					$scope.stockArray[$scope.arrayCounter++] = response.data.dataset;
			});
		}
	}
});
