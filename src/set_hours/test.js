"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setHours', function () {
  it('sets the amount of hours', function () {
    var result = (0, _.setHours)(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it('accepts a string', function () {
    var result = (0, _.setHours)(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 18));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setHours)(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 5));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setHours)(new Date(2014, 8 /* Sep */, 1, 11, 30), '4');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11);
    (0, _.setHours)(date, 12);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11));
  });
});