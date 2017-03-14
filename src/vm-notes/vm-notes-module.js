angular.module( 'apf.vmNotesModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/vm-notes', {
        templateUrl: 'src/vm-notes/vm-notes.html',
        controller: 'vmNotesController'
      });
  }]);
