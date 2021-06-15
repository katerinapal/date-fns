"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setISODay = undefined;

var _index = require("../parse/index.js");

var _index2 = require("../add_days/index.js");

var _index3 = require("../get_iso_day/index.js");

var mod_setISODay = setISODay;


/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(dirtyDate, dirtyDay) {
  var date = (0, _index.parse)(dirtyDate);
  var day = Number(dirtyDay);
  var currentDay = (0, _index3.getISODay)(date);
  var diff = day - currentDay;
  return (0, _index2.addDays)(date, diff);
}

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
exports.setISODay = mod_setISODay;