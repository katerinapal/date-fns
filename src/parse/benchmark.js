"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var parse = _2.default;
var moment = _moment2.default;

suite('parse', function () {
  benchmark('date-fns', function () {
    return parse('2014-10-25T13:46:20+07:00');
  });

  benchmark('Moment.js', function () {
    return moment('2014-10-25T13:46:20+07:00');
  });
});