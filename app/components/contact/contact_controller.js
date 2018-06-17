"use strict";

app.controller("ContactController", function ($scope, $rootScope) {

  $scope.contact = function (form) {
    console.log("Broadcasting from contact...");
    $rootScope.$broadcast("maahadEng.ContactController:contact", form);
  };
});
