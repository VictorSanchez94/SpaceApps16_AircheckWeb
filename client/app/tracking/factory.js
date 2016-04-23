(function () {
  'use strict';

  angular.module('aircheck.map')
    .factory('trackingFactory', trackingFactory);

  trackingFactory.$inject = ['PrivateRestangular', 'authFactory', '$http'];

  function trackingFactory(PrivateRestangular, authFactory, $http) {

    //FAKE DATA. REMOVE AFTER SERVER CALLS WORKING
    var markers = [
      {id: 2, lat: 41.655297, lng:-0.8805937},
      {id: 3, lat: 41.655299, lng:-0.8798},
      {id: 4, lat: 41.655291, lng:-0.88},
      {id: 7, lat: 42, lng:-0.8806},
      {id: 9, lat: 45, lng:-0.8806},
      {id: 5, lat: 41.655297, lng:-0.8805937},
      {id: 8, lat: 41.655290, lng:-0.8805932},
      {id: 12, lat: 41.655298, lng:-0.8805941},
      {id: 1, lat: 41.655288, lng:-0.8805948}
    ];

    var factory = {
      getAll: getAll,
      findById: findById,
      test: test
    };

    function getAll() {
      return markers;
    };

    function findById (id) {
      var aux = [];
      for ( var i = 0; i < markers.length; i++ ) {
        if(markers[i].id == id) {
          aux.push(markers[i]);
        }
      }
      return aux;
    };

    /*function test() {
      $http({
        method: 'GET',
        url: 'http://40.68.44.128:8080/test',
        //params: 'limit=10, sort_by=created:desc',
        headers: 'Access-Control-Allow-Origin: *'
      })
      .then(function(a){
        console.log("AAAAA", a);
          return a;
      })
      .catch(function(err) {
        console.log("ERR", err);
      });*/

    return factory;

  };

}());
