"use strict";

app.controller("MainController", function ($scope, $state) {

  function constructor() {

    $scope.state = $state;
  }

  constructor();
});
