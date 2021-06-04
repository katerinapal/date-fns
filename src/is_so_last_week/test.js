"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSoLastWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date is so last week', function () {
    var date = new Date(2014, 8 /* Sep */, 18);
    (0, _powerAssert2.default)((0, _.isSoLastWeek)(date) === true);
  });

  it('returns false if the given date is totally this week', function () {
    var date = new Date(2014, 8 /* Sep */, 24);
    (0, _powerAssert2.default)((0, _.isSoLastWeek)(date) === false);
  });

  it('returns false if the given date is so beyond last week', function () {
    var date = new Date(2013, 7 /* Aug */, 31);
    (0, _powerAssert2.default)((0, _.isSoLastWeek)(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 18).toISOString();
    (0, _powerAssert2.default)((0, _.isSoLastWeek)(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 18).getTime();
    (0, _powerAssert2.default)((0, _.isSoLastWeek)(date) === true);
  });
});