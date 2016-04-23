(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:offcanvasSidebar
   * @description
   * # offcanvasSidebar
   */
  angular.module('aircheck.app')
    .directive('offcanvasSidebar', offcanvasSidebar);

  offcanvasSidebar.$inject = [];
  function offcanvasSidebar() {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var app = angular.element('.appWrapper'),
            $window = angular.element(window),
            width = $window.width();

        element.on('click', function(e) {
          if (app.hasClass('offcanvas-opened')) {
            app.removeClass('offcanvas-opened');
          } else {
            app.addClass('offcanvas-opened');
          }
          e.preventDefault();
        });
      }
    };
  }

})();