"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var addMinutes = _2.default;

describe('addMinutes', function () {
  it('adds the given number of minutes', function () {
    var result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30));
  });

  it('accepts a string', function () {
    var result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20));
  });

  it('accepts a timestamp', function () {
    var result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 5), '30');
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 35));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 0);
    addMinutes(date, 25);
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0));
  });
});