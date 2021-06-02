"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getMilliseconds = _2.default;

describe('getMilliseconds', function () {
  it('returns the milliseconds of the given date', function () {
    var result = getMilliseconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123));
    assert(result === 123);
  });

  it('accepts a string', function () {
    var result = getMilliseconds(new Date(2014, 6 /* Jul */, 2, 5, 15).toISOString());
    assert(result === 0);
  });

  it('accepts a timestamp', function () {
    var result = getMilliseconds(new Date(2014, 3 /* Apr */, 2, 23, 30, 42, 500).getTime());
    assert(result === 500);
  });
});