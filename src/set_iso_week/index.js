"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../get_iso_week/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../parse/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_setISOWeek = setISOWeek;

var parse = _index4.default;
var getISOWeek = _index2.default;

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(dirtyDate, dirtyISOWeek) {
  var date = parse(dirtyDate);
  var isoWeek = Number(dirtyISOWeek);
  var diff = getISOWeek(date) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
exports.default = mod_setISOWeek;
module.exports = exports.default;