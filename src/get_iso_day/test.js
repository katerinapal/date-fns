"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getISODay', function () {
  it('returns the day of the ISO week of the given date', function () {
    var result = (0, _.getISODay)(new Date(2012, 1 /* Feb */, 29));
    (0, _powerAssert2.default)(result === 3);
  });

  it('returns 7 if the given day is Sunday', function () {
    var result = (0, _.getISODay)(new Date(2014, 5 /* Jun */, 1));
    (0, _powerAssert2.default)(result === 7);
  });

  it('accepts a string', function () {
    var result = (0, _.getISODay)(new Date(2014, 6 /* Jul */, 2).toISOString());
    (0, _powerAssert2.default)(result === 3);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.getISODay)(new Date(2014, 5 /* Jun */, 1).getTime());
    (0, _powerAssert2.default)(result === 7);
  });
});