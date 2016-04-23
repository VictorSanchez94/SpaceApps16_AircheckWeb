(function() {
  'use strict';

/**
 * @ngdoc directive
 * @name aircheck.app.directive:TileControlClose
 * @description
 * # TileControlClose
 */
  angular.module('aircheck.app')
    .directive('tileControlClose', tileControlClose);

  tileControlClose.$inject = [];
  function tileControlClose() {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');

        element.on('click', function() {
          tile.addClass('closed').fadeOut();
        });
      }
    };
  }

})();
