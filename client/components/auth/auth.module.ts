'use strict';

angular.module('nockBackendApp.auth', [
  'nockBackendApp.constants',
  'nockBackendApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
