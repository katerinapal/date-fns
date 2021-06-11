"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isEqual', function () {
  it('returns true if the given dates are equal', function () {
    var result = (0, _.isEqual)(new Date(1987, 1 /* Feb */, 11), new Date(1987, 1 /* Feb */, 11));
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given dates are not equal', function () {
    var result = (0, _.isEqual)(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
    (0, _powerAssert2.default)(result === false);
  });

  it('accepts a string', function () {
    var result = (0, _.isEqual)(new Date(1987, 1 /* Feb */, 11).toISOString(), new Date(1987, 1 /* Feb */, 11).toISOString());
    (0, _powerAssert2.default)(result === true);
  });

  it('accepts a timestamp', function () {
    var result = (0, _.isEqual)(new Date(1987, 1 /* Feb */, 11).getTime(), new Date(1987, 1 /* Feb */, 11).getTime());
    (0, _powerAssert2.default)(result === true);
  });
});