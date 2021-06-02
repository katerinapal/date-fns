'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isWednesday = _2.default;

suite('isWednesday', function () {
  benchmark('date-fns', function () {
    return isWednesday(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});