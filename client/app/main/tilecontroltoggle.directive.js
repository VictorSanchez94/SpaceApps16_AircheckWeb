(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:tileControlToggle
   * @description
   * # tileControlToggle
   */
  angular.module('aircheck.app')
    .directive('tileControlToggle', tileControlToggle);

  tileControlToggle.$inject = [];
  function tileControlToggle() {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');

        element.on('click', function(){
          tile.toggleClass('collapsed');
          tile.children().not('.tile-header').slideToggle(150);
        });
      }
    };
  }

})();
