"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameISOYear', function () {
  it('returns true if the given dates have the same ISO week-numbering year', function () {
    var result = (0, _.isSameISOYear)(new Date(2003, 11 /* Dec */, 29), new Date(2005, 0 /* Jan */, 2));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different ISO week-numbering years', function () {
    var result = (0, _.isSameISOYear)(new Date(2014, 11 /* Dec */, 28), new Date(2014, 11 /* Dec */, 29));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameISOYear)(new Date(2003, 11 /* Dec */, 29).toISOString(), new Date(2005, 0 /* Jan */, 2).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameISOYear)(new Date(2003, 11 /* Dec */, 29).getTime(), new Date(2005, 0 /* Jan */, 2).getTime());
    (0, _powerAssert2.default)(result === true);
  });

  it('handles dates before 100 AD', function () {
    var firstDate = new Date(0);
    firstDate.setFullYear(5, 0 /* Jan */, 1);
    firstDate.setHours(0, 0, 0, 0);
    var secondDate = new Date(0);
    secondDate.setFullYear(5, 0 /* Jan */, 2);
    secondDate.setHours(0, 0, 0, 0);
    var result = (0, _.isSameISOYear)(firstDate, secondDate);
    (0, _powerAssert2.default)(result === true);
  });
});