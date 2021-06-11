"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.differenceInCalendarQuarters = undefined;

var _index = require("../get_quarter/index.js");

var _index2 = require("../parse/index.js");

var mod_differenceInCalendarQuarters = differenceInCalendarQuarters;


/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = (0, _index2.parse)(dirtyDateLeft);
  var dateRight = (0, _index2.parse)(dirtyDateRight);

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = (0, _index.getQuarter)(dateLeft) - (0, _index.getQuarter)(dateRight);

  return yearDiff * 4 + quarterDiff;
}

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
exports.differenceInCalendarQuarters = mod_differenceInCalendarQuarters;