"use strict";

/**
 * @desc Product class
 */
app.service("Product", function () {
  return function (name, image, isSpecial, price) {
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {string}
     */
    this.image = image;
    /**
     * @type {boolean}
     */
    this.isSpecial = isSpecial;
    /**
     * @type {number}
     */
    this.price = price;
  };
});
