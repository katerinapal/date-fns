"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setQuarter = _2.default;
var moment = _moment2.default;

suite('setQuarter', function () {
  benchmark('date-fns', function () {
    return setQuarter(this.date, 3);
  });

  benchmark('Moment.js', function () {
    return this.moment.quarter(3);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = moment();
  }
});