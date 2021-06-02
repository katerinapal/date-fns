"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../parse/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_setDayOfYear = setDayOfYear;

var parse = _index2.default;

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear(dirtyDate, dirtyDayOfYear) {
  var date = parse(dirtyDate);
  var dayOfYear = Number(dirtyDayOfYear);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date;
}

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
exports.default = mod_setDayOfYear;
module.exports = exports.default;