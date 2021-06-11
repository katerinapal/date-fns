var mod_isSoLastWeek = isSoLastWeek;
import { isSameWeek as index_isSameWeek } from "../is_same_week/index.js";
import { addWeeks as index_addWeeks } from "../add_weeks/index.js";

/**
 * @category Week Helpers
 * @summary Is the given date so last week?
 *
 * @description
 * Is the given date so last week?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} so last week
 *
 * @example
 * // Is 7 December 2016 so last week?
 * var result = isSoLastWeek(
 *   new Date(2016, 12, 7)
 * )
 * //=> true
 */
function isSoLastWeek (dirtyDate, dirtyOptions) {
  return index_isSameWeek(new Date(), index_addWeeks(dirtyDate, 1), dirtyOptions);
}

/**
 * @category Week Helpers
 * @summary Is the given date so last week?
 *
 * @description
 * Is the given date so last week?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} so last week
 *
 * @example
 * // Is 7 December 2016 so last week?
 * var result = isSoLastWeek(
 *   new Date(2016, 12, 7)
 * )
 * //=> true
 */
export { mod_isSoLastWeek as isSoLastWeek };
