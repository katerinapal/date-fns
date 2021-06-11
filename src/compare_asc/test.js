"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('compareAsc', function () {
  it('returns 0 if the given dates are equal', function () {
    var result = (0, _.compareAsc)(new Date(1989, 6 /* Jul */, 10), new Date(1989, 6 /* Jul */, 10));
    (0, _powerAssert2.default)(result === 0);
  });

  it('returns -1 if the first date is before the second one', function () {
    var result = (0, _.compareAsc)(new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10));
    (0, _powerAssert2.default)(result === -1);
  });

  it('returns 1 if the first date is after the second one', function () {
    var result = (0, _.compareAsc)(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
    (0, _powerAssert2.default)(result === 1);
  });

  it('sorts the dates array in the chronological order when function is passed as the argument to Array.prototype.sort()', function () {
    var unsortedArray = [new Date(1995, 6 /* Jul */, 2), new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10)];

    var sortedArray = [new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10), new Date(1995, 6 /* Jul */, 2)];

    var result = unsortedArray.sort(_.compareAsc);

    _powerAssert2.default.deepEqual(result, sortedArray);
  });

  it('accepts strings', function () {
    var result = (0, _.compareAsc)(new Date(1987, 1 /* Feb */, 11).toISOString(), new Date(1989, 6 /* Jul */, 10).toISOString());
    (0, _powerAssert2.default)(result === -1);
  });

  it('accepts timestamps', function () {
    var result = (0, _.compareAsc)(new Date(1987, 1 /* Feb */, 11).getTime(), new Date(1989, 6 /* Jul */, 10).getTime());
    (0, _powerAssert2.default)(result === -1);
  });
});