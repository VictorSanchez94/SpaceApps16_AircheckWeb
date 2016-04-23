(function() {

  'use strict';

  angular
    .module('aircheck.app')
    .factory('ModalFactory', ModalFactory);

  ModalFactory.$inject = ['$rootScope', '$translate', '$uibModal'];

  function ModalFactory($rootScope, $translate, $uibModal) {

    var factory = {
      remove: remove
    };

    /**
     * Create a function to open a remove confirmation modal
     * (ex. ng-click='myModalFn(name, arg1, arg2...)')
     *
     * @param  {Function} callback - callback, ran when remove is confirmed
     * @return {Function}     - the function to open the modal (ex. myModalFn)
     */
    function remove(del) {
      del = del || angular.noop;

      /**
       * Open a remove confirmation modal
       * @param  {String} name   - name or info to show on modal
       * @param  {All}           - any additional args are passed staight to del callback
       */
      return function() {
        var args = Array.prototype.slice.call(arguments);
        var name = args.shift();
        var deleteModal;

        $translate(['Modals.DELETE_TITLE', 'Modals.DELETE_BTN', 'Modals.CANCEL_BTN'])
          .then(function(translations) {
            $translate('Modals.DELETE_MSG', {
              name: name
            })
            .then(function(deleteMsg) {
              deleteModal = _openModal({
                modal: {
                  dismissable: true,
                  title: translations['Modals.DELETE_TITLE'],
                  html: deleteMsg,
                  buttons: [{
                    classes: 'btn-default',
                    text: translations['Modals.CANCEL_BTN'],
                    click: function(e) {
                      deleteModal.dismiss(e);
                    }
                  }, {
                    classes: 'btn-danger btn-ef btn-ef-3 btn-ef-3c',
                    text: '<i class="fa fa-trash-o"></i> ' + translations['Modals.DELETE_BTN'],
                    click: function(e) {
                      deleteModal.close(e);
                    }
                  }]
                }
              });
              deleteModal.result.then(function(event) {
                del.apply(event, args);
              });
            });
          })
      };
    };

    function _openModal(scope) {
      console.log('buttons:', scope.modal.buttons);
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $uibModal.open({
        templateUrl: 'app/main/modal/modal.html',
        scope: modalScope
      });
    };

    return factory;

  };

})();
