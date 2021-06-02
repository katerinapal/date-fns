'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isMonday = _2.default;

suite('isMonday', function () {
  benchmark('date-fns', function () {
    return isMonday(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});