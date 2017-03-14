angular.module( 'apf.vmCompilerModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-compiler', {
        templateUrl: 'src/vm-compiler/vm-compiler.html',
        controller: 'vmCompilerController'
      });
  }]);
