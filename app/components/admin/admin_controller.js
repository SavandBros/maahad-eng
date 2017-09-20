"use strict";

app.controller("AdminController", function ($scope, $uibModal, API, localStorageService, toaster) {

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

    /**
     * @desc Message listing
     * @type {boolean}
     */
    $scope.listingReadMessages = false;
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

  $scope.getMessages = function (read) {
    read = read || false;

    $scope.listingReadMessages = read;
    $scope.loading = true;

    API.get("messages", {}, { is_read: read }, function (data) {
      $scope.messages = data.data;
    }, handleError);
  };

  function getProducts() {
    $scope.loading = true;
    API.get("products", {}, {}, function (data) {
      $scope.products = data.data;
      // Parse values
      angular.forEach($scope.products, function (product) {
        product.price = parseInt(product.price);
        product.ordering = parseInt(product.ordering);
      });
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

  $scope.updateProducts = function (products) {
    angular.forEach(products, function (product) {
      API.post("products", product, {}, function (data) {
        if (data.data === 1) {
          toaster.info("", product.name + " updated!");
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
      $scope.getMessages();
    } else if (section === "products") {
      getProducts();
    } else if (section === "information") {
      getInformation();
    }
  };

  $scope.openMessage = function (message) {
    $scope.viewMessage = message;
    $uibModal.open({
      templateUrl: 'components/admin/message.html',
      scope: $scope
    });
  };

  $scope.markMessage = function (message, is_read) {
    API.put("messages", { is_read: is_read, id: message.id }, {},
      function () {
        message.is_read = is_read;
        $scope.getMessages($scope.listingReadMessages);
      }
    );
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
