"use strict";

app.controller("ContactController", function ($scope) {

  $scope.send = function (form) {
    form.loading = true;
  };
});
