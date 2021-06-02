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
var isThisWeek = _2.default;

describe('isThisWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same week', function () {
    var date = new Date(2014, 8 /* Sep */, 21);
    assert(isThisWeek(date) === true);
  });

  it('returns false if the given date and the current date have different weeks', function () {
    var date = new Date(2014, 8 /* Sep */, 29);
    assert(isThisWeek(date) === false);
  });

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 28);
    assert(isThisWeek(date, { weekStartsOn: 1 }) === true);
  });

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 28);
    // $ExpectedMistake
    assert(isThisWeek(date, { weekStartsOn: '1' }) === true);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 21).toISOString();
    assert(isThisWeek(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 21).getTime();
    assert(isThisWeek(date) === true);
  });
});