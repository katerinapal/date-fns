"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var setMinutes = _2.default;

describe('setMinutes', function () {
  it('sets the minutes', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40));
  });

  it('accepts a string', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 18));
  });

  it('accepts a timestamp', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 5));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), '45');
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30);
    setMinutes(date, 15);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30));
  });
});