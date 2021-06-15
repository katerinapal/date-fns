"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameYear', function () {
  it('returns true if the given dates have the same year', function () {
    var result = (0, _.isSameYear)(new Date(2014, 8 /* Sep */, 2), new Date(2014, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different years', function () {
    var result = (0, _.isSameYear)(new Date(2014, 8 /* Sep */, 2), new Date(2013, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameYear)(new Date(2014, 8 /* Sep */, 2).toISOString(), new Date(2014, 8 /* Sep */, 25).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameYear)(new Date(2014, 8 /* Sep */, 2).getTime(), new Date(2014, 8 /* Sep */, 25).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});