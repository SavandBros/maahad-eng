"use strict";

app.controller("AdminController", function ($scope, API, localStorageService) {

  function constructor() {
    /**
     * @desc Sections of admin page
     */
    $scope.sections = ["messages", "information", "authenticate"];

    /**
     * @desc Current selected section
     */
    $scope.activateSection("messages");
  }

  $scope.activateSection = function (section) {
    if (!$scope.getAuthentication()) {
      $scope.currentSection = "authenticate";
      return;
    }

    $scope.currentSection = section;

    if (section === "messages") {
      $scope.getMessages();
    }
  };

  $scope.setAuthentication = function (authentication) {
    localStorageService.set("authentication", authentication);

    if (authentication) {
      $scope.activateSection("messages");
    }
  };

  $scope.getAuthentication = function () {
    return localStorageService.get("authentication");
  };

  $scope.getMessages = function () {
    $scope.loading = true;
    API.get("messages", {}, {}, function (data) {
      $scope.messages = data.data;
    });
  };

  constructor();
});
