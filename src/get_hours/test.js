"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getHours = _2.default;

describe('getHours', function () {
  it('returns the hours of the given date', function () {
    var result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45));
    assert(result === 11);
  });

  it('accepts a string', function () {
    var result = getHours(new Date(2014, 6 /* Jul */, 2, 5).toISOString());
    assert(result === 5);
  });

  it('accepts a timestamp', function () {
    var result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime());
    assert(result === 23);
  });
});