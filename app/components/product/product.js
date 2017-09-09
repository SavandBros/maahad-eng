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
     * @type {string}
     */
    this.link = data.link;

    /**
     * @type {boolean}
     */
    this.isSpecial = data.is_special === "1";
  };
});
