angular
  .module('apf.notificationsModule')
  .service('apf.notificationService', [
    function () {
      'use strict';
      this.toggleNotificationDrawerHidden = function () {};
      this.notificationGroups = [];
    }
  ]);
