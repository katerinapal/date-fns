"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global sinon */

var assert = _powerAssert2.default;
var isYesterday = _2.default;

describe('isYesterday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Aug */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date is yesterday', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24));
    assert(result === true);
  });

  it('returns false if the given date is not yesterday', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24).toString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24).getTime());
    assert(result === true);
  });
});