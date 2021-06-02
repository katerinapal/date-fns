"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var endOfMinute = _2.default;

describe('endOfMinute', function () {
  it('returns the date with the time setted to the last millisecond before a minute ends', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    var result = endOfMinute(date);
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });

  it('accepts a string', function () {
    var result = endOfMinute('2014-12-01T13:00:00.000Z');
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 59, 999)));
  });

  it('accepts a timestamp', function () {
    var result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime());
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15);
    endOfMinute(date);
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15));
  });
});