'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisMonth = _2.default;

suite('isThisMonth', function () {
  benchmark('date-fns', function () {
    return isThisMonth(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});