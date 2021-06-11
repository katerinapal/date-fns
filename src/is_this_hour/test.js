"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isThisHour', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same hour', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18);
    (0, _powerAssert2.default)((0, _.isThisHour)(date) === true);
  });

  it('returns false if the given date and the current date have different hours', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 19);
    (0, _powerAssert2.default)((0, _.isThisHour)(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 59, 59, 999).toISOString();
    (0, _powerAssert2.default)((0, _.isThisHour)(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 45).getTime();
    (0, _powerAssert2.default)((0, _.isThisHour)(date) === true);
  });
});