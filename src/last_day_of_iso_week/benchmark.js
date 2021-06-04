'use strict';

var _ = require('./');

suite('lastDayOfISOWeek', function () {
  benchmark('date-fns', function () {
    return (0, _.lastDayOfISOWeek)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});