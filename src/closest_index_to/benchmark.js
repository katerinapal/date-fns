'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var closestIndexTo = _2.default;

suite('closestIndexTo', function () {
  benchmark('date-fns', function () {
    return closestIndexTo(this.date, this.array);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.array = [new Date(this.date.getTime() + 604800001), new Date(this.date.getTime() - 604800000)];
  }
});