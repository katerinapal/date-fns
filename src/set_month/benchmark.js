"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setMonth = _2.default;
var moment = _moment2.default;

suite('setMonth', function () {
  benchmark('date-fns', function () {
    return setMonth(this.date, 6);
  });

  benchmark('Moment.js', function () {
    return this.moment.month(6);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = moment();
  }
});