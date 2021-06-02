"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var subMilliseconds = _2.default;

describe('subMilliseconds', function () {
  it('subtracts the given number of milliseconds', function () {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250));
  });

  it('accepts a string', function () {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500));
  });

  it('accepts a timestamp', function () {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), '750');
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
    subMilliseconds(date, 250);
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0));
  });
});