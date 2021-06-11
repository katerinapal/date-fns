'use strict';

var _ = require('./');

suite('lastDayOfQuarter', function () {
  benchmark('date-fns', function () {
    return (0, _.lastDayOfQuarter)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});