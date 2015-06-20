'use strict';

/*
 * Controller of the indeemaTaskApp
 */
angular.module('indeemaTaskApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.map = {
  		center: {
  			latitude: 49.839386, 
  			longitude: 24.032449
  		},
  		zoom: 16
  	};

  	$scope.markersList = [
  		{idKey: 'kinj', coords: {latitude: 49.839386, longitude: 24.032449}, message: 'Біля Коня'},//49.848195, 24.039181 vysokyj zamok
  		{idKey: 'firstPin', coords: {latitude: 46, longitude: -74}, message: 'firstPin'},
  		{idKey: 'secondPin', coords: {latitude: 47, longitude: -75}, message: 'secondPin'},
  		{idKey: 'theerdPin', coords: {latitude: 48, longitude: -76}, message: 'theerdPin'},
  		{idKey: 'fourthPin', coords: {latitude: 49, longitude: -77}, message: 'fourthPin'}	
  	];

  });
  