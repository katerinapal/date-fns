"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getDaysInMonth', function () {
  it('returns the number of days in the month of the given date', function () {
    var result = (0, _.getDaysInMonth)(new Date(2100, 1 /* Feb */, 11));
    (0, _powerAssert2.default)(result === 28);
  });

  it('works for the February of a leap year', function () {
    var result = (0, _.getDaysInMonth)(new Date(2000, 1 /* Feb */, 11));
    (0, _powerAssert2.default)(result === 29);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString();
    var result = (0, _.getDaysInMonth)(date);
    (0, _powerAssert2.default)(result === 31);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime();
    var result = (0, _.getDaysInMonth)(date);
    (0, _powerAssert2.default)(result === 31);
  });

  it('handles dates before 100 AD', function () {
    var date = new Date(0);
    date.setFullYear(0, 1 /* Feb */, 15);
    date.setHours(0, 0, 0, 0);
    var result = (0, _.getDaysInMonth)(date);
    (0, _powerAssert2.default)(result === 29);
  });
});