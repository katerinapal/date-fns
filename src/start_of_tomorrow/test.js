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
var startOfTomorrow = _2.default;

describe('startOfTomorrow', function () {
  it('returns the start of tomorrow', function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());

    var result = startOfTomorrow();
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 26));

    this.clock.restore();
  });

  it('handles dates before 100 AD', function () {
    var now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25, 14, 30, 45, 500);
    now.setHours(0, 0, 0, 0);
    this.clock = sinon.useFakeTimers(now.getTime());

    var expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    var result = startOfTomorrow();
    assert.deepEqual(result, expectedResult);

    this.clock.restore();
  });
});