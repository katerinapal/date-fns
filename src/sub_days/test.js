"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var subDays = _2.default;

describe('subDays', function () {
  it('subtracts the given number of days', function () {
    var result = subDays(new Date(2014, 8 /* Sep */, 1), 10);
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22));
  });

  it('accepts a string', function () {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10);
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22));
  });

  it('accepts a timestamp', function () {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subDays(new Date(2014, 8 /* Sep */, 1), '10');
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    subDays(date, 11);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});