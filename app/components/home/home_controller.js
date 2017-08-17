"use strict";

app.controller("HomeController", function (Product, $scope) {

  function constructor() {
    /**
     * @desc Main products to show in list and slides
     */
    $scope.products = [
      new Product("Crusher Bucket", "assets/images/products/0.jpg", true, 120000),
      new Product("Rottery Drum Cutter", "assets/images/products/6.jpg", true, 100000),
      new Product("Vibro Ripper", "assets/images/products/1.jpg", true, 115000),
      new Product("Long Reach Boom", "assets/images/products/3.jpg", true),
      new Product("Screen Bucket", "assets/images/products/2.jpg", true, 45000),
      new Product("Mechanical Clamshell", "assets/images/products/7.jpg", true),
      new Product("Hydraulic Grapple", "assets/images/products/4.jpg"),
      new Product("Heavy Duty Bucket", "assets/images/products/5.jpg"),
      new Product("Mechanical 5 Finger Grapple", "assets/images/products/8.jpg"),
    ];

    /**
     * @desc Activate bootstrap carousel
     */
    angular.element(".carousel").carousel({ interval: 3000 });
  }

  constructor();
});
