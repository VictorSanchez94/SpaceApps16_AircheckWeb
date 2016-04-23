(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:checkToggler
   * @description
   * # checkToggler
   */

  angular.module('aircheck.app')
    .directive('checkToggler', checkToggler);

  checkToggler.$inject = [];
  function checkToggler() {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        element.on('click', function(){

          if (element.hasClass('checked')) {
            element.removeClass('checked');
          } else {
            element.addClass('checked');
          }

        });
      }
    };
  }
})();
