"use strict";

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("app", {
    abstract: true,
    template: "<ui-view/>"
  })

  .state("app.home", {
    url: "/:element",
    controller: "HomeController",
    templateUrl: "components/home/home.html"
  });

  $urlRouterProvider.otherwise("/");
});
