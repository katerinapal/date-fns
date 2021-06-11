"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('differenceInQuarters', function () {
  it('returns the number of full quarters between the given dates', function () {
    var result = (0, _.differenceInQuarters)(new Date(2012, 6 /* Jul */, 2, 18, 0), new Date(2011, 6 /* Jul */, 2, 6, 0));
    (0, _powerAssert2.default)(result === 4);
  });

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _.differenceInQuarters)(new Date(2011, 6 /* Jul */, 2, 6, 0), new Date(2012, 6 /* Jul */, 2, 18, 0));
    (0, _powerAssert2.default)(result === -4);
  });

  it('accepts strings', function () {
    var result = (0, _.differenceInQuarters)(new Date(2000, 11 /* Dec */, 31).toISOString(), new Date(2000, 0 /* Jan */, 1).toISOString());
    (0, _powerAssert2.default)(result === 3);
  });

  it('accepts timestamps', function () {
    var result = (0, _.differenceInQuarters)(new Date(2014, 9 /* Oct */, 2).getTime(), new Date(2010, 6 /* Jul */, 2).getTime());
    (0, _powerAssert2.default)(result === 17);
  });

  describe('edge cases', function () {
    it('the difference is less than a quarter, but the given dates are in different calendar quarters', function () {
      var result = (0, _.differenceInQuarters)(new Date(2014, 6 /* Jul */, 1), new Date(2014, 5 /* Jun */, 30));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the same for the swapped dates', function () {
      var result = (0, _.differenceInQuarters)(new Date(2014, 5 /* Jun */, 30), new Date(2014, 6 /* Jul */, 1));
      (0, _powerAssert2.default)(result === 0);
    });

    it('the days of months of the given dates are the same', function () {
      var result = (0, _.differenceInQuarters)(new Date(2014, 3 /* Apr */, 6), new Date(2014, 0 /* Jan */, 6));
      (0, _powerAssert2.default)(result === 1);
    });

    it('the given dates are the same', function () {
      var result = (0, _.differenceInQuarters)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
      (0, _powerAssert2.default)(result === 0);
    });
  });
});