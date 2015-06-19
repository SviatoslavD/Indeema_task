'use strict';

/**
 * @ngdoc overview
 * @name indeemaTaskApp
 * @description
 * # indeemaTaskApp
 *
 * Main module of the application.
 */
angular
  .module('indeemaTaskApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
