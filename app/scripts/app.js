'use strict';

/**
 * @ngdoc overview
 * @name 30daysApp
 * @description
 * # 30daysApp
 *
 * Main module of the application.
 */
angular
  .module('30daysApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/task/index.html',
        controller: 'TaskCtrl',
        controllerAs: 'task'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
     
      .otherwise({
        redirectTo: '/'
      });
       $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('lime');
      $mdIconProvider.defaultIconSet('../styles/mdi.svg');
  });