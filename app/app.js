"use strict";

var app = angular.module("maahadEng", [
  "ngMap",
  "ui.router",
  "ui.bootstrap",
  "angular.vertilize",
  "toaster",
  "LocalStorageModule"
]);

app.run(function ($rootScope) {
  $rootScope.set = {
    date: new Date(),
    shop: "https://shop.almaahadeng.com"
  };
  /**
   * @desc Scroll up on each page view
   */
  $rootScope.$on('$viewContentLoaded', function () {
    $anchorScroll();
  });

app.config(function ($locationProvider) {
  $locationProvider.hashPrefix("");
});
