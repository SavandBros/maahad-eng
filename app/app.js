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
    /**
     * @type {Date}
     */
    date: new Date(),
    /**
     * @type {String}
     */
    shop: "https://shop.almaahadeng.com",
    /**
     * @type {string|null}
     */
    title: null
  };
  /**
   * @desc Scroll up on each page view
   */
  $rootScope.$on('$viewContentLoaded', function () {
    $anchorScroll();
  });

  /**
   * @desc Update title when state changes
   */
  $rootScope.$on("$stateChangeSuccess", function (event, toState) {
    $rootScope.set.title = toState.title;
  });
});
