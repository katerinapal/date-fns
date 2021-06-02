"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isSameSecond = _2.default;

describe('isSameSecond', function () {
  it('returns true if the given dates have the same second', function () {
    var result = isSameSecond(new Date(2014, 8 /* Sep */, 4, 6, 30, 15), new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500));
    assert(result === true);
  });

  it('returns false if the given dates have different seconds', function () {
    var result = isSameSecond(new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999), new Date(2014, 8 /* Sep */, 4, 6, 30, 59));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isSameSecond(new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).toISOString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isSameSecond(new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime());
    assert(result === true);
  });
});