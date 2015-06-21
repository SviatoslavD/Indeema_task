'use strict';

/*
 * Controller of the indeemaTaskApp
 */
angular
  .module('indeemaTaskApp')
  .controller('MainCtrl', MainCtrl); 

  MainCtrl.$inject = ['geocodingService', '$scope'];
  function MainCtrl (geocodingService, $scope) {

    // hardcoded 5 address from Lviv
    var lvivAddress = [{
        'house': 109,
        'str': 'Zelena',
        'city': 'Lviv'
      }, {
        'house': 32,
        'str': 'Storojenka',
        'city': 'Lviv'
      }, {
        'house': 1,
        'str': 'Rynok',
        'city': 'Lviv'
      }, {
        'house': 28,
        'str': 'Svobody',
        'city': 'Lviv'
      }, {
        'house': 9,
        'str': 'Valova',
        'city': 'Lviv'
      }];

    // Map center
    $scope.map = {
      center: {
        latitude: 49.841029, 
        longitude: 24.028214, 
      },
      zoom: 12
    };

    $scope.markersList = []; // fetched geographic coordinates

    init(); // initiate coordinates fetching

    function init() {
      for(var n = 0; n < lvivAddress.length; n++) {
        getCoordinates(lvivAddress[n]);
      };      
    };

    // fetch all 5 places
    function getCoordinates(address) {
      return geocodingService.fetchGeolocation(address)
          .then(function(results) {
              $scope.markersList.push({
                idKey: results.data.results[0].place_id,
                coords: {
                  latitude: results.data.results[0].geometry.location.lat, 
                  longitude: results.data.results[0].geometry.location.lng 
                },
                message: results.data.results[0].formatted_address
              });
              return $scope.markersList;
          });
    };
};
  