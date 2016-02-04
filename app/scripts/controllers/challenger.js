'use strict';

/**
 * @ngdoc function
 * @name 30daysApp.controller:ChallengerCtrl
 * @description
 * # ChallengerCtrl
 * Controller of the 30daysApp
 */
angular.module('30daysApp')
  .controller('ChallengerCtrl', ['$scope', 'challengerFactory', '$location', 'ngNotify', function ($scope, challengerFactory, $location, ngNotify) {
    $scope.save = function(){
      challengerFactory.save($scope.challenger)
        .success(function(data){
          ngNotify.set("Challenger save successfully", 'success');
          $location.path('#/');
        })
        .error(function(data){
          console.log(data);
        });
    };



    challengerFactory.all()
      .success(function (challengers) {
        $scope.challengers = challengers;
      });
  }]);
