"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getDayOfYear = _2.default;

describe('getDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = getDayOfYear(new Date(2014, 6 /* Jul */, 2));
    assert(result === 183);
  });

  it('accepts a string', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString());
    assert(result === 2);
  });

  it('accepts a timestamp', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime());
    assert(result === 2);
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    var result = getDayOfYear(initialDate);
    assert(result === 366);
  });
});