"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date is today', function () {
    var result = (0, _.isToday)(new Date(2014, 8 /* Sep */, 25));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is not today', function () {
    var result = (0, _.isToday)(new Date(2014, 8 /* Sep */, 26));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isToday)(new Date(2014, 8 /* Sep */, 25).toString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isToday)(new Date(2014, 8 /* Sep */, 25).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});