"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isDate', function () {
  it('returns true if the given argument is an instance of Date', function () {
    var result = (0, _.isDate)(new Date());
    (0, _powerAssert2.default)(result === true);
  });

  it('returns true if the given argument is an invalid Date', function () {
    var result = (0, _.isDate)(new Date(''));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given argument is not an instance of Date', function () {
    var result = (0, _.isDate)(1404259200000);
    (0, _powerAssert2.default)(result === false);
  });
});