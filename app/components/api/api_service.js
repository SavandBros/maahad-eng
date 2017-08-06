"use strict";

app.service("API", function ($http, $window, $rootScope, localStorageService) {

  var service = {};

  var methods = ["post", "get", "put"];

  /**
   * @desc Get API url based on envirement
   */
  var getApiUrl = function () {
    // Localhost
    if (window.location.origin.indexOf(":9000") !== -1) {
      return "//php/api/";
    }
    // Production
    return "/api/";
  };

  function getHeaders() {
    var headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    if (localStorageService.get("authentication")) {
      headers.Authorization = localStorageService.get("authentication");
    }
    return headers;
  }

  function http(method, endpoint, payload, params, success, fail) {
    $http({
      url: getApiUrl() + endpoint,
      headers: getHeaders(),
      method: method,
      data: payload,
      params: params
    }).then(function (data) {
      success(data);
    }, function (data) {
      if (data.status === 403) {
        $rootScope.$broadcast("goNevis.API.http:unAuthAccess");
      }
      fail(data);
    });
  }

  angular.forEach(methods, function (method) {
    service[method] = function (endpoint, payload, params, success, fail) {
      return http(method, endpoint, payload, params, success, fail);
    };
  });

  return service;
});
