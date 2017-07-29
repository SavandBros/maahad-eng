"use strict";

app.controller("HomeController", function (Product, $scope) {

  function constructor() {

    $scope.products = [
      new Product("Crusher Bucket", "assets/images/products/0.jpg", true, 120000),
      new Product("Vibro Ripper", "assets/images/products/1.jpg", true, 115000),
      new Product("Screen Bucket", "assets/images/products/2.jpg", true, 45000),
      new Product("Long Reach Boom", "assets/images/products/3.jpg"),
      new Product("Hydraulic Grapple", "assets/images/products/4.jpg"),
      new Product("Heavy Duty Bucket", "assets/images/products/5.jpg"),
    ];

    angular.element(".carousel").carousel({ interval: 3000 });
  }

  constructor();
});
