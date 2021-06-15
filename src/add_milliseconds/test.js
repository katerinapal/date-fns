"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('addMilliseconds', function () {
  it('adds the given number of milliseconds', function () {
    var result = (0, _.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750));
  });

  it('accepts a string', function () {
    var result = (0, _.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 5), '750');
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 755));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
    (0, _.addMilliseconds)(date, 250);
    _powerAssert2.default.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0));
  });
});