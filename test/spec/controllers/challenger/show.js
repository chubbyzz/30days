'use strict';

describe('Controller: ChallengerShowCtrl', function () {

  // load the controller's module
  beforeEach(module('30daysApp'));

  var ChallengerShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChallengerShowCtrl = $controller('ChallengerShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChallengerShowCtrl.awesomeThings.length).toBe(3);
  });
});
