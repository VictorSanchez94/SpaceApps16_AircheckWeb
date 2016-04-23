(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name aircheck.app.directive:setNgAnimate
   * @description
   * # setNgAnimate
   */
  angular.module('aircheck.app')
    .directive('setNgAnimate', setNgAnimate);

  setNgAnimate.$inject = ['$animate'];
  function setNgAnimate($animate) {
    return {
      link: function ($scope, $element, $attrs) {
        $scope.$watch( function() {
          return $scope.$eval($attrs.setNgAnimate, $scope);
        }, function(valnew){
          console.log('Directive animation Enabled: ' + valnew);
          $animate.enabled(!!valnew, $element);
        });
      }
    };
  }

})();
