"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isFriday', function () {
  it('returns true if the given date is Friday', function () {
    var result = (0, _.isFriday)(new Date(2014, 8 /* Sep */, 26));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not Friday', function () {
    var result = (0, _.isFriday)(new Date(2014, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isFriday)(new Date(2014, 6 /* Jul */, 11).toString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isFriday)(new Date(2014, 1 /* Feb */, 14).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});