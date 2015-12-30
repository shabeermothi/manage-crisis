(function () {
  'use strict';

  angular.module('mc.geo')
      .factory('mc.geo.service', MCGeoService);

  MCGeoService.$inject = ['$rootScope', '$log', '$q', '$http', '$window'];

  function MCGeoService ($rootScope, $log, $q, $http, $window) {
    var geoServiceResponse = {
        getGeoLocation: getGeoLocation
    };

    return geoServiceResponse;

    function navigatorSupported () {
      return 'geolocation' in $window.navigator;
    }

    function getGeoLocation () {
        var deferred = $q.defer();

        if (navigatorSupported()) {
            $window.navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.$apply(function () {
                  deferred.resolve(position);
                });
            }, function (error) {
              $rootScope.$apply(function () {
                deferred.reject(position);
              });
            });

            return deferred.promise;
        }
    }
  }
})();
