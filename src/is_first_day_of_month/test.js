"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isFirstDayOfMonth', function () {
  it('returns true if the given date is in the last day of month', function () {
    var result = (0, _.isFirstDayOfMonth)(new Date(2014, 9 /* Oct */, 1));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not in the last day of month', function () {
    var result = (0, _.isFirstDayOfMonth)(new Date(2014, 9 /* Oct */, 2));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 9 /* Oct */, 1).toISOString();
    var result = (0, _.isFirstDayOfMonth)(date);
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 9 /* Oct */, 1).getTime();
    var result = (0, _.isFirstDayOfMonth)(date);
    (0, _powerAssert2.default)(result === true);
  });
});