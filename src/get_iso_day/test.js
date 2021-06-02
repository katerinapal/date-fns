"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getISODay = _2.default;

describe('getISODay', function () {
  it('returns the day of the ISO week of the given date', function () {
    var result = getISODay(new Date(2012, 1 /* Feb */, 29));
    assert(result === 3);
  });

  it('returns 7 if the given day is Sunday', function () {
    var result = getISODay(new Date(2014, 5 /* Jun */, 1));
    assert(result === 7);
  });

  it('accepts a string', function () {
    var result = getISODay(new Date(2014, 6 /* Jul */, 2).toISOString());
    assert(result === 3);
  });

  it('accepts a timestamp', function () {
    var result = getISODay(new Date(2014, 5 /* Jun */, 1).getTime());
    assert(result === 7);
  });
});