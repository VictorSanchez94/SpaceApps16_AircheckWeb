(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:nativeTab
   * @description
   * # nativeTab
   */

  angular.module('aircheck.app')
    .directive('nativeTab', nativeTab);

  nativeTab.$inject = [];

  function nativeTab() {
    return {
      restrict: 'A',
      link: function( scope , element , attributes ){
        var $element = angular.element(element);
        $element.on('click', function(e) {
          e.preventDefault();
          $element.tab('show');
        });
      }
    };
  }

})();
