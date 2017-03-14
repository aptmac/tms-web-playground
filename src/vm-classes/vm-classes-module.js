angular.module( 'apf.vmClassesModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-classes', {
        templateUrl: 'src/vm-classes/vm-classes.html',
        controller: 'vmClassesController'
      });
  }]);
