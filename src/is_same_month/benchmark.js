"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameMonth = _2.default;
var moment = _moment2.default;

suite('isSameMonth', function () {
  benchmark('date-fns', function () {
    return isSameMonth(this.dateA, this.dateB);
  });

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'month');
  });
}, {
  setup: function setup() {
    this.dateA = new Date();
    this.momentA = moment();
    this.dateB = new Date(this.dateA.getTime() + 604800000);
    this.momentB = this.momentA.clone().add(7, 'days');
  }
});