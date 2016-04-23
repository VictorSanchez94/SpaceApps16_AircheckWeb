(function() {

  'use strict';

  angular
    .module('aircheck.app')
    .factory('PrivateRestangular', PrivateRestangular);

  PrivateRestangular.$inject = ['Restangular', 'ENV'];
  function PrivateRestangular(Restangular, ENV) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(ENV.apiEndpoint + '/api/web');
    });
  }

})();