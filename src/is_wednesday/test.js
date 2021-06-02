"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isWednesday = _2.default;

describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 24));
    assert(result === true);
  });

  it('returns false if the given date is not Wednesday', function () {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isWednesday(new Date(2014, 6 /* Jul */, 9).toString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime());
    assert(result === true);
  });
});