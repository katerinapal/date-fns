"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getQuarter', function () {
  it('returns the quarter of the given date', function () {
    var result = (0, _.getQuarter)(new Date(2014, 6 /* Jul */, 2));
    (0, _powerAssert2.default)(result === 3);
  });

  it('accepts a string', function () {
    var result = (0, _.getQuarter)(new Date(2014, 3 /* Apr */, 2).toISOString());
    (0, _powerAssert2.default)(result === 2);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.getQuarter)(new Date(2014, 3 /* Apr */, 2).getTime());
    (0, _powerAssert2.default)(result === 2);
  });
});