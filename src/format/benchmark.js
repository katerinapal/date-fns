"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var format = _2.default;
var moment = _moment2.default;

suite('format', function () {
  benchmark('date-fns', function () {
    return format(this.date, 'dddd, MMMM Do YYYY, h:mm:ss a');
  });

  benchmark('Moment.js', function () {
    return this.moment.format('dddd, MMMM Do YYYY, h:mm:ss a');
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = moment();
  }
});