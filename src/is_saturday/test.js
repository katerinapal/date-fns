"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isSaturday = _2.default;

describe('isSaturday', function () {
  it('returns true if the given date is Saturday', function () {
    var result = isSaturday(new Date(2014, 8 /* Sep */, 27));
    assert(result === true);
  });

  it('returns false if the given date is not Saturday', function () {
    var result = isSaturday(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isSaturday(new Date(2014, 6 /* Jul */, 12).toString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isSaturday(new Date(2014, 1 /* Feb */, 15).getTime());
    assert(result === true);
  });
});