"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('differenceInMinutes', function () {
  it('returns the number of minutes between the given dates', function () {
    var result = (0, _.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 20), new Date(2014, 6 /* Jul */, 2, 12, 6));
    (0, _powerAssert2.default)(result === 14);
  });

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 6), new Date(2014, 6 /* Jul */, 2, 12, 20));
    (0, _powerAssert2.default)(result === -14);
  });

  it('accepts strings', function () {
    var result = (0, _.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(), new Date(2014, 6 /* Jul */, 2, 23).toISOString());
    (0, _powerAssert2.default)(result === 59);
  });

  it('accepts timestamps', function () {
    var result = (0, _.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 18, 45).getTime(), new Date(2014, 8 /* Sep */, 5, 18, 15).getTime());
    (0, _powerAssert2.default)(result === 30);
  });

  describe('edge cases', function () {
    it('the difference is less than a minute, but the given dates are in different calendar minutes', function () {
      var result = (0, _.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 12, 12), new Date(2014, 8 /* Sep */, 5, 12, 11, 59));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the same for the swapped dates', function () {
      var result = (0, _.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 12, 11, 59), new Date(2014, 8 /* Sep */, 5, 12, 12));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the difference is an integral number of minutes', function () {
      var result = (0, _.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 12, 25), new Date(2014, 8 /* Sep */, 5, 12, 15));
      (0, _powerAssert2.default)(result === 10);
    });

    it('the given dates are the same', function () {
      var result = (0, _.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
      (0, _powerAssert2.default)(result === 0);
    });
  });
});