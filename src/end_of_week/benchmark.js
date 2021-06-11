"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('endOfWeek', function () {
  benchmark('date-fns', function () {
    return (0, _.endOfWeek)(this.date);
  });

  benchmark('Moment.js', function () {
    return this.moment.endOf('week');
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = (0, _moment2.default)();
  }
});