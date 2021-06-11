"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('addISOYears', function () {
  it('adds the given number of ISO week-numbering years', function () {
    var result = (0, _.addISOYears)(new Date(2010, 6 /* Jul */, 2), 5);
    _powerAssert2.default.deepEqual(result, new Date(2015, 5 /* Jun */, 26));
  });

  it('accepts a string', function () {
    var result = (0, _.addISOYears)(new Date(2014, 8 /* Sep */, 1).toISOString(), 12);
    _powerAssert2.default.deepEqual(result, new Date(2026, 7 /* Aug */, 31));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.addISOYears)(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
    _powerAssert2.default.deepEqual(result, new Date(2026, 7 /* Aug */, 31));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.addISOYears)(new Date(2010, 6 /* Jul */, 2), '5');
    _powerAssert2.default.deepEqual(result, new Date(2015, 5 /* Jun */, 26));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.addISOYears)(date, 12);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(10, 6 /* Jul */, 2);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(15, 5 /* Jun */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _.addISOYears)(initialDate, 5);
    _powerAssert2.default.deepEqual(result, expectedResult);
  });
});