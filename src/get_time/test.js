"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getTime = _2.default;

describe('getTime', function () {
  it('returns the timestamp of the given date', function () {
    var timestamp = 1483228800000;
    var result = getTime(new Date(timestamp));
    assert(result === timestamp);
  });

  it('accepts a string', function () {
    var timestamp = 1484503736150;
    var result = getTime(new Date(timestamp).toISOString());
    assert(result === timestamp);
  });

  it('accepts a timestamp (and returns it unchanged)', function () {
    var timestamp = 804643200000;
    var result = getTime(timestamp);
    assert(result === timestamp);
  });
});