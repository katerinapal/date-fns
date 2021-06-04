"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getMilliseconds', function () {
  it('returns the milliseconds of the given date', function () {
    var result = (0, _.getMilliseconds)(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123));
    (0, _powerAssert2.default)(result === 123);
  });

  it('accepts a string', function () {
    var result = (0, _.getMilliseconds)(new Date(2014, 6 /* Jul */, 2, 5, 15).toISOString());
    (0, _powerAssert2.default)(result === 0);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.getMilliseconds)(new Date(2014, 3 /* Apr */, 2, 23, 30, 42, 500).getTime());
    (0, _powerAssert2.default)(result === 500);
  });
});