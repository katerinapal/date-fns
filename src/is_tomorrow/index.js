"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTomorrow = undefined;

var _index = require("../start_of_day/index.js");

var mod_isTomorrow = isTomorrow;


/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(dirtyDate) {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (0, _index.startOfDay)(dirtyDate).getTime() === (0, _index.startOfDay)(tomorrow).getTime();
}

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
exports.isTomorrow = mod_isTomorrow;