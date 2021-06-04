"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isThisQuarter', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    var date = new Date(2014, 6 /* Jul */, 2);
    (0, _powerAssert2.default)((0, _.isThisQuarter)(date) === true);
  });

  it('returns false if the given date and the current date have different quarters', function () {
    var date = new Date(2014, 1 /* Feb */, 11);
    (0, _powerAssert2.default)((0, _.isThisQuarter)(date) === false);
  });

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString();
    (0, _powerAssert2.default)((0, _.isThisQuarter)(date) === true);
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime();
    (0, _powerAssert2.default)((0, _.isThisQuarter)(date) === true);
  });
});