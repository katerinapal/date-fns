"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var getYear = _2.default;

describe('getYear', function () {
  it('returns the year of the given date', function () {
    var result = getYear(new Date(2014, 6 /* Jul */, 2));
    assert(result === 2014);
  });

  it('accepts a string', function () {
    var result = getYear(new Date(700, 6 /* Jul */, 2).toISOString());
    assert(result === 700);
  });

  it('accepts a timestamp', function () {
    var result = getYear(new Date(20000, 3 /* Apr */, 2).getTime());
    assert(result === 20000);
  });
});