'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfToday = _2.default;

suite('startOfToday', function () {
  benchmark('date-fns', function () {
    return startOfToday();
  });
});