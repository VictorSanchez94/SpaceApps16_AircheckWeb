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

  angular.module('aircheck.help', [])
    .config(configStates);

  configStates.$inject = ['$stateProvider'];
  function configStates($stateProvider) {
    $stateProvider
    //dashboard
    .state('app.help', {
      url: '/help',
      controller: 'HelpCtrl as helpVM',
      templateUrl: 'app/help/help.html'
    })
  }
})();
