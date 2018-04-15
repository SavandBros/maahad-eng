"use strict";

var app = angular.module("maahadEng", [
  "ngMap",
  "ui.router",
  "ui.bootstrap",
  "angular.vertilize",
  "toaster",
  "LocalStorageModule"
]);

app.config(function ($qProvider, $locationProvider, $compileProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $locationProvider.hashPrefix("");
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|telto):/);
});

app.run(function ($rootScope, $anchorScroll) {
  /**
   * @desc Global settings variable
   */
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
     * @type {String}
     */
    news: "https://news.almaahadeng.com",
    /**
     * @type {string}
     */
    title: ""
  };

  /**
   * @desc Scroll up on each page view
   */
  $rootScope.$on("$viewContentLoaded", function () {
    $anchorScroll();
  });

  /**
   * @desc Update title when state changes
   */
  $rootScope.$on("$stateChangeSuccess", function (event, toState) {
    $rootScope.set.title = toState.title;
  });
});
