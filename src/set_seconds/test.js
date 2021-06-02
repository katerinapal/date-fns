"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var setSeconds = _2.default;

describe('setSeconds', function () {
  it('sets the seconds', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
  });

  it('accepts a string', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 18));
  });

  it('accepts a timestamp', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45);
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '45');
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40);
    setSeconds(date, 15);
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40));
  });
});