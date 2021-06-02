"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var isValid = _2.default;

describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = isValid(new Date());
    assert(result === true);
  });

  it('returns false if the given date is invalid', function () {
    var result = isValid(new Date(''));
    assert(result === false);
  });

  it('throws an exception if the argument is not an instance of Date', function () {
    // $ExpectedMistake
    var block = isValid.bind(null, '');
    assert.throws(block, TypeError, '[object String] is not an instance of Date');
  });
});