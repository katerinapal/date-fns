"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getYear', function () {
  it('returns the year of the given date', function () {
    var result = (0, _.getYear)(new Date(2014, 6 /* Jul */, 2));
    (0, _powerAssert2.default)(result === 2014);
  });

  it('accepts a string', function () {
    var result = (0, _.getYear)(new Date(700, 6 /* Jul */, 2).toISOString());
    (0, _powerAssert2.default)(result === 700);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.getYear)(new Date(20000, 3 /* Apr */, 2).getTime());
    (0, _powerAssert2.default)(result === 20000);
  });
});