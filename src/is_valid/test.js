"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = (0, _.isValid)(new Date());
    (0, _powerAssert2.default)(result === true);
  });

  it('returns false if the given date is invalid', function () {
    var result = (0, _.isValid)(new Date(''));
    (0, _powerAssert2.default)(result === false);
  });

  it('throws an exception if the argument is not an instance of Date', function () {
    // $ExpectedMistake
    var block = _.isValid.bind(null, '');
    _powerAssert2.default.throws(block, TypeError, '[object String] is not an instance of Date');
  });
});