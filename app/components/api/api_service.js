"use strict";

app.service("API", function ($http, $window, $rootScope, localStorageService) {

  var service = {};

  var endpoints = {
    settings: "settings"
  };

  var methods = ["post", "get", "put"];

  /**
   * @desc Get API url based on envirement
   */
  var getApiUrl = function () {
    // Localhost
    if (window.location.origin.indexOf(":")) {
      return "//php/api/";
    }
    // Production
    return "/api/";
  };

  function getUrlParam(endpoint, params) {
    var url = getApiUrl() + endpoint;

    if (endpoint.indexOf(":") !== -1) {
      angular.forEach(params, function (value, param) {
        if (endpoint.indexOf(":" + param) !== -1) {
          params[param] = params[param].replace("/:" + param, "");
          url = url.replace(":" + param, value);
        }
      });
    }

    return {
      url: url,
      param: url.params
    };
  }

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
    var urlParam = getUrlParam(endpoints[endpoint], params);

    $http({
      url: urlParam.url,
      headers: getHeaders(),
      method: method,
      data: payload,
      params: urlParam.params
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
