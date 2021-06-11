"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('lastDayOfWeek', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the last day of a week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = (0, _.lastDayOfWeek)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 6));
  });

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = (0, _.lastDayOfWeek)(date, { weekStartsOn: 1 });
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 7));
  });

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    // $ExpectedMistake
    var result = (0, _.lastDayOfWeek)(date, { weekStartsOn: '1' });
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 7));
  });

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = (0, _.lastDayOfWeek)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 6));
  });

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = (0, _.lastDayOfWeek)(date);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 6));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    (0, _.lastDayOfWeek)(date);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  describe('edge cases', function () {
    context('when the given day is before the start of a week', function () {
      it('it returns the last day of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 6);
        var result = (0, _.lastDayOfWeek)(date, { weekStartsOn: 3 });
        _powerAssert2.default.deepEqual(result, new Date(2014, 9 /* Oct */, 7));
      });
    });

    context('when the given day is the start of a week', function () {
      it('it returns the last day of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 8);
        var result = (0, _.lastDayOfWeek)(date, { weekStartsOn: 3 });
        _powerAssert2.default.deepEqual(result, new Date(2014, 9 /* Oct */, 14));
      });
    });

    context('when the given day is after the start of a week', function () {
      it('it returns the last day of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 10);
        var result = (0, _.lastDayOfWeek)(date, { weekStartsOn: 3 });
        _powerAssert2.default.deepEqual(result, new Date(2014, 9 /* Oct */, 14));
      });
    });

    it('handles the week at the end of a year', function () {
      var date = new Date(2014, 11 /* Dec */, 29);
      var result = (0, _.lastDayOfWeek)(date, { weekStartsOn: 5 });
      _powerAssert2.default.deepEqual(result, new Date(2015, 0 /* Jan */, 1));
    });
  });
});