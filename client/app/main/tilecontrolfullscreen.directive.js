(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:tileControlFullscreen
   * @description
   * # tileControlFullscreen
   */
  angular.module('aircheck.app')
    .directive('tileControlFullscreen', tileControlFullscreen);

  tileControlFullscreen.$inject = [];
  function tileControlFullscreen() {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var dropdown = element.parents('.dropdown');

        element.on('click', function(){
          dropdown.trigger('click');
        });

      }
    };
  }

})();
