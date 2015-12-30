(function () {
  'use strict';

  var mcGeoApp = angular.module('mc.geo');

  mcGeoApp.directive('mcGeolocation', McGeoDirective);
  McGeoDirective.$inject = ['$log'];

  function McGeoDirective ($log) {
    McGeoDirectiveCtrl.$inject = ['$scope', 'mc.geo.service'];

    return {
      restrict: 'A',
      templateUrl: 'views/geolocation/geo.html',
      controller: McGeoDirectiveCtrl
    };

    function McGeoDirectiveCtrl ($scope, GeoService) {
        GeoService.getGeoLocation().then(function (geoData) {
          $scope.coordinates = geoData.coords;

          $scope.map = {
            center: {
              latitude: $scope.coordinates.latitude,
              longitude: $scope.coordinates.longitude
            },
            zoom: 8
          };

          $scope.marker = {
            id: 1,
            options: {
              draggable: false
            },
            showLocation: function () {
              $log.debug('Location Clicked!');
            }
          };
        });
    }
  }

})();
