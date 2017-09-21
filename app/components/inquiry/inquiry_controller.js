"use strict";

app.controller("InquiryController", function (API, $scope, $stateParams, toaster) {

  $scope.params = $stateParams;

  $scope.send = function (form) {
    form.loading = true;
    form.error = false;
    form.success = false;

    var payload = {
      name: form.name || "",
      number: form.number || "",
      email: form.email,
      message: form.message,
      product_name: $scope.params.name,
      product_link:$scope.params.link,
      hidden: form.hidden
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
});
