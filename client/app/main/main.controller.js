(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name aircheck.app.controller:MainCtrl
   * @description
   * # MainCtrl
   * Main Controller
   */
  angular.module('aircheck.app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$translate'];
  function MainCtrl($scope, $translate) {
    var vm = this;
    vm.config = {
      title: 'Aircheck',
      settings: {
        navbarHeaderColor: 'scheme-black',
        sidebarColor: 'scheme-black',
        brandingColor: 'scheme-black',
        activeColor: 'lightred-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false
      }
    };

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
      $scope.currentLanguage = langKey;
    };
    $scope.currentLanguage = $translate.proposedLanguage() || $translate.use();
  }

})();
