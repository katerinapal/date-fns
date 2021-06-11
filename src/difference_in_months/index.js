"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.differenceInMonths = undefined;

var _index = require("../parse/index.js");

var _index2 = require("../difference_in_calendar_months/index.js");

var _index3 = require("../compare_asc/index.js");

var mod_differenceInMonths = differenceInMonths;


/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = (0, _index.parse)(dirtyDateLeft);
  var dateRight = (0, _index.parse)(dirtyDateRight);

  var sign = (0, _index3.compareAsc)(dateLeft, dateRight);
  var difference = Math.abs((0, _index2.differenceInCalendarMonths)(dateLeft, dateRight));
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = (0, _index3.compareAsc)(dateLeft, dateRight) === -sign;
  return sign * (difference - isLastMonthNotFull);
}

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
exports.differenceInMonths = mod_differenceInMonths;