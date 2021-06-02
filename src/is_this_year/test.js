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
var isThisYear = _2.default;

describe('isThisYear', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same year', function () {
    var date = new Date(2014, 6 /* Jul */, 2);
    assert(isThisYear(date) === true);
  });

  it('returns false if the given date and the current date have different years', function () {
    var date = new Date(2015, 6 /* Jul */, 2);
    assert(isThisYear(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString();
    assert(isThisYear(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime();
    assert(isThisYear(date) === true);
  });
});