"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('isDate', function () {
  benchmark('date-fns', function () {
    return (0, _.isDate)(this.string);
  });

  benchmark('Moment.js', function () {
    return _moment2.default.isDate(this.string);
  });
}, {
  setup: function setup() {
    this.string = '123';
  }
});