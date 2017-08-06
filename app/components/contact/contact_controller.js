"use strict";

app.controller("ContactController", function (API, $scope, toaster) {

  $scope.send = function (form) {
    form.loading = true;
    form.error = false;
    form.success = false;

    var payload = {
      name: form.name || "",
      number: form.number || "",
      email: form.email,
      message: form.message
    };

    API.post("messages", payload, {}, function () {
      form.loading = false;
      toaster.success("Thank you", "We will contact you soon!");
    }, function () {
      form.loading = false;
      toaster.error("Error", "Something went wrong, please try again.");
    });
  };
});
