(function() {

  'use strict';

  angular.module('aircheck.app')
    .factory('_', lodash);

  function lodash() {
    return window._; // assumes underscore has already been loaded on the page
  }

})();