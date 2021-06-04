"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('getSeconds', function () {
  benchmark('date-fns', function () {
    return (0, _.getSeconds)(this.date);
  });

  benchmark('Moment.js', function () {
    return this.moment.seconds();
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = (0, _moment2.default)();
  }
});