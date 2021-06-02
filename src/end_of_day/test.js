"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var endOfDay = _2.default;

describe('endOfDay', function () {
  it('returns the date with the time setted to 23:59:59.999', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = endOfDay(date);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = endOfDay(date);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = endOfDay(date);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfDay(date);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});