"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../end_of_month/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../end_of_day/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../parse/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_isLastDayOfMonth = isLastDayOfMonth;

var parse = _index6.default;
var endOfDay = _index4.default;
var endOfMonth = _index2.default;

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
  var date = parse(dirtyDate);
  return endOfDay(date).getTime() === endOfMonth(date).getTime();
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
exports.default = mod_isLastDayOfMonth;
module.exports = exports.default;