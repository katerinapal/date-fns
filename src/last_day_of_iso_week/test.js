"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var lastDayOfISOWeek = _2.default;

describe('lastDayOfISOWeek', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the last day of an ISO week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = lastDayOfISOWeek(date);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 11, 55, 0).toISOString();
    var result = lastDayOfISOWeek(date);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 6));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime();
    var result = lastDayOfISOWeek(date);
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 16));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfISOWeek(date);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});