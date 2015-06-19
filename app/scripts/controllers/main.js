'use strict';

/**
 * @ngdoc function
 * @name indeemaTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indeemaTaskApp
 */
angular.module('indeemaTaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
