var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'components/dashboard/dashboard.html',
          controller: 'dashboardController'
        })

        .state('single', {
          url: '/single',
          templateUrl: 'components/single/single.html',
          controller: 'singleController'
        })

        .state('about', {
          url: '/about',
          templateUrl: 'components/about/about.html',
          controller: 'aboutController'
        })

});
