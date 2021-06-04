"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.differenceInYears = undefined;

var _index = require("../parse/index.js");

var _index2 = require("../difference_in_calendar_years/index.js");

var _index3 = require("../compare_asc/index.js");

var mod_differenceInYears = differenceInYears;


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
  var dateLeft = (0, _index.parse)(dirtyDateLeft);
  var dateRight = (0, _index.parse)(dirtyDateRight);

  var sign = (0, _index3.compareAsc)(dateLeft, dateRight);
  var difference = Math.abs((0, _index2.differenceInCalendarYears)(dateLeft, dateRight));
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = (0, _index3.compareAsc)(dateLeft, dateRight) === -sign;
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
exports.differenceInYears = mod_differenceInYears;