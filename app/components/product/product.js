"use strict";

/**
 * @desc Product class
 */
app.service("Product", function () {
  return function (data) {

    /**
     * @type {string}
     */
    this.name = data.name;

    /**
     * @type {string}
     */
    this.detail = data.detail;

    /**
     * @type {string}
     */
    this.image = data.image;

    /**
     * @type {number}
     */
    this.price = parseInt(data.price);

    /**
     * @type {boolean}
     */
    this.isSpecial = data.is_special === "1";
  };
});
