angular.module( 'apf.vmHeapAnalysisModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-heap-analysis', {
        templateUrl: 'src/vm-heap-analysis/vm-heap-analysis.html',
        controller: 'vmHeapAnalysisController'
      });
  }]);
