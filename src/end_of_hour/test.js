"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('endOfHour', function () {
  it('returns the date with the time setted to the last millisecond before an hour ends', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    var result = (0, _.endOfHour)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 11, 1, 13).toISOString();
    var result = (0, _.endOfHour)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 13, 59, 59, 999));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.endOfHour)(new Date(2014, 11, 1, 22, 15).getTime());
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    (0, _.endOfHour)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 11, 1, 22, 15));
  });
});