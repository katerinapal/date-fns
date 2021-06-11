"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setMinutes', function () {
  it('sets the minutes', function () {
    var result = (0, _.setMinutes)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40));
  });

  it('accepts a string', function () {
    var result = (0, _.setMinutes)(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 18));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setMinutes)(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 5));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setMinutes)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), '45');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30);
    (0, _.setMinutes)(date, 15);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30));
  });
});