(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:todoEscape
   * @description
   * # todoEscape
   */
  angular.module('aircheck.app')
    .directive('todoEscape', todoEscape);

  todoEscape.$inject = [];
  function todoEscape() {
    var ESCAPE_KEY = 27;

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('keydown', function (event) {
          if (event.keyCode === ESCAPE_KEY) {
            scope.$apply(attrs.todoEscape);
          }
        });
      }
    };
  }

})();
