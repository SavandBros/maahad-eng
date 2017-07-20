"use strict";

app.controller("HomeController", function ($scope) {

  function constructor() {

    $scope.products = new Array(6);

    angular.element(".carousel").carousel({ interval: 3000 });
  }

  constructor();
});
