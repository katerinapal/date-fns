"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('startOfQuarter', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the first day of a quarter', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = (0, _.startOfQuarter)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 1));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 2 /* Mar */, 2, 11, 55, 0).toISOString();
    var result = (0, _.startOfQuarter)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 1));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = (0, _.startOfQuarter)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 1));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    (0, _.startOfQuarter)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});