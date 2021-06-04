"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLastDayOfMonth = undefined;

var _index = require("../parse/index.js");

var _index2 = require("../end_of_day/index.js");

var _index3 = require("../end_of_month/index.js");

var mod_isLastDayOfMonth = isLastDayOfMonth;


/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate) {
  var date = (0, _index.parse)(dirtyDate);
  return (0, _index2.endOfDay)(date).getTime() === (0, _index3.endOfMonth)(date).getTime();
}

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
exports.isLastDayOfMonth = mod_isLastDayOfMonth;