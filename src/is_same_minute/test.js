"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameMinute', function () {
  it('returns true if the given dates have the same minute', function () {
    var result = (0, _.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 6, 30), new Date(2014, 8 /* Sep */, 4, 6, 30, 15));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different minutes', function () {
    var result = (0, _.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 6, 30, 59), new Date(2014, 8 /* Sep */, 4, 6, 31));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});