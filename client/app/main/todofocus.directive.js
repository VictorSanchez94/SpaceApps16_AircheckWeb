(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:todoFocus
   * @description
   * # todoFocus
   */
  angular.module('aircheck.app')
    .directive('todoFocus', todoFocus);

  todoFocus.$inject = ['$timeout'];
  function todoFocus($timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.todoFocus, function (newVal) {
          if (newVal) {
            $timeout(function () {
              element[0].focus();
            }, 0, false);
          }
        });
      }
    };
  }

})();
