"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setMilliseconds', function () {
  it('sets the milliseconds', function () {
    var result = (0, _.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 300);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
  });

  it('accepts a string', function () {
    var result = (0, _.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 123);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 0, 123));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(), 755);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '300');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500);
    (0, _.setMilliseconds)(date, 137);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500));
  });
});