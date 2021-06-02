'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfTomorrow = _2.default;

suite('endOfTomorrow', function () {
  benchmark('date-fns', function () {
    return endOfTomorrow();
  });
});