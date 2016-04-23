(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name aircheck.app
   * @description
   * # Nock Backend and Web app
   *
   * Main module of the application.
   */

  /*jshint -W079 */

var app = angular
  .module('aircheck.app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngMessages',
    'picardy.fontawesome',
    'ui.bootstrap',
    'ui.router',
    'angular-loading-bar',
    'angular-momentjs',
    'toastr',
    'pascalprecht.translate',
    'ngMaterial',
    'leaflet-directive',
    'wu.masonry',
    'angular-intro',
    'FBAngular',
    'ngTable',
    'restangular',
    'ui.utils',

    /*'aircheck.dashboard',
    'aircheck.userContacts',
    'aircheck.watchContacts',
    'aircheck.geofences',*/
    'aircheck.map',
    /*'aircheck.help',
    'aircheck.watches',*/
    'aircheck.config'
  ]);

  app.config(configTranslate);
  app.config(configStates);
  app.config(configRestangular);
  app.run(stateChanges);
  app.run(restangularInterceptor);

  stateChanges.$inject = ['$rootScope', '$state', '$stateParams'];
  function stateChanges($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {

      event.targetScope.$watch('$viewContentLoaded', function () {

        angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);

        setTimeout(function () {
          angular.element('#wrap').css('visibility','visible');

          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
      $rootScope.containerClass = toState.containerClass;
    });
  }

  configTranslate.$inject = ['$translateProvider'];
  function configTranslate($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }

  configStates.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configStates($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/map');

    $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/main/app.html'
    })
    /*.state('app.ui', {
      url: '/ui',
      template: '<div ui-view></div>'
    })*/
    /*
    //app core pages (errors, login,signup)
    .state('core', {
      abstract: true,
      url: '/core',
      template: '<div ui-view></div>'
    })
    //login
    .state('core.login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'views/tmpl/pages/login.html'
    })
    //signup
    .state('core.signup', {
      url: '/signup',
      controller: 'SignupCtrl',
      templateUrl: 'views/tmpl/pages/signup.html'
    })
    //forgot password
    .state('core.forgotpass', {
      url: '/forgotpass',
      controller: 'ForgotPasswordCtrl',
      templateUrl: 'views/tmpl/pages/forgotpass.html'
    })
    //page 404
    .state('core.page404', {
      url: '/page404',
      templateUrl: 'views/tmpl/pages/page404.html'
    })
    //page 500
    .state('core.page500', {
      url: '/page500',
      templateUrl: 'views/tmpl/pages/page500.html'
    })
    //page offline
    .state('core.page-offline', {
      url: '/page-offline',
      templateUrl: 'views/tmpl/pages/page-offline.html'
    })
    //locked screen
    .state('core.locked', {
      url: '/locked',
      templateUrl: 'views/tmpl/pages/locked.html'
    })
    //profile page
    .state('app.pages.profile', {
      url: '/profile',
      controller: 'ProfileCtrl',
      templateUrl: 'views/tmpl/pages/profile.html'
    })
    */
  }

  configRestangular.$inject = ['RestangularProvider', 'ENV'];
  function configRestangular(RestangularProvider, ENV) {
    RestangularProvider.setRestangularFields({
      id: '_id'
    });
  }

  restangularInterceptor.$inject = ['$window', '_', 'Restangular'];
  function restangularInterceptor($window, _, Restangular) {
    Restangular.addFullRequestInterceptor(function(elem, operation, what, url, headers) {
      if ($window.localStorage.token) {
        return {
          headers: _.extend(headers, {
            authorization: 'Bearer ' + $window.localStorage.token
          })
        };
      }
    });

    /* jshint ignore:start */
    //Sin este interceptor restangular se quejaría de que los getList vienen sin ser array
    Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      if (operation === 'getList') {
        extractedData = data.data;
        extractedData.metadata = data.metadata;
      } else {
        extractedData = data;
      }
      return extractedData;
    });
    /* jshint ignore:end */

  }
})();
