"use strict";

app.controller("AdminController", function ($scope, API, localStorageService) {

  function constructor() {
    // Get settings
    API.get("settings", {}, {}, function (data) {
      $scope.settings = data.data;
    });
  }

  $scope.setAuthentication = function (authentication) {
    localStorageService.set("authentication", authentication);
  };

  $scope.getAuthentication = function () {
    localStorageService.get("authentication");
  };

  constructor();
});
