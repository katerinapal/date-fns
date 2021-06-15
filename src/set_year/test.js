"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setYear', function () {
  it('sets the year', function () {
    var result = (0, _.setYear)(new Date(2014, 8 /* Sep */, 1), 2013);
    _powerAssert2.default.deepEqual(result, new Date(2013, 8 /* Sep */, 1));
  });

  it('accepts a string', function () {
    var result = (0, _.setYear)(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016);
    _powerAssert2.default.deepEqual(result, new Date(2016, 8 /* Sep */, 1));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setYear)(new Date(2014, 8 /* Sep */, 1).getTime(), 2016);
    _powerAssert2.default.deepEqual(result, new Date(2016, 8 /* Sep */, 1));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setYear)(new Date(2014, 8 /* Sep */, 1), '2013');
    _powerAssert2.default.deepEqual(result, new Date(2013, 8 /* Sep */, 1));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1);
    (0, _.setYear)(date, 2011);
    _powerAssert2.default.deepEqual(date, new Date(2014, 8 /* Sep */, 1));
  });
});