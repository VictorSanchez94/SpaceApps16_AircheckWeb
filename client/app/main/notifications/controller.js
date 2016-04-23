(function() {

  'use strict';

  angular.module('aircheck.app')
    .controller('NotificationsCtrl', NotificationsCtrl);

  NotificationsCtrl.$inject = ['notificationsFactory'];

  function NotificationsCtrl(notificationsFactory) {

    var vm = this;
    vm.notifications = notificationsFactory.notifications;
    vm.closeNotification = notificationsFactory.closeNotification;

  };

})();
