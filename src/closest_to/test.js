"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('closestTo', function () {
  it('returns the date from the given array closest to the given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2);
    var result = (0, _.closestTo)(date, [new Date(2015, 7 /* Aug */, 31), new Date(2012, 6 /* Jul */, 2)]);
    _powerAssert2.default.deepEqual(result, new Date(2015, 7 /* Aug */, 31));
  });

  it('works if the closest date from the given array is before the given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500);
    var result = (0, _.closestTo)(date, [new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900), new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900), new Date(2014, 6 /* Jul */, 2, 6, 30, 10)]);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900));
  });

  it('accepts strings', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString();
    var result = (0, _.closestTo)(date, [new Date(2012, 6 /* Jul */, 2).toISOString(), new Date(2015, 7 /* Aug */, 31).toISOString()]);
    _powerAssert2.default.deepEqual(result, new Date(2015, 7 /* Aug */, 31));
  });

  it('accepts timestamps', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime();
    var result = (0, _.closestTo)(date, [new Date(2015, 7 /* Aug */, 31).getTime(), new Date(2012, 6 /* Jul */, 2).getTime()]);
    _powerAssert2.default.deepEqual(result, new Date(2015, 7 /* Aug */, 31));
  });

  it('returns undefined if the given array is empty', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime();
    var result = (0, _.closestTo)(date, []);
    (0, _powerAssert2.default)(result === undefined);
  });

  it('throws an exception if the second argument is not an instance of Array', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime();
    // $ExpectedMistake
    var block = _.closestTo.bind(null, date, '');
    _powerAssert2.default.throws(block, TypeError, '[object String] is not an instance of Array');
  });
});