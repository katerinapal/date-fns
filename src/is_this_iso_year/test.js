"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isThisISOYear', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same ISO week-numbering year', function () {
    var date = new Date(2013, 11 /* Dec */, 30);
    (0, _powerAssert2.default)((0, _.isThisISOYear)(date) === true);
  });

  it('returns false if the given date and the current date have different ISO week-numbering years', function () {
    var date = new Date(2014, 11 /* Dec */, 29);
    (0, _powerAssert2.default)((0, _.isThisISOYear)(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 28).toISOString();
    (0, _powerAssert2.default)((0, _.isThisISOYear)(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 1).getTime();
    (0, _powerAssert2.default)((0, _.isThisISOYear)(date) === true);
  });

  it('handles dates before 100 AD', function () {
    var now = new Date(0);
    now.setFullYear(5, 0 /* Jan */, 1);
    now.setHours(0, 0, 0, 0);
    this.clock = sinon.useFakeTimers(now.getTime());

    var initialDate = new Date(0);
    initialDate.setFullYear(5, 0 /* Jan */, 2);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _.isThisISOYear)(initialDate);
    (0, _powerAssert2.default)(result === true);

    this.clock.restore();
  });
});