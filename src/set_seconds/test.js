"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setSeconds', function () {
  it('sets the seconds', function () {
    var result = (0, _.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
  });

  it('accepts a string', function () {
    var result = (0, _.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 18));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45);
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '45');
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40);
    (0, _.setSeconds)(date, 15);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40));
  });
});