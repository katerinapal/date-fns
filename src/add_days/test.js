"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('addDays', function () {
  it('adds the given number of days', function () {
    var result = (0, _.addDays)(new Date(2014, 8 /* Sep */, 1), 10);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 11));
  });

  it('accepts a string', function () {
    var result = (0, _.addDays)(new Date(2014, 8 /* Sep */, 1).toISOString(), 10);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 11));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.addDays)(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 11));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.addDays)(new Date(2014, 8 /* Sep */, 1), '10');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 11));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.addDays)(date, 11);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});