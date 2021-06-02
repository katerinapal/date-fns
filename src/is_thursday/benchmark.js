'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThursday = _2.default;

suite('isThursday', function () {
  benchmark('date-fns', function () {
    return isThursday(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});