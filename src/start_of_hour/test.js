"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('startOfHour', function () {
  it('returns the date with the time setted to the first millisecond of an hour', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55);
    var result = (0, _.startOfHour)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55);
    (0, _.startOfHour)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime();
    var result = (0, _.startOfHour)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 12, 45).toISOString();
    var result = (0, _.startOfHour)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 11, 1, 12, 0));
  });
});