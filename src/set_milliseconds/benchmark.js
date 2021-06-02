"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setMilliseconds = _2.default;
var moment = _moment2.default;

suite('setMilliseconds', function () {
  benchmark('date-fns', function () {
    return setMilliseconds(this.date, 400);
  });

  benchmark('Moment.js', function () {
    return this.moment.milliseconds(400);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = moment();
  }
});