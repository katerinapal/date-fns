"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuarter = undefined;

var _index = require("../parse/index.js");

var mod_getQuarter = getQuarter;


/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(dirtyDate) {
  var date = (0, _index.parse)(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
exports.getQuarter = mod_getQuarter;