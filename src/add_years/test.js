"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('addYears', function () {
  it('adds the given number of years', function () {
    var result = (0, _.addYears)(new Date(2014, 8 /* Sep */, 1), 5);
    _powerAssert2.default.deepEqual(result, new Date(2019, 8 /* Sep */, 1));
  });

  it('accepts a string', function () {
    var result = (0, _.addYears)(new Date(2014, 8 /* Sep */, 1).toISOString(), 12);
    _powerAssert2.default.deepEqual(result, new Date(2026, 8 /* Sep */, 1));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.addYears)(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
    _powerAssert2.default.deepEqual(result, new Date(2026, 8 /* Sep */, 1));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.addYears)(new Date(2014, 8 /* Sep */, 1), '5');
    _powerAssert2.default.deepEqual(result, new Date(2019, 8 /* Sep */, 1));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.addYears)(date, 12);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });

  it('handles the leap years properly', function () {
    var result = (0, _.addYears)(new Date(2016, 1 /* Feb */, 29), 1);
    _powerAssert2.default.deepEqual(result, new Date(2017, 1 /* Feb */, 28));
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 1 /* Feb */, 29);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(1, 1 /* Feb */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _.addYears)(initialDate, 1);
    _powerAssert2.default.deepEqual(result, expectedResult);
  });
});