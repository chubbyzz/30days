'use strict';

/**
 * @ngdoc function
 * @name 30daysApp.controller:ChallengerShowCtrl
 * @description
 * # ChallengerShowCtrl
 * Controller of the 30daysApp
 */
angular.module('30daysApp')
  .controller('ChallengerShowCtrl',
    ['$scope', 'challengerFactory', '$routeParams',
      function ($scope, challengerFactory, $routeParams) {
        challengerFactory.findBySlug($routeParams.challenger)
          .success(function(challenger){
            $scope.challenger = challenger;
          })
          .error(function(data){

          })
      }
    ]
  );
