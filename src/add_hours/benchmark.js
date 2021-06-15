"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('addHours', function () {
  benchmark('date-fns', function () {
    return (0, _.addHours)(this.date, 3);
  });

  benchmark('Moment.js', function () {
    return this.moment.add(3, 'hours');
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = (0, _moment2.default)();
  }
});