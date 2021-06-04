"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isSameISOWeek', function () {
  it('returns true if the given dates have the same ISO week', function () {
    var result = (0, _.isSameISOWeek)(new Date(2014, 8 /* Sep */, 1), new Date(2014, 8 /* Sep */, 7));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates have different ISO weeks', function () {
    var result = (0, _.isSameISOWeek)(new Date(2014, 8 /* Sep */, 1), new Date(2014, 8 /* Sep */, 14));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isSameISOWeek)(new Date(2014, 5 /* Jun */, 30).toISOString(), new Date(2014, 6 /* Jul */, 2).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isSameISOWeek)(new Date(2014, 5 /* Jun */, 30).getTime(), new Date(2014, 6 /* Jul */, 2).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});