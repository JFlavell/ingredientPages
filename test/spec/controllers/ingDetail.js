'use strict';

describe('Controller: IngdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('IngredientPagesApp'));

  var IngdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngdetailCtrl = $controller('IngdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
