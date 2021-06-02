"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var startOfMinute = _2.default;

describe('startOfMinute', function () {
  it('returns the date with the time setted to the first millisecond of a minute', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    var result = startOfMinute(date);
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 13, 20).toISOString();
    var result = startOfMinute(date);
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 13, 20));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15).getTime();
    var result = startOfMinute(date);
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    startOfMinute(date);
    assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400));
  });
});