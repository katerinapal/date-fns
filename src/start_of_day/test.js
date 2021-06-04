"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('startOfDay', function () {
  it('returns the date with the time setted to 00:00:00', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = (0, _.startOfDay)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = (0, _.startOfDay)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = (0, _.startOfDay)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    (0, _.startOfDay)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});