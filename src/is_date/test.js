"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isDate = _2.default;

describe('isDate', function () {
  it('returns true if the given argument is an instance of Date', function () {
    var result = isDate(new Date());
    assert(result === true);
  });

  it('returns true if the given argument is an invalid Date', function () {
    var result = isDate(new Date(''));
    assert(result === true);
  });

  it('returns false if the given argument is not an instance of Date', function () {
    var result = isDate(1404259200000);
    assert(result === false);
  });
});