'use strict';

angular.module('IngredientPagesApp')
  .controller('IngDetailCtrl', ['$scope', '$routeParams', '$http',
  	function($scope, $routeParams, $http) {
			$http.get('ingredients/' + $routeParams.ingredient + '.json').success(function(data) {
  			$scope.ing = data;
  			$scope.length = $scope.ing.ingredient.links.length;

  			$scope.add = function(type, ingredient){
					$scope.ing.ingredient.links.push({name:type, ingredient: ingredient});
					$scope.length = $scope.ing.ingredient.links.length;
				}

				$scope.delete = function(index){
					$scope.ing.ingredient.links.splice(index, 1);
					$scope.length = $scope.ing.ingredient.links.length;
				}
  		});
	}]);