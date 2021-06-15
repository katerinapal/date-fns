var mod_isLastDayOfMonth = isLastDayOfMonth;
import { parse as index_parse } from "../parse/index.js";
import { endOfDay as index_endOfDay } from "../end_of_day/index.js";
import { endOfMonth as index_endOfMonth } from "../end_of_month/index.js";

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
function isLastDayOfMonth (dirtyDate) {
  var date = index_parse(dirtyDate)
  return index_endOfDay(date).getTime() === index_endOfMonth(date).getTime();
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
export { mod_isLastDayOfMonth as isLastDayOfMonth };
