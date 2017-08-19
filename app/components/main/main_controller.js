"use strict";

app.controller("MainController", function (API, localStorageService, $scope, $rootScope, $state) {

  function constructor() {

    $scope.state = $state;

    /**
     * @desc Get setting variables
     */
    API.get("settings", {}, {}, function (data) {
      $rootScope.settings = data.data;
    });

    /**
     * @type {boolean}
     */
    $scope.isAdmin = localStorageService.get("authentication");
  }

  constructor();
});
