'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addISOYears = _2.default;

suite('addISOYears', function () {
  benchmark('date-fns', function () {
    return addISOYears(this.date, 7);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});