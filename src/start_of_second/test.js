"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('startOfSecond', function () {
  it('returns the date with the time setted to the first millisecond of a second', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    var result = (0, _.startOfSecond)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 13, 20, 30, 456).toISOString();
    var result = (0, _.startOfSecond)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 13, 20, 30));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400).getTime();
    var result = (0, _.startOfSecond)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    (0, _.startOfSecond)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400));
  });
});