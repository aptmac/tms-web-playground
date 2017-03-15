angular.module( 'apf.vmCpuModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-cpu', {
        templateUrl: 'src/vm-cpu/vm-cpu.html',
        controller: 'vmCpuController'
      });
  }]);
