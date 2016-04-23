(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:activateButton
   * @description
   * # activateButton
   */

  angular.module('aircheck.app')
    .directive('activateButton', activateButton);

  activateButton.$inject = [];

  function activateButton() {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var activatedClass = 'btn-activated';
        var status = attrs.activateButton;
        var activate = function() {
          element.addClass(activatedClass);
          setTimeout(function() {
            element.removeClass(activatedClass);
          }, 1000 );
        };

        element.on('click', function() {
          if (!element.hasClass(activatedClass) && status === 'success') {
            element.addClass('btn-activated-success');
            setTimeout(function() {
              element.removeClass('btn-activated-success');
            }, 1000 );
          } else if (!element.hasClass(activatedClass) && status === 'error') {
            element.addClass('btn-activated-error');
            setTimeout(function() {
              element.removeClass('btn-activated-error');
            }, 1000 );
          } else if (!element.hasClass(activatedClass)) {
            activate();
          }
        });
      }
    };
  }

})();
