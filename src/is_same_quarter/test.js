"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isSameQuarter = _2.default;

describe('isSameQuarter', function () {
  it('returns true if the given dates have the same quarter (and year)', function () {
    var result = isSameQuarter(new Date(2014, 0 /* Jan */, 1), new Date(2014, 2 /* Mar */, 8));
    assert(result === true);
  });

  it('returns false if the given dates have different quarters', function () {
    var result = isSameQuarter(new Date(2014, 0 /* Jan */, 1), new Date(2013, 8 /* Sep */, 25));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isSameQuarter(new Date(2014, 6 /* Jul */, 2).toISOString(), new Date(2014, 8 /* Sep */, 25).toISOString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isSameQuarter(new Date(2014, 6 /* Jul */, 2).getTime(), new Date(2014, 8 /* Sep */, 25).getTime());
    assert(result === true);
  });
});