'use strict';

angular
	.module('indeemaTaskApp')
	.factory('geocodingService', geocodingService);

	geocodingService.$inject = ['$http'];
	function geocodingService($http) {

		var apiKey = 'AIzaSyCVnpDbWWlqLIWQud6Ud1DiSpOht0LBx_M';

		return {
			fetchGeolocation: fetchGeolocation
		};

		// Function to fetch geolocation coordinates as latitude and longitude
		function fetchGeolocation(address) {
			return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address.house+address.str+','+address.city+'&key='+apiKey)
				.then(function(results) {
					return results;
				})
				.catch(function(error) {
					return error;
				})
		};
	};