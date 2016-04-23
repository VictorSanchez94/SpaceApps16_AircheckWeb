(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name aircheck.app
   * @description
   * # Nock Backend and Web app
   *
   * Main module of the application.
   */

  /*jshint -W079 */

  angular.module('aircheck.map', [])
    .config(configStates);

  configStates.$inject = ['$stateProvider'];
  function configStates($stateProvider) {
    $stateProvider
    //map
    .state('app.map', {
      url: '/map',
      controller: 'TrackingCtrl as trackingVM',
      templateUrl: 'app/tracking/tracking.html',
      resolve: {
        markers: getMarkers
      }
    })

    getMarkers.$inject = ['trackingFactory'];

    function getMarkers(trackingFactory) {
      return trackingFactory.getAll();
    };

  }
})();
