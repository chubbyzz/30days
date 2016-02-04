'use strict';

/**
 * @ngdoc service
 * @name 30daysApp.challenger
 * @description
 * # challenger
 * Factory in the 30daysApp.
 */
angular.module('30daysApp')
  .factory('challengerFactory', function ($http) {

    var base = "http://localhost:3000/api/v1";
    var url = base+"/challengers";

    var factory = {
      all: function() {
        return $http.get(url);
      },
      save: function(challenger) {
        return $http.post(url + "/create", {challenger: challenger});
      }
    };
    return factory;
  });
