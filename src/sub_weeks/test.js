"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var subWeeks = _2.default;

describe('subWeeks', function () {
  it('subtracts the given number of weeks', function () {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4);
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4));
  });

  it('accepts a string', function () {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2);
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18));
  });

  it('accepts a timestamp', function () {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), '4');
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    subWeeks(date, 2);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});