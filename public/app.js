var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'components/dashboard/dashboard.html',
          controller: 'dashboardController'
        })

        .state('about', {
          url: '/about',
          templateUrl: 'components/about/about.html',
          controller: 'aboutController'
        })

});

myApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
