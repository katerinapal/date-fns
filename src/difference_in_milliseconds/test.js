"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('differenceInMilliseconds', function () {
  it('returns the number of milliseconds between the given dates', function () {
    var result = (0, _.differenceInMilliseconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700), new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600));
    (0, _powerAssert2.default)(result === 100);
  });

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = (0, _.differenceInMilliseconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600), new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700));
    (0, _powerAssert2.default)(result === -100);
  });

  it('accepts strings', function () {
    var result = (0, _.differenceInMilliseconds)(new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(), new Date(2014, 6 /* Jul */, 2, 23, 59, 58, 999).toISOString());
    (0, _powerAssert2.default)(result === 1000);
  });

  it('accepts timestamps', function () {
    var result = (0, _.differenceInMilliseconds)(new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime(), new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime());
    (0, _powerAssert2.default)(result === 0);
  });
});