"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var addISOYears = _2.default;

describe('addISOYears', function () {
  it('adds the given number of ISO week-numbering years', function () {
    var result = addISOYears(new Date(2010, 6 /* Jul */, 2), 5);
    assert.deepEqual(result, new Date(2015, 5 /* Jun */, 26));
  });

  it('accepts a string', function () {
    var result = addISOYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12);
    assert.deepEqual(result, new Date(2026, 7 /* Aug */, 31));
  });

  it('accepts a timestamp', function () {
    var result = addISOYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
    assert.deepEqual(result, new Date(2026, 7 /* Aug */, 31));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addISOYears(new Date(2010, 6 /* Jul */, 2), '5');
    assert.deepEqual(result, new Date(2015, 5 /* Jun */, 26));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    addISOYears(date, 12);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(10, 6 /* Jul */, 2);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(15, 5 /* Jun */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = addISOYears(initialDate, 5);
    assert.deepEqual(result, expectedResult);
  });
});