"use strict";

var app = angular.module("alMaahadEng", [
  "ui.router",
  "ui.bootstrap",
  "angular.vertilize",
  "toaster",
  "ngMap"
]);

app.run(function ($rootScope) {
  $rootScope.set = {
    date: new Date(),
    shop: "https://shop.almaahadeng.com"
  };
});

app.config(function ($locationProvider) {
  $locationProvider.hashPrefix("");
});
