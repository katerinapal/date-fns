"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setYear = _2.default;
var moment = _moment2.default;

suite('setYear', function () {
  benchmark('date-fns', function () {
    return setYear(this.date, 2014);
  });

  benchmark('Moment.js', function () {
    return this.moment.year(2014);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = moment();
  }
});