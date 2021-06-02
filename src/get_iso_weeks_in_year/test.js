"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getISOWeeksInYear = _2.default;

describe('getISOWeeksInYear', function () {
  it('returns the number of ISO weeks in the ISO week-numbering year of the given date', function () {
    var result = getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11));
    assert(result === 53);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 1 /* Feb */, 11).toISOString();
    var result = getISOWeeksInYear(date);
    assert(result === 52);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2003, 11 /* Dec */, 30).getTime();
    var result = getISOWeeksInYear(date);
    assert(result === 53);
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    var result = getISOWeeksInYear(initialDate);
    assert(result === 53);
  });
});