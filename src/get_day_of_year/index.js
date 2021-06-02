"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../difference_in_calendar_days/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../start_of_year/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../parse/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_getDayOfYear = getDayOfYear;

var parse = _index6.default;
var startOfYear = _index4.default;
var differenceInCalendarDays = _index2.default;

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(dirtyDate) {
  var date = parse(dirtyDate);
  var diff = differenceInCalendarDays(date, startOfYear(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
exports.default = mod_getDayOfYear;
module.exports = exports.default;