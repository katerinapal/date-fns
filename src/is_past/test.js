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
var isPast = _2.default;

describe('isPast', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date is in the past', function () {
    var result = isPast(new Date(2014, 6 /* Jul */, 2));
    assert(result === true);
  });

  it('returns false if the given date is in the future', function () {
    var result = isPast(new Date(2014, 11 /* Dec */, 31));
    assert(result === false);
  });

  it('returns false if the given date is now', function () {
    var result = isPast(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isPast(new Date(2014, 6 /* Jul */, 2).toISOString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isPast(new Date(2014, 6 /* Jul */, 2).getTime());
    assert(result === true);
  });
});