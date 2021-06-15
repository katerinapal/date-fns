"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = (0, _.isWeekend)(new Date(2014, 9 /* Oct */, 5));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not in a weekend', function () {
    var result = (0, _.isWeekend)(new Date(2014, 9 /* Oct */, 6));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isWeekend)(new Date(2014, 9 /* Oct */, 5).toString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isWeekend)(new Date(2014, 9 /* Oct */, 5).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});