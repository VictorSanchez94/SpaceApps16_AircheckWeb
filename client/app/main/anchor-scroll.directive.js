(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:anchorScroll
   * @description
   * # anchorScroll
   */
  angular.module('aircheck.app')
    .directive('anchorScroll', anchorScroll);

  anchorScroll.$inject = ['$location', '$anchorScroll'];
  function anchorScroll($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.anchorScroll);
          $anchorScroll();
        });
      }
    };
  }

})();
