"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getDate = _2.default;

describe('getDate', function () {
  it('returns the day of the month of the given date', function () {
    var result = getDate(new Date(2012, 1 /* Feb */, 29));
    assert(result === 29);
  });

  it('accepts a string', function () {
    var result = getDate(new Date(2014, 6 /* Jul */, 2).toISOString());
    assert(result === 2);
  });

  it('accepts a timestamp', function () {
    var result = getDate(new Date(2014, 11 /* Dec */, 31).getTime());
    assert(result === 31);
  });
});