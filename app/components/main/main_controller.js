"use strict";

app.controller("MainController", function (API, localStorageService, toaster, $scope, $rootScope, $state) {

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

    /**
     * @type {boolean}
     */
    $scope.showContactPanel = false;
  }

  /**
   * @param {object} form
   */
  $scope.contact = function (form) {
    console.log("Contacting from main...");
    form.loading = true;
    form.error = false;
    form.success = false;

    var payload = {
      name: form.name || "",
      number: form.number || "",
      email: form.email,
      message: form.message,
      hidden: form.hidden,
      // Required fields
      product_name: "",
      product_link: ""
    };

    API.post("messages", payload, {}, function () {
      form.loading = false;
      form.success = true;
      toaster.success("Thank you", "We will contact you soon!");
    }, function () {
      form.loading = false;
      toaster.error("Error", "Something went wrong, please try again.");
    });
  };

  /**
   * @event maahadEng.ContactController:contact
   *
   * @param {Event} event
   * @param {object} form
   */
  $scope.$on("maahadEng.ContactController:contact", function (event, form) {
    console.log("Recieving from main...");
    $scope.contact(form);
  });

  constructor();
});
