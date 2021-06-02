"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isBefore = _2.default;

describe('isBefore', function () {
  it('returns true if the first date is before the second one', function () {
    var result = isBefore(new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10));
    assert(result === true);
  });

  it('returns false if the first date is after the second one', function () {
    var result = isBefore(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
    assert(result === false);
  });

  it('returns false if the first date is equal to the second one', function () {
    var result = isBefore(new Date(1989, 6 /* Jul */, 10), new Date(1989, 6 /* Jul */, 10));
    assert(result === false);
  });

  it('accepts a string', function () {
    var result = isBefore(new Date(1987, 1 /* Feb */, 11).toISOString(), new Date(1989, 6 /* Jul */, 10).toISOString());
    assert(result === true);
  });

  it('accepts a timestamp', function () {
    var result = isBefore(new Date(1987, 1 /* Feb */, 11).getTime(), new Date(1989, 6 /* Jul */, 10).getTime());
    assert(result === true);
  });
});