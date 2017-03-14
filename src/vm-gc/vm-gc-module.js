angular.module( 'apf.vmGcModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-gc', {
        templateUrl: 'src/vm-gc/vm-gc.html',
        controller: 'vmGcController'
      });
  }]);
