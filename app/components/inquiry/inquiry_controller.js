"use strict";

app.controller("InquiryController", function (API, $scope, $stateParams, toaster) {

  $scope.product = $stateParams.product;

  $scope.send = function (form) {
    form.loading = true;
    form.error = false;
    form.success = false;

    var payload = {
      name: form.name || "",
      number: form.number || "",
      email: form.email,
      message: form.message,
      product: $scope.product,
      product_link: $stateParams.productLink,
      hidden: form.hidden
    };

    console.log(payload);

    API.post("messages", payload, {}, function () {
      form.loading = false;
      toaster.success("Thank you", "We will contact you soon!");
    }, function () {
      form.loading = false;
      toaster.error("Error", "Something went wrong, please try again.");
    });
  };
});
