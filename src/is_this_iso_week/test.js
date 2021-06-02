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
var isThisISOWeek = _2.default;

describe('isSameISOWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same ISO week', function () {
    var date = new Date(2014, 8 /* Sep */, 22);
    assert(isThisISOWeek(date) === true);
  });

  it('returns false if the given date and the current date have different ISO weeks', function () {
    var date = new Date(2014, 8 /* Sep */, 21);
    assert(isThisISOWeek(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 28).toISOString();
    assert(isThisISOWeek(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 29).getTime();
    assert(isThisISOWeek(date) === false);
  });
});