"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('addWeeks', function () {
  it('adds the given number of weeks', function () {
    var result = (0, _.addWeeks)(new Date(2014, 8 /* Sep */, 1), 4);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 29));
  });

  it('accepts a string', function () {
    var result = (0, _.addWeeks)(new Date(2014, 8 /* Sep */, 1).toISOString(), 2);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 15));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.addWeeks)(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 8));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.addWeeks)(new Date(2014, 8 /* Sep */, 1), '4');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 29));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.addWeeks)(date, 2);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});