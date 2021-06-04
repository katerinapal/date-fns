'use strict';

var _ = require('./');

suite('isThisISOWeek', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisISOWeek)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});