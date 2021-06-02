"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var startOfHour = _2.default;

describe('startOfHour', function () {
  it('returns the date with the time setted to the first millisecond of an hour', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55);
    var result = startOfHour(date);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55);
    startOfHour(date);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime();
    var result = startOfHour(date);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 12, 45).toISOString();
    var result = startOfHour(date);
    assert.deepEqual(result, new Date(2014, 11, 1, 12, 0));
  });
});