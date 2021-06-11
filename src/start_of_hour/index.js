"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startOfHour = undefined;

var _index = require("../parse/index.js");

var mod_startOfHour = startOfHour;


/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(dirtyDate) {
  var date = (0, _index.parse)(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}

/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
exports.startOfHour = mod_startOfHour;