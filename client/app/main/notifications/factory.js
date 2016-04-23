(function () {
  'use strict';

  angular.module('aircheck.app')
    .factory('notificationsFactory', notificationsFactory);

  notificationsFactory.$inject = ['$timeout', 'PrivateRestangular', 'authFactory'];

  function notificationsFactory($timeout, PrivateRestangular, authFactory) {

    var notifications = [];

    var factory = {
      notifications: notifications,
      showSuccessNotification: showSuccessNotification,
      showWarningNotification: showWarningNotification,
      showErrorNotification: showErrorNotification,
      closeNotification: closeNotification
    };

    function showSuccessNotification(message) {
      var successNotification = {
        message: message,
        type: "success",
        timeout: 5000,
        icon: 'fa-check',
        closeable: true//,
        // closeall: false,
        // focus: false
      };

      notifications.push(successNotification);

      $timeout(function() {
        closeNotification(notifications.indexOf(successNotification))
      }, successNotification.timeout);
    };

    function showWarningNotification(message) {
      var warningNotification = {
        message: message,
        type: "warning",
        timeout: 0,
        icon: 'fa-warning',
        closeable: true//,
        // closeall: false,
        // focus: false
      };

      notifications.push(warningNotification);
    };

    function showErrorNotification(message) {
      var errorNotification = {
        message: message,
        type: "danger",
        timeout: 0,
        icon: 'fa-times',
        closeable: true//,
        // closeall: false,
        // focus: false
      };

      notifications.push(errorNotification);
    };

    function closeNotification(index) {
      notifications.splice(index, 1);
    };

    return factory;

  };

}());
