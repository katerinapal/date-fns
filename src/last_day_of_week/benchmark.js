'use strict';

var _ = require('./');

suite('lastDayOfWeek', function () {
  benchmark('date-fns', function () {
    return (0, _.lastDayOfWeek)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});