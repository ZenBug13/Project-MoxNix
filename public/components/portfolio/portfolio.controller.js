myApp.controller('portfolioController', function($scope, $http) {

	$scope.title = "Portfolio";

	$scope.query = "";

	$scope.stockPortfolio = [];
	$scope.arrayPortCounter = 0;
	$scope.stockArray = [];
	$scope.arrayStockCounter = 0;

	$scope.getTimes=function(){
     return new Array($scope.arrayStockCounter);
	 };

	$scope.searchClick = function(){
		fetchPortfolio($scope.stockPortfolio);
	}

	$scope.addStock = function(){
		$scope.stockPortfolio[$scope.arrayPortCounter++] = $scope.query;
		console.log($scope.stockPortfolio);
	}

	function fetchPortfolio(sp){
		for(var i = 0; i < sp.length; i++){
		  $http.get("https://www.quandl.com/api/v3/datasets/WIKI/"+ sp[i] +".json?api_key=yVH-NKSna23zoz6byWy3")
			  .then(function(response){
					console.log(response.data.dataset);
					$scope.stockArray[$scope.arrayStockCounter++] = response.data.dataset;
			});
		}
	}
});
