angular.module ('apf.vmThreadsModule',
  ['apf.vmThreads.countModule',
   'apf.vmThreads.timelineModule',
   'apf.vmThreads.locksModule',
   'apf.vmThreads.stacktraceModule'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-threads', {
        redirectTo: '/vm-threads/count'
      })
      .when('/vm-threads/count', {
        templateUrl: 'src/vm-threads/count/count.html',
        controller: 'vmThreads.countController'
      })
      .when('/vm-threads/timeline', {
        templateUrl: 'src/vm-threads/timeline/timeline.html',
        controller: 'vmThreads.timelineController'
      })
      .when('/vm-threads/locks', {
        templateUrl: 'src/vm-threads/locks/locks.html',
        controller: 'vmThreads.locks'
      })
      .when('/vm-threads/stacktrace', {
        templateUrl: 'src/vm-threads/stacktrace/stacktrace.html',
        controller: 'vmThreads.stacktraceController'
      });
  }]);
