"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../start_of_day/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_isToday = isToday;

var startOfDay = _index2.default;

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime();
}

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
exports.default = mod_isToday;
module.exports = exports.default;