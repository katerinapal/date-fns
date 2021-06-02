"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var subSeconds = _2.default;

describe('subSeconds', function () {
  it('subtracts the given number of seconds', function () {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30));
  });

  it('accepts a string', function () {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40));
  });

  it('accepts a timestamp', function () {
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20);
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), '30');
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0);
    subSeconds(date, 15);
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0));
  });
});