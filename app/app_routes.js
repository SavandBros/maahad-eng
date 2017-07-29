"use strict";

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("app", {
    abstract: true,
    template: "<ui-view/>"
  })

  .state("app.home", {
    url: "/",
    controller: "HomeController",
    templateUrl: "components/home/home.html"
  })

  .state("app.contact", {
    url: "/contact",
    controller: "ContactController",
    templateUrl: "components/contact/contact.html"

  .state("app.admin", {
    url: "/admin",
    controller: "AdminController",
    templateUrl: "components/admin/admin.html",
    title: "Admin - "
  });

  $urlRouterProvider.otherwise("/");
});
