"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var setMilliseconds = _2.default;

describe('setMilliseconds', function () {
  it('sets the milliseconds', function () {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 300);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
  });

  it('accepts a string', function () {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 123);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 0, 123));
  });

  it('accepts a timestamp', function () {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(), 755);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '300');
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500);
    setMilliseconds(date, 137);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500));
  });
});