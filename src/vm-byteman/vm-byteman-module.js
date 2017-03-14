angular.module ('apf.vmBytemanModule',
  ['apf.vmByteman.rulesModule',
   'apf.vmByteman.metricsModule',
   'apf.vmByteman.graphModule'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-byteman', {
        redirectTo: '/vm-byteman/byteman'
      })
      .when('/vm-byteman/rules', {
        templateUrl: 'src/vm-byteman/rules/rules.html',
        controller: 'vmByteman.rulesController'
      })
      .when('/vm-byteman/metrics', {
        templateUrl: 'src/vm-byteman/metrics/metrics.html',
        controller: 'vmByteman.metricsController'
      })
      .when('/vm-byteman/graph', {
        templateUrl: 'src/vm-byteman/graph/graph.html',
        controller: 'vmByteman.graphController'
      });
  }]);
