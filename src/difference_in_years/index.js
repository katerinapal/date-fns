"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../compare_asc/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../difference_in_calendar_years/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../parse/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_differenceInYears = differenceInYears;

var parse = _index6.default;
var differenceInCalendarYears = _index4.default;
var compareAsc = _index2.default;

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var dateRight = parse(dirtyDateRight);

  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight));
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
  return sign * (difference - isLastYearNotFull);
}

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
exports.default = mod_differenceInYears;
module.exports = exports.default;