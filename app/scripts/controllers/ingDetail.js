'use strict';

angular.module('IngredientPagesApp')
  .controller('IngDetailCtrl', ['$scope', '$routeParams', '$http',
  	function($scope, $routeParams, $http) {
			$http.get('ingredients/' + $routeParams.ingredient + '.json').success(function(data) {
  			$scope.ing = data;
  		});
  }]);
