(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:pageLoader
   * @description
   * # pageLoader
   */
  angular.module('aircheck.app')
    .directive('pageLoader', pageLoader);

  pageLoader.$inject = ['$timeout'];

  function pageLoader($timeout) {
    return {
      restrict: 'AE',
      template: '<div class="dot1"></div><div class="dot2"></div>',
      link: function (scope, element) {
        element.addClass('hide');
        scope.$on('$stateChangeStart', function() {
          element.toggleClass('hide animate');
        });
        scope.$on('$stateChangeSuccess', function (event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout(function () {
              element.toggleClass('hide animate');
            }, 600);
          });
        });
      }
    };
  }

})();
