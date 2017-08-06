"use strict";

app.controller("ContactController", function (API, $scope) {

  $scope.send = function (form) {
    form.loading = true;

    var payload = {
      name: form.name || "",
      number: form.number || "",
      email: form.email,
      message: form.message
    };

    API.post("messages", payload, {}, function () {
      form.loading = false;
      form.success = true;
    }, function () {
      form.loading = false;
      form.error = true;
    });
  };
});
