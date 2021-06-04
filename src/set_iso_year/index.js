"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setISOYear = undefined;

var _index = require("../parse/index.js");

var _index2 = require("../start_of_iso_year/index.js");

var _index3 = require("../difference_in_calendar_days/index.js");

var mod_setISOYear = setISOYear;


/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear(dirtyDate, dirtyISOYear) {
  var date = (0, _index.parse)(dirtyDate);
  var isoYear = Number(dirtyISOYear);
  var diff = (0, _index3.differenceInCalendarDays)(date, (0, _index2.startOfISOYear)(date));
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(isoYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = (0, _index2.startOfISOYear)(fourthOfJanuary);
  date.setDate(date.getDate() + diff);
  return date;
}

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
exports.setISOYear = mod_setISOYear;