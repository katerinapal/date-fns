"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('endOfMinute', function () {
  it('returns the date with the time setted to the last millisecond before a minute ends', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    var result = (0, _.endOfMinute)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });

  it('accepts a string', function () {
    var result = (0, _.endOfMinute)('2014-12-01T13:00:00.000Z');
    _powerAssert2.default.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 59, 999)));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.endOfMinute)(new Date(2014, 11, 1, 22, 15).getTime());
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    (0, _.endOfMinute)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 11, 1, 22, 15));
  });
});