"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSameMonth = undefined;

var _index = require("../parse/index.js");

var mod_isSameMonth = isSameMonth;


/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = (0, _index.parse)(dirtyDateLeft);
  var dateRight = (0, _index.parse)(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
exports.isSameMonth = mod_isSameMonth;