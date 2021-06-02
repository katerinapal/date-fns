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
var startOfToday = _2.default;

describe('startOfToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns the current date with the time setted to 00:00:00', function () {
    var result = startOfToday();
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25));
  });
});