angular.module( 'apf.vmIoModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-io', {
        templateUrl: 'src/vm-io/vm-io.html',
        controller: 'vmIoController'
      });
  }]);
