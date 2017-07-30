"use strict";

app.controller("AdminController", function ($scope, API, localStorageService) {

  function constructor() {

  }

  $scope.setAuthentication = function (authentication) {
    localStorageService.set("authentication", authentication);
  };

  $scope.getAuthentication = function () {
    localStorageService.get("authentication");
  };

  constructor();
});
