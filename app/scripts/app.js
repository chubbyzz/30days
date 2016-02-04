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
    'ngMaterial',
    'ngNotify'
  ])
  .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/challenger/index.html',
      })
      .when('/new', {
        templateUrl: 'views/challenger/new.html',
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
