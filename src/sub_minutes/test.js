"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('subMinutes', function () {
  it('subtracts the given number of minutes', function () {
    var result = (0, _.subMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30));
  });

  it('accepts a string', function () {
    var result = (0, _.subMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 40));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.subMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20);
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 40));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.subMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0), '30');
    _powerAssert2.default.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 0);
    (0, _.subMinutes)(date, 25);
    _powerAssert2.default.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0));
  });
});