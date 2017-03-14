angular.module( 'apf.vmNotificationsModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-notifications', {
        templateUrl: 'src/vm-notifications/vm-notifications.html',
        controller: 'vmNotificationsController'
      });
  }]);
