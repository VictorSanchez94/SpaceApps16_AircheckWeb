(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:tileControlRefresh
   * @description
   * # tileControlRefresh
   */

  angular.module('aircheck.app')
    .directive('tileControlRefresh', tileControlRefresh);

  tileControlRefresh.$inject = [];
  function tileControlRefresh() {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var tile = element.parents('.tile');
        var dropdown = element.parents('.dropdown');

        element.on('click', function(){
          tile.addClass('refreshing');
          dropdown.trigger('click');
        });
      }
    };
  }

})();
