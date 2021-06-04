"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getISOWeeksInYear', function () {
  it('returns the number of ISO weeks in the ISO week-numbering year of the given date', function () {
    var result = (0, _.getISOWeeksInYear)(new Date(2015, 1 /* Feb */, 11));
    (0, _powerAssert2.default)(result === 53);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 1 /* Feb */, 11).toISOString();
    var result = (0, _.getISOWeeksInYear)(date);
    (0, _powerAssert2.default)(result === 52);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2003, 11 /* Dec */, 30).getTime();
    var result = (0, _.getISOWeeksInYear)(date);
    (0, _powerAssert2.default)(result === 53);
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _.getISOWeeksInYear)(initialDate);
    (0, _powerAssert2.default)(result === 53);
  });
});