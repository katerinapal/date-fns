"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isTuesday', function () {
  it('returns true if the given date is Tuesday', function () {
    var result = (0, _.isTuesday)(new Date(2014, 8 /* Sep */, 23));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not Tuesday', function () {
    var result = (0, _.isTuesday)(new Date(2014, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isTuesday)(new Date(2014, 6 /* Jul */, 8).toString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isTuesday)(new Date(2014, 1 /* Feb */, 11).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});