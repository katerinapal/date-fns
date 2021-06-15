"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayOfYear = undefined;

var _index = require("../parse/index.js");

var _index2 = require("../start_of_year/index.js");

var _index3 = require("../difference_in_calendar_days/index.js");

var mod_getDayOfYear = getDayOfYear;


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
  var date = (0, _index.parse)(dirtyDate);
  var diff = (0, _index3.differenceInCalendarDays)(date, (0, _index2.startOfYear)(date));
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
exports.getDayOfYear = mod_getDayOfYear;