"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endOfToday = undefined;

var _index = require("../end_of_day/index.js");

var mod_endOfToday = endOfToday;


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
function endOfToday() {
  return (0, _index.endOfDay)(new Date());
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
exports.endOfToday = mod_endOfToday;