"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameSecond', function () {
  it('returns true if the given dates have the same second', function () {
    var result = (0, _.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 6, 30, 15), new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different seconds', function () {
    var result = (0, _.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999), new Date(2014, 8 /* Sep */, 4, 6, 30, 59));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});