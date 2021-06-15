"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    var result = (0, _.isWednesday)(new Date(2014, 8 /* Sep */, 24));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not Wednesday', function () {
    var result = (0, _.isWednesday)(new Date(2014, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isWednesday)(new Date(2014, 6 /* Jul */, 9).toString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isWednesday)(new Date(2014, 1 /* Feb */, 12).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});