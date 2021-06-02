"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var setHours = _2.default;

describe('setHours', function () {
  it('sets the amount of hours', function () {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it('accepts a string', function () {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 18));
  });

  it('accepts a timestamp', function () {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 5));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), '4');
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11);
    setHours(date, 12);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11));
  });
});