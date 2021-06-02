"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var addSeconds = _2.default;

describe('addSeconds', function () {
  it('adds the given number of seconds', function () {
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30));
  });

  it('accepts a string', function () {
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20));
  });

  it('accepts a timestamp', function () {
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 5), '30');
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 35));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0);
    addSeconds(date, 15);
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0));
  });
});