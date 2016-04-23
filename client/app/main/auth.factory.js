(function() {

  'use strict';

  angular
    .module('aircheck.app')
    .factory('authFactory', authFactory);

  authFactory.$inject = [];

  function authFactory() {
    var _currentUser = {      //Fake user now
      _id: '123456789012345678901234',
      name: ' Fake Auth User',
      email: 'fake@user.com',
      password: 'user'
    };

    var service = {
      getCurrentUser: getCurrentUser,
      isAuthenticated: isAuthenticated,
      setToken: setToken,
      getToken: getToken,
      removeToken: removeToken
    };

    /**
     * Gets all available info on authenticated user
     *
     * @return {Object} user
     */
    function getCurrentUser() {
      return _currentUser;
    }

    // Is the current user authenticated?
    function isAuthenticated() {
      if (_currentUser) {
        if (service.getToken()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    /**
     * Get auth token
     */
    function getToken() {
      return $window.localStorage.token;
    }

    function setToken(token) {
      $window.localStorage.token = token;
    }

    function removeToken() {
      delete $window.localStorage.token;
    }

    return service;
  }

})();
