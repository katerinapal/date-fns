"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('isSameSecond', function () {
  benchmark('date-fns', function () {
    return (0, _.isSameSecond)(this.dateA, this.dateB);
  });

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'second');
  });
}, {
  setup: function setup() {
    this.dateA = new Date();
    this.momentA = (0, _moment2.default)();
    this.dateB = new Date(this.dateA.getTime() + 604800000);
    this.momentB = this.momentA.clone().add(7, 'days');
  }
});