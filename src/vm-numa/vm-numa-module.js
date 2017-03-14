angular.module( 'apf.vmNumaModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-numa', {
        templateUrl: 'src/vm-numa/vm-numa.html',
        controller: 'vmNumaController'
      });
  }]);
