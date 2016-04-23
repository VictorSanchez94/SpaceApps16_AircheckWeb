(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name aircheck.app.controller:NavCtrl
   * @description
   * # NavCtrl
   * Navigation Controller
   */
  angular.module('aircheck.app')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.$inject = [];
  function NavCtrl() {
    var vm = this;
    vm.oneAtATime = false;
    vm.status = {
      isFirstOpen: true,
      isSecondOpen: true,
      isThirdOpen: true
    };
  }

})();