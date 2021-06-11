"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setISOYear', function () {
  it('sets the ISO week-numbering year, saving the ISO week and the day of the week', function () {
    var result = (0, _.setISOYear)(new Date(2008, 11 /* Dec */, 29), 2007);
    _powerAssert2.default.deepEqual(result, new Date(2007, 0 /* Jan */, 1));
  });

  it('accepts a string', function () {
    var result = (0, _.setISOYear)(new Date(2010, 0 /* Jan */, 2).toISOString(), 2004);
    _powerAssert2.default.deepEqual(result, new Date(2005, 0 /* Jan */, 1));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setISOYear)(new Date(2010, 0 /* Jan */, 2).getTime(), 2004);
    _powerAssert2.default.deepEqual(result, new Date(2005, 0 /* Jan */, 1));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setISOYear)(new Date(2008, 11 /* Dec */, 29), '2007');
    _powerAssert2.default.deepEqual(result, new Date(2007, 0 /* Jan */, 1));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2008, 11 /* Dec */, 29);
    (0, _.setISOYear)(date, 2000);
    _powerAssert2.default.deepEqual(date, new Date(2008, 11 /* Dec */, 29));
  });

  it('sets ISO week-numbering years less than 100', function () {
    var initialDate = new Date(2008, 11 /* Dec */, 29);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _.setISOYear)(initialDate, 7);
    _powerAssert2.default.deepEqual(result, expectedResult);
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(8, 11 /* Dec */, 29);
    initialDate.setHours(0, 0, 0, 0);
    var expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    var result = (0, _.setISOYear)(initialDate, 7);
    _powerAssert2.default.deepEqual(result, expectedResult);
  });
});