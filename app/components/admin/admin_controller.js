"use strict";

app.controller("AdminController", function ($scope, API, localStorageService, toaster) {

  function constructor() {
    /**
     * @desc Sections of admin page
     */
    $scope.sections = ["messages", "products", "information", "authenticate"];

    /**
     * @desc Current selected section
     */
    $scope.activateSection("messages");

    /**
     * @desc Product ordering
     * @type {array}
     */
    $scope.orderings = new Array(11);
  }

  /**
   * @desc Handle admin error responses
   */
  function handleError(data) {
    if (data.status === 401) {
      toaster.error("Error", data.data.error);
      $scope.activateSection("authenticate");
    } else {
      toaster.error("Error", "Something went wrong, please try again.");
    }
  }

  function getMessages() {
    $scope.loading = true;
    API.get("messages", {}, {}, function (data) {
      $scope.messages = data.data;
    }, handleError);
  }

  function getProducts() {
    $scope.loading = true;
    API.get("products", {}, {}, function (data) {
      $scope.products = data.data;
    }, handleError);
  }

  function getInformation() {
    $scope.loading = true;
    API.get("settings", {}, {}, function (data) {
      $scope.settings = data.data;
    }, handleError);
  }

  $scope.updateInformation = function (settings) {
    angular.forEach(settings, function (setting, key) {
      var payload = {
        setting: key,
        label: setting.label,
        value: setting.value
      };
      API.post("settings", payload, {}, function (data) {
        if (data.data === 1) {
          toaster.info("", setting.label + " updated!");
        }
      });
    });
  };

  $scope.activateSection = function (section) {
    if (!$scope.getAuthentication()) {
      $scope.currentSection = "authenticate";
      return;
    }

    $scope.currentSection = section;

    if (section === "messages") {
      getMessages();
    } else if (section === "products") {
      getProducts();
    } else if (section === "information") {
      getInformation();
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

  constructor();
});
