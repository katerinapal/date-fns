"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getQuarter = _2.default;

describe('getQuarter', function () {
  it('returns the quarter of the given date', function () {
    var result = getQuarter(new Date(2014, 6 /* Jul */, 2));
    assert(result === 3);
  });

  it('accepts a string', function () {
    var result = getQuarter(new Date(2014, 3 /* Apr */, 2).toISOString());
    assert(result === 2);
  });

  it('accepts a timestamp', function () {
    var result = getQuarter(new Date(2014, 3 /* Apr */, 2).getTime());
    assert(result === 2);
  });
});