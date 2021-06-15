"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isWithinRange', function () {
  it('returns true if the given date in within the given range', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 9 /* Oct */, 31), new Date(2014, 8 /* Sep */, 1), new Date(2014, 11 /* Dec */, 31));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns true if the given date has same time as the left boundary of the range', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 8 /* Sep */, 1), new Date(2014, 8 /* Sep */, 1), new Date(2014, 11 /* Dec */, 31));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns true if the given date has same time as the right boundary of the range', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 11 /* Dec */, 31), new Date(2014, 8 /* Sep */, 1), new Date(2014, 11 /* Dec */, 31));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns true if the given date and the both boundaries are the same', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 11 /* Dec */, 31), new Date(2014, 11 /* Dec */, 31), new Date(2014, 11 /* Dec */, 31));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is outside of the range', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 1 /* Feb */, 11), new Date(2014, 8 /* Sep */, 1), new Date(2014, 11 /* Dec */, 31));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 9 /* Oct */, 31).toISOString(), new Date(2014, 8 /* Sep */, 1).toISOString(), new Date(2014, 11 /* Dec */, 31).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isWithinRange)(new Date(2014, 9 /* Oct */, 31).getTime(), new Date(2014, 8 /* Sep */, 1).getTime(), new Date(2014, 11 /* Dec */, 31).getTime());
    (0, _powerAssert2.default)(result === true);
  });

  it('throws an exception if the start date is after the end date', function () {
    var block = _.isWithinRange.bind(null, new Date(2014, 9 /* Oct */, 31), new Date(2014, 11 /* Dec */, 31), new Date(2014, 8 /* Sep */, 1));
    _powerAssert2.default.throws(block);
  });
});