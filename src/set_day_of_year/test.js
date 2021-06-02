"use strict";

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var setDayOfYear = _2.default;

describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2);
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2));
  });

  it('accepts a string', function () {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).toISOString(), 60);
    assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1));
  });

  it('accepts a timestamp', function () {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).getTime(), 60);
    assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), '2');
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2);
    setDayOfYear(date, 365);
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2));
  });
});