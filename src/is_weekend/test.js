"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isWeekend = _2.default;

describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5));
    assert(result === true);
  });

  it('returns false if the given date is not in a weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 6));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).toString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime());
    assert(result === true);
  });
});