"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setDate', function () {
  it('sets the day of the month', function () {
    var result = (0, _.setDate)(new Date(2014, 8 /* Sep */, 1), 30);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 30));
  });

  it('accepts a string', function () {
    var result = (0, _.setDate)(new Date(2014, 8 /* Sep */, 1).toISOString(), 18);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 18));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setDate)(new Date(2014, 8 /* Sep */, 1).getTime(), 25);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 25));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setDate)(new Date(2014, 8 /* Sep */, 1), '30');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 30));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.setDate)(date, 20);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});