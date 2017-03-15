angular.module( 'apf.vmOverviewModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-overview', {
        templateUrl: 'src/vm-overview/vm-overview.html',
        controller: 'vmOverviewController'
      });
  }]);
