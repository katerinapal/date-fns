"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isLeapYear = _2.default;

describe('isLeapYear', function () {
  it('returns true if the given date is in the leap year', function () {
    var result = isLeapYear(new Date(2012, 6 /* Jul */, 2));
    assert(result === true);
  });

  it('returns false if the given date is not in the leap year', function () {
    var result = isLeapYear(new Date(2014, 6 /* Jul */, 2));
    assert(result === false);
  });

  it('works for the years divisible by 100 but not by 400', function () {
    var result = isLeapYear(new Date(2100, 6 /* Jul */, 2));
    assert(result === false);
  });

  it('works for the years divisible by 400', function () {
    var result = isLeapYear(new Date(2000, 6 /* Jul */, 2));
    assert(result === true);
  });

  it('accepts a string', function () {
    var date = new Date(2012, 6 /* Jul */, 2).toISOString();
    var result = isLeapYear(date);
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2012, 6 /* Jul */, 2).getTime();
    var result = isLeapYear(date);
    assert(result === true);
  });
});