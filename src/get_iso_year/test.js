"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getISOYear', function () {
  it('returns the ISO week-numbering year of the given date', function () {
    var result = (0, _.getISOYear)(new Date(2007, 11 /* Dec */, 31));
    (0, _powerAssert2.default)(result === 2008);
  });

  it('accepts a string', function () {
    var result = (0, _.getISOYear)(new Date(2005, 0 /* Jan */, 1).toISOString());
    (0, _powerAssert2.default)(result === 2004);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.getISOYear)(new Date(2005, 0 /* Jan */, 1).getTime());
    (0, _powerAssert2.default)(result === 2004);
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _.getISOYear)(initialDate);
    (0, _powerAssert2.default)(result === 8);
  });
});