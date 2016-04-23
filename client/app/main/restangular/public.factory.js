(function() {

  'use strict';

  angular
    .module('aircheck.app')
    .factory('PublicRestangular', PublicRestangular);

  PublicRestangular.$inject = ['Restangular', 'ENV'];
  function PublicRestangular(Restangular, ENV) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(ENV.apiEndpoint + '/');
    });
  }

})();