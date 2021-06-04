"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('endOfToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('returns the current date with the time setted to 23:59:59.999', function () {
    var result = (0, _.endOfToday)();
    _powerAssert2.default.deepEqual(result, new Date(2014, 8 /* Sep */, 25, 23, 59, 59, 999));
  });
});