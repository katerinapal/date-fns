"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isThisWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same week', function () {
    var date = new Date(2014, 8 /* Sep */, 21);
    (0, _powerAssert2.default)((0, _.isThisWeek)(date) === true);
  });

  it('returns false if the given date and the current date have different weeks', function () {
    var date = new Date(2014, 8 /* Sep */, 29);
    (0, _powerAssert2.default)((0, _.isThisWeek)(date) === false);
  });

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 28);
    (0, _powerAssert2.default)((0, _.isThisWeek)(date, { weekStartsOn: 1 }) === true);
  });

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 28);
    // $ExpectedMistake
    (0, _powerAssert2.default)((0, _.isThisWeek)(date, { weekStartsOn: '1' }) === true);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 21).toISOString();
    (0, _powerAssert2.default)((0, _.isThisWeek)(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 21).getTime();
    (0, _powerAssert2.default)((0, _.isThisWeek)(date) === true);
  });
});