"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getTime', function () {
  it('returns the timestamp of the given date', function () {
    var timestamp = 1483228800000;
    var result = (0, _.getTime)(new Date(timestamp));
    (0, _powerAssert2.default)(result === timestamp);
  });

  it('accepts a string', function () {
    var timestamp = 1484503736150;
    var result = (0, _.getTime)(new Date(timestamp).toISOString());
    (0, _powerAssert2.default)(result === timestamp);
  });

  it('accepts a timestamp (and returns it unchanged)', function () {
    var timestamp = 804643200000;
    var result = (0, _.getTime)(timestamp);
    (0, _powerAssert2.default)(result === timestamp);
  });
});