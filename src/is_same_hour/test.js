"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameHour', function () {
  it('returns true if the given dates have the same hour', function () {
    var result = (0, _.isSameHour)(new Date(2014, 8 /* Sep */, 4, 6, 0), new Date(2014, 8 /* Sep */, 4, 6, 30));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different hours', function () {
    var result = (0, _.isSameHour)(new Date(2014, 8 /* Sep */, 4, 6, 0), new Date(2014, 8 /* Sep */, 4, 5, 0));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameHour)(new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString(), new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameHour)(new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(), new Date(2014, 8 /* Sep */, 4, 18, 45).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});