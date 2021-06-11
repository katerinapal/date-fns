"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isThisSecond', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same second', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15);
    (0, _powerAssert2.default)((0, _.isThisSecond)(date) === true);
  });

  it('returns false if the given date and the current date have different seconds', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 16);
    (0, _powerAssert2.default)((0, _.isThisSecond)(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 750).toISOString();
    (0, _powerAssert2.default)((0, _.isThisSecond)(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 250).getTime();
    (0, _powerAssert2.default)((0, _.isThisSecond)(date) === true);
  });
});