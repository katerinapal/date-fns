"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('min', function () {
  it('returns the earliest date', function () {
    var result = (0, _.min)(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
    _powerAssert2.default.deepEqual(result, new Date(1987, 1 /* Feb */, 11));
  });

  it('allows to pass more than 2 arguments', function () {
    var result = (0, _.min)(new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10), new Date(1985, 6 /* Jul */, 2), new Date(1990, 0 /* Jan */, 1));
    _powerAssert2.default.deepEqual(result, new Date(1985, 6 /* Jul */, 2));
  });

  it('accepts strings', function () {
    var result = (0, _.min)(new Date(1987, 1 /* Feb */, 11).toISOString(), new Date(1989, 6 /* Jul */, 10).toISOString());
    _powerAssert2.default.deepEqual(result, new Date(1987, 1 /* Feb */, 11));
  });

  it('accepts timestamps', function () {
    var result = (0, _.min)(new Date(1989, 6 /* Jul */, 10).getTime(), new Date(1987, 1 /* Feb */, 11).getTime());
    _powerAssert2.default.deepEqual(result, new Date(1987, 1 /* Feb */, 11));
  });
});