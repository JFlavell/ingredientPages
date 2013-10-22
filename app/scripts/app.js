'use strict';

angular.module('IngredientPagesApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ingList.html',
        controller: 'IngListCtrl'
      })
      .when('/ingredients/:ingredient', {
        templateUrl: 'views/ingDetail.html',
        controller: 'IngDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
