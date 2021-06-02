"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isDate = _2.default;
var moment = _moment2.default;

suite('isDate', function () {
  benchmark('date-fns', function () {
    return isDate(this.string);
  });

  benchmark('Moment.js', function () {
    return moment.isDate(this.string);
  });
}, {
  setup: function setup() {
    this.string = '123';
  }
});