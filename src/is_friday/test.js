"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isFriday = _2.default;

describe('isFriday', function () {
  it('returns true if the given date is Friday', function () {
    var result = isFriday(new Date(2014, 8 /* Sep */, 26));
    assert(result === true);
  });

  it('returns false if the given date is not Friday', function () {
    var result = isFriday(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isFriday(new Date(2014, 6 /* Jul */, 11).toString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isFriday(new Date(2014, 1 /* Feb */, 14).getTime());
    assert(result === true);
  });
});