"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var startOfYear = _2.default;

describe('startOfYear', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of a year', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = startOfYear(date);
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = startOfYear(date);
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = startOfYear(date);
    assert.deepEqual(result, new Date(2014, 0 /* Dec */, 1, 0, 0, 0, 0));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfYear(date);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 5);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(9, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = startOfYear(initialDate);
    assert.deepEqual(result, expectedResult);
  });
});