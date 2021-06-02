"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var addWeeks = _2.default;

describe('addWeeks', function () {
  it('adds the given number of weeks', function () {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29));
  });

  it('accepts a string', function () {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15));
  });

  it('accepts a timestamp', function () {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), '4');
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    addWeeks(date, 2);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});