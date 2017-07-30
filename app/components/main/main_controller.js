"use strict";

app.controller("MainController", function (API, $scope, $rootScope, $state) {

  function constructor() {

    $scope.state = $state;

    /**
     * @desc Get setting variables
     */
    API.get("settings", {}, {}, function (data) {
      $rootScope.settings = data.data;
    });
  }

  constructor();
});
