"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('differenceInSeconds', function () {
  it('returns the number of seconds between the given dates', function () {
    var result = (0, _.differenceInSeconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 20), new Date(2014, 6 /* Jul */, 2, 12, 30, 6));
    (0, _powerAssert2.default)(result === 14);
  });

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _.differenceInSeconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 6), new Date(2014, 6 /* Jul */, 2, 12, 30, 20));
    (0, _powerAssert2.default)(result === -14);
  });

  it('accepts strings', function () {
    var result = (0, _.differenceInSeconds)(new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(), new Date(2014, 6 /* Jul */, 2, 23, 59).toISOString());
    (0, _powerAssert2.default)(result === 59);
  });

  it('accepts timestamps', function () {
    var result = (0, _.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 18, 30, 45).getTime(), new Date(2014, 8 /* Sep */, 5, 18, 30, 15).getTime());
    (0, _powerAssert2.default)(result === 30);
  });

  describe('edge cases', function () {
    it('the difference is less than a second, but the given dates are in different calendar seconds', function () {
      var result = (0, _.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 12, 30, 12), new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the same for the swapped dates', function () {
      var result = (0, _.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999), new Date(2014, 8 /* Sep */, 5, 12, 30, 12));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the difference is an integral number of seconds', function () {
      var result = (0, _.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 12, 30, 25), new Date(2014, 8 /* Sep */, 5, 12, 30, 15));
      (0, _powerAssert2.default)(result === 10);
    });

    it('the given dates are the same', function () {
      var result = (0, _.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
      (0, _powerAssert2.default)(result === 0);
    });
  });
});