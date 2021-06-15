"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('endOfSecond', function () {
  it('returns the date with the time setted to the last millisecond before a second ends', function () {
    var date = new Date(2014, 11, 1, 22, 15, 30);
    var result = (0, _.endOfSecond)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999));
  });

  it('accepts a string', function () {
    var result = (0, _.endOfSecond)('2014-12-01T13:00:00.000Z');
    _powerAssert2.default.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 0, 999)));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.endOfSecond)(new Date(2014, 11, 1, 22, 15, 45).getTime());
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 22, 15, 45, 999));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15, 15, 300);
    (0, _.endOfSecond)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 11, 1, 22, 15, 15, 300));
  });
});