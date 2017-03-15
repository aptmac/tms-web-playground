angular.module ('apf.vmProfilerModule',
  ['apf.vmProfiler.tableModule',
   'apf.vmProfiler.treemapModule'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-profiler', {
        redirectTo: '/vm-profiler/table'
      })
      .when('/vm-profiler/table', {
        templateUrl: 'src/vm-profiler/table/table.html',
        controller: 'vmProfiler.tableController'
      })
      .when('/vm-profiler/treemap', {
        templateUrl: 'src/vm-profiler/treemap/treemap.html',
        controller: 'vmProfiler.treemapController'
      });
  }]);
