(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name aircheck.help.controller:HelpCtrl
   * @description
   * # HelpCtrl
   * Help page Controller
   */
  angular.module('aircheck.help')
    .controller('HelpCtrl', HelpCtrl);

  HelpCtrl.$inject = ['$translate'];
  function HelpCtrl($translate){

    var vm = this;

    vm.IntroOptions = {
      overlayOpacity: 0.8,
      showBullets: false,
      showStepNumbers: false,
      nextLabel: translateNext(),
      prevLabel: translatePrevious(),
      skipLabel: '<i class="zmdi zmdi-close"></i>',
      doneLabel: '<i class="zmdi zmdi-close"></i>',
      steps: [
        /*{
          element: 'header .branding',
          intro: '<h2 class="header">Branding Section</h2> <p>You can place your logo here.</p>',
          position: 'right'
        },*/
        //Collapse left bar button
        {
          element: 'header .sidebar-collapse',
          intro: translateCollapserSidebar()
        },
        /*{
          element: 'header .settings',
          intro: '<h2 class="header">Template Settings</h2> <p>You can change various things from this dropdown like colors and element visibility options.</p>'
        },*/
        /*{
          element: '#main-search',
          intro: '<h2 class="header">Main Search Field</h2> <p>You can assign you search engine function to this element.</p>'
        },*/
        /*{
          element: 'header .dropdown.users',
          intro: '<h2 class="header">User Requests</h2> <p>Just some dummy data here.</p>'
        },*/
        /*{
          element: 'header .dropdown.messages',
          intro: '<h2 class="header">Received Messages</h2> <p>Just some dummy data here again.</p>'
        },*/
        /*{
          element: 'header .dropdown.notifications',
          intro: '<h2 class="header">Notifications</h2> <p>Just some dummy data here again.</p>'
        },*/
        //User profile
        {
          element: 'header .dropdown.nav-profile',
          intro: translateUserProfile(),
        },
        /*{
          element: 'header .dropdown.language',
          intro: '<h2 class="header">Language Change</h2> <p>You can change current template language. Only for example purposes, just sidebar menu elements translated.</p>',
          position: 'left'
        },*/
        //Right notifications bar
        {
          element: '.toggle-right-sidebar',
          intro: translateSidebarNotifications(),
          position: 'left'
        },
        {
          element: '#sidebar',
          intro: translateLeftSidebar(),
          position: 'right'
        }
      ]
    };

    //Translation functions
    function translateNext() {
      return $translate.instant('Help.NEXT') + '<i class="fa fa-chevron-right"></i>'
    };

    function translatePrevious() {
      return '<i class="fa fa-chevron-left"></i>' + $translate.instant('Help.PREVIOUS');
    };

    function translateCollapserSidebar() {
      return '<h2 class="header">' + $translate.instant('Help.SIDEBAR_OFFSET_HEADER') + '</h2><p>' + $translate.instant('Help.SIDEBAR_OFFSET') + '</p>';
    };

    function translateUserProfile() {
      return '<h2 class="header">' + $translate.instant('Help.USER_PROFILE_HEADER') + '</h2> <p>' + $translate.instant('Help.USER_PROFILE') + '</p>';
    };

    function translateSidebarNotifications() {
      return '<h2 class="header">' + $translate.instant('Help.SIDEBAR_NOTIFICATIONS_HEADER') + '</h2> <p>' + $translate.instant('Help.SIDEBAR_NOTIFICATIONS') + '</p>';
    };

    function translateLeftSidebar() {
      return '<h2 class="header">' + $translate.instant('Help.LEFT_SIDEBAR_HEADER') + '</h2><p>' + $translate.instant('Help.LEFT_SIDEBAR') + '</p>';
    };

  };

})();

