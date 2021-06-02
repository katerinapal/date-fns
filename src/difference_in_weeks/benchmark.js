"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInWeeks = _2.default;
var moment = _moment2.default;

suite('differenceInWeeks', function () {
  benchmark('date-fns', function () {
    return differenceInWeeks(this.dateA, this.dateB);
  });

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'week');
  });
}, {
  setup: function setup() {
    this.dateA = new Date();
    this.momentA = moment();
    this.dateB = new Date(this.dateA.getTime() + 604800000);
    this.momentB = this.momentA.clone().add(7, 'days');
  }
});