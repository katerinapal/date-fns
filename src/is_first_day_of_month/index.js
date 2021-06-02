"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../parse/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_isFirstDayOfMonth = isFirstDayOfMonth;

var parse = _index2.default;

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth(dirtyDate) {
  return parse(dirtyDate).getDate() === 1;
}

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
exports.default = mod_isFirstDayOfMonth;
module.exports = exports.default;