"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('differenceInMonths', function () {
  it('returns the number of full months between the given dates', function () {
    var result = (0, _.differenceInMonths)(new Date(2012, 6 /* Jul */, 2, 18, 0), new Date(2011, 6 /* Jul */, 2, 6, 0));
    (0, _powerAssert2.default)(result === 12);
  });

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _.differenceInMonths)(new Date(2011, 6 /* Jul */, 2, 6, 0), new Date(2012, 6 /* Jul */, 2, 18, 0));
    (0, _powerAssert2.default)(result === -12);
  });

  it('accepts strings', function () {
    var result = (0, _.differenceInMonths)(new Date(2000, 3 /* Apr */, 2).toISOString(), new Date(2000, 0 /* Jan */, 1).toISOString());
    (0, _powerAssert2.default)(result === 3);
  });

  it('accepts timestamps', function () {
    var result = (0, _.differenceInMonths)(new Date(2014, 7 /* Aug */, 2).getTime(), new Date(2010, 6 /* Jul */, 2).getTime());
    (0, _powerAssert2.default)(result === 49);
  });

  describe('edge cases', function () {
    it('the difference is less than a month, but the given dates are in different calendar months', function () {
      var result = (0, _.differenceInMonths)(new Date(2014, 7 /* Aug */, 1), new Date(2014, 6 /* Jul */, 31));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the same for the swapped dates', function () {
      var result = (0, _.differenceInMonths)(new Date(2014, 6 /* Jul */, 31), new Date(2014, 7 /* Aug */, 1));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the days of months of the given dates are the same', function () {
      var result = (0, _.differenceInMonths)(new Date(2014, 8 /* Sep */, 6), new Date(2014, 7 /* Aug */, 6));
      (0, _powerAssert2.default)(result === 1);
    });

    it('the given dates are the same', function () {
      var result = (0, _.differenceInMonths)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
      (0, _powerAssert2.default)(result === 0);
    });
  });
});