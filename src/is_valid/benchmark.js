"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('isValid', function () {
  benchmark('date-fns', function () {
    return (0, _.isValid)(this.invalidDate);
  });

  benchmark('Moment.js', function () {
    return this.invalidMoment.isValid();
  });
}, {
  setup: function setup() {
    this.invalidDate = new Date(NaN);
    this.invalidMoment = (0, _moment2.default)(new Date(NaN));
  }
});