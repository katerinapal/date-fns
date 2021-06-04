var mod_getDayOfYear = getDayOfYear;
import { parse as index_parse } from "../parse/index.js";
import { startOfYear as index_startOfYear } from "../start_of_year/index.js";
import { differenceInCalendarDays as index_differenceInCalendarDays } from "../difference_in_calendar_days/index.js";

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
function getDayOfYear (dirtyDate) {
  var date = index_parse(dirtyDate)
  var diff = index_differenceInCalendarDays(date, index_startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
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
export { mod_getDayOfYear as getDayOfYear };
