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
var isThisMinute = _2.default;

describe('isThisMinute', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same minute', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30);
    assert(isThisMinute(date) === true);
  });

  it('returns false if the given date and the current date have different minutes', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 31);
    assert(isThisMinute(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 59, 999).toISOString();
    assert(isThisMinute(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 30).getTime();
    assert(isThisMinute(date) === true);
  });
});