'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfISOWeek = _2.default;

suite('lastDayOfISOWeek', function () {
  benchmark('date-fns', function () {
    return lastDayOfISOWeek(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});