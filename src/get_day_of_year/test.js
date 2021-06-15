"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = (0, _.getDayOfYear)(new Date(2014, 6 /* Jul */, 2));
    (0, _powerAssert2.default)(result === 183);
  });

  it('accepts a string', function () {
    var result = (0, _.getDayOfYear)(new Date(2014, 0 /* Jan */, 2).toISOString());
    (0, _powerAssert2.default)(result === 2);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.getDayOfYear)(new Date(2014, 0 /* Jan */, 2).getTime());
    (0, _powerAssert2.default)(result === 2);
  });

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(0, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _.getDayOfYear)(initialDate);
    (0, _powerAssert2.default)(result === 366);
  });
});