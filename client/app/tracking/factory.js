(function () {
  'use strict';

  angular.module('aircheck.map')
    .factory('trackingFactory', trackingFactory);

  trackingFactory.$inject = ['PrivateRestangular', 'authFactory', '$http', '$q', '$window', '$rootScope'];

  function trackingFactory(PrivateRestangular, authFactory, $http, $q, $window, $rootScope) {

    var commonUrl = 'http://40.68.44.128:8080/';

    var factory = {
      getAllUsers: getAllUsers,
      getPosition: getPosition,
      getDangerZones: getDangerZones,
      searchCity: searchCity
    };

    function getAllUsers (lat, lng, radius) {
      var $d = $q.defer();
      var promise = [];

      var options = {
        method: 'GET',
        url: commonUrl + 'close_users?latitude=' + lat + '&longitude=' + lng + '&radius=' + radius
      };
      promise.push($http(options));

      $q.all(promise).then(function (promiseRes) {
        $d.resolve(promiseRes);
      });
      return $d.promise;


      /*$http.get(commonUrl + 'close_users?latitude=' + lat + '&longitude=' + lng + '&radius=' + radius)
        .then(function (data) {
          console.log("USERS FACTORY", data.data);
          return data.data;
        })
        .catch(function (err) {
          console.log('getAllUsers ERROR(' + err.code + '): ' + err.message);
        });*/
    };

    function getPosition() {
      var deferred = $q.defer();

      if (!$window.navigator) {
        $rootScope.$apply(function() {
          deferred.reject(new Error("Geolocation is not supported"));
        });
      } else {
        $window.navigator.geolocation.getCurrentPosition(function (position) {
          $rootScope.$apply(function() {
            deferred.resolve(position);
          });
        }, function (error) {
          $rootScope.$apply(function() {
            deferred.reject(error);
          });
        });
      }
      return deferred.promise;
    };

    function getDangerZones (latitude, longitude) {
      var $d = $q.defer();
      var promises = [];
      for(var i=-2; i<3; i+=1) {
        for(var j=-2; j<3; j+=1) {
          var lat = latitude + i;
          var lng = longitude + j;
          var options = {
            method: 'GET',
            url: commonUrl + 'risk_value?latitude=' + lat + '&longitude=' + lng
          };
          promises.push($http(options));
        }
      }
      $q.all(promises).then(function (promisesRes) {
        $d.resolve(promisesRes);
      });
      return $d.promise;
    };

    function searchCity (name) {
      var $d = $q.defer();
      var promise = [];
      var options = {
        method: 'GET',
        url: 'http://maps.google.com/maps/api/geocode/json?address=' + name + '&sensor=false'
      };
      promise.push($http(options));

      $q.all(promise).then(function (promiseRes) {
        $d.resolve(promiseRes);
      });
      return $d.promise;
    };

    return factory;

  };

}());
