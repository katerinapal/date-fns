"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    var result = (0, _.setDayOfYear)(new Date(2014, 6 /* Jul */, 2), 2);
    _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 2));
  });

  it('accepts a string', function () {
    var result = (0, _.setDayOfYear)(new Date(2014, 6 /* Jul */, 2).toISOString(), 60);
    _powerAssert2.default.deepEqual(result, new Date(2014, 2 /* Mar */, 1));
  });

  it('accepts a timestamp', function () {
    var result = (0, _.setDayOfYear)(new Date(2014, 6 /* Jul */, 2).getTime(), 60);
    _powerAssert2.default.deepEqual(result, new Date(2014, 2 /* Mar */, 1));
  });

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = (0, _.setDayOfYear)(new Date(2014, 6 /* Jul */, 2), '2');
    _powerAssert2.default.deepEqual(result, new Date(2014, 0 /* Jan */, 2));
  });

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2);
    (0, _.setDayOfYear)(date, 365);
    _powerAssert2.default.deepEqual(date, new Date(2014, 6 /* Jul */, 2));
  });
});