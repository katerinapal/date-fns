"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSunday', function () {
  it('returns true if the given date is Sunday', function () {
    var result = (0, _.isSunday)(new Date(2014, 8 /* Sep */, 21));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not Sunday', function () {
    var result = (0, _.isSunday)(new Date(2014, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSunday)(new Date(2014, 6 /* Jul */, 6).toString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSunday)(new Date(2014, 1 /* Feb */, 9).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});