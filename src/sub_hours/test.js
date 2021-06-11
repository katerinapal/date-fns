"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('subHours', function () {
  it('subtracts the given numbers of hours', function () {
    var result = (0, _.subHours)(new Date(2014, 6 /* Jul */, 11, 1, 0), 2);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it('accepts a string', function () {
    var result = (0, _.subHours)(new Date(2014, 6 /* Jul */, 12, 1, 0).toISOString(), 26);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.subHours)(new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.subHours)(new Date(2014, 6 /* Jul */, 11, 1, 0), '2');
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0);
    (0, _.subHours)(date, 10);
    _powerAssert2.default.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0));
  });
});