"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var setDate = _2.default;

describe('setDate', function () {
  it('sets the day of the month', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1), 30);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30));
  });

  it('accepts a string', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).toISOString(), 18);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 18));
  });

  it('accepts a timestamp', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setDate(new Date(2014, 8 /* Sep */, 1), '30');
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    setDate(date, 20);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});