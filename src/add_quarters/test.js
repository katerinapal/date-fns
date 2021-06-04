"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('addQuarters', function () {
  it('adds the given number of quarters', function () {
    var result = (0, _.addQuarters)(new Date(2014, 8 /* Sep */, 1), 1);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11 /* Dec */, 1));
  });

  it('accepts a string', function () {
    var result = (0, _.addQuarters)(new Date(2014, 8 /* Sep */, 1).toISOString(), 4);
    _powerAssert2.default.deepEqual(result, new Date(2015, 8 /* Sep */, 1));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.addQuarters)(new Date(2014, 8 /* Sep */, 1).getTime(), 4);
    _powerAssert2.default.deepEqual(result, new Date(2015, 8 /* Sep */, 1));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.addQuarters)(new Date(2014, 8 /* Sep */, 1), '1');
    _powerAssert2.default.deepEqual(result, new Date(2014, 11 /* Dec */, 1));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.addQuarters)(date, 4);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11 /* Dec */, 31);
    var result = (0, _.addQuarters)(date, 3);
    _powerAssert2.default.deepEqual(result, new Date(2015, 8 /* Sep */, 30));
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(-1, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _.addQuarters)(initialDate, 1);
    _powerAssert2.default.deepEqual(result, expectedResult);
  });
});