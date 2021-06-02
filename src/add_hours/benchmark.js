"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addHours = _2.default;
var moment = _moment2.default;

suite('addHours', function () {
  benchmark('date-fns', function () {
    return addHours(this.date, 3);
  });

  benchmark('Moment.js', function () {
    return this.moment.add(3, 'hours');
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.moment = moment();
  }
});