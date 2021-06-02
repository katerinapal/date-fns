"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isValid = _2.default;
var moment = _moment2.default;

suite('isValid', function () {
  benchmark('date-fns', function () {
    return isValid(this.invalidDate);
  });

  benchmark('Moment.js', function () {
    return this.invalidMoment.isValid();
  });
}, {
  setup: function setup() {
    this.invalidDate = new Date(NaN);
    this.invalidMoment = moment(new Date(NaN));
  }
});