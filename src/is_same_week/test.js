"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameWeek', function () {
  it('returns true if the given dates have the same week', function () {
    var result = (0, _.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different weeks', function () {
    var result = (0, _.isSameWeek)(new Date(2014, 7 /* Aug */, 30), new Date(2014, 8 /* Sep */, 4));
    (0, _powerAssert2.default)(result === false);
  });

  it('allows to specify which day is the first day of the week', function () {
    var result = (0, _.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4), { weekStartsOn: 1 });
    (0, _powerAssert2.default)(result === false);
  });

  it('implicitly converts options', function () {
    var result = (0, _.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4),
    // $ExpectedMistake
    { weekStartsOn: '1' });
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameWeek)(new Date(2014, 7 /* Aug */, 31).toISOString(), new Date(2014, 8 /* Sep */, 4).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameWeek)(new Date(2014, 7 /* Aug */, 31).getTime(), new Date(2014, 8 /* Sep */, 4).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});