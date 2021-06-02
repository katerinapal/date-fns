var mod_endOfToday = endOfToday;
import imp_endOfDay from "../end_of_day/index.js";
var endOfDay = imp_endOfDay

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday () {
  return endOfDay(new Date())
}

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
export default mod_endOfToday;
