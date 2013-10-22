'use strict';

angular.module('IngredientPagesApp')
	.controller('IngListCtrl', ['$scope', '$http', 
  	function IngListCtrl($scope, $http) {
  	$http.get('ingredients/ingredients.json').success(function(data){
  		$scope.ing = data;
  	});
  }]);
