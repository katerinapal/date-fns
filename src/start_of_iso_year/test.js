"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var startOfISOYear = _2.default;

describe('startOfISOYear', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of an ISO year', function () {
    var result = startOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0));
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0));
  });

  it('accepts a string', function () {
    var result = startOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString());
    assert.deepEqual(result, new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0));
  });

  it('accepts a timestamp', function () {
    var result = startOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime());
    assert.deepEqual(result, new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2);
    startOfISOYear(date);
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2));
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 1, 16, 0);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11 /* Dec */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = startOfISOYear(initialDate);
    assert.deepEqual(result, expectedResult);
  });

  it('correctly handles years in which 4 January is Sunday', function () {
    var result = startOfISOYear(new Date(2009, 6 /* Jul */, 2));
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29));
  });
});