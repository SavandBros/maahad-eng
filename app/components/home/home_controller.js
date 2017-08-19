"use strict";

app.controller("HomeController", function (API, Product, $scope) {

  function constructor() {
    /**
     * @type {array}
     */
    $scope.products = [];

    /**
     * @desc Get products
     */
    API.get("products", {}, {}, function (data) {
      angular.forEach(data.data, function (product) {
        $scope.products.push(new Product(product));
      });
    });

    /**
     * @desc Activate bootstrap carousel
     */
    angular.element(".carousel").carousel({ interval: 3000 });
  }

  constructor();
});
