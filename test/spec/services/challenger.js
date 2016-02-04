'use strict';

describe('Service: challenger', function () {

  // load the service's module
  beforeEach(module('30daysApp'));

  // instantiate service
  var challenger;
  beforeEach(inject(function (_challenger_) {
    challenger = _challenger_;
  }));

  it('should do something', function () {
    expect(!!challenger).toBe(true);
  });

});
