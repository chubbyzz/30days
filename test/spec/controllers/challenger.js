'use strict';

describe('Controller: ChallengerCtrl', function () {

  // load the controller's module
  beforeEach(module('30daysApp'));

  var ChallengerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChallengerCtrl = $controller('ChallengerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChallengerCtrl.awesomeThings.length).toBe(3);
  });
});
