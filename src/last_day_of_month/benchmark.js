'use strict';

var _ = require('./');

suite('lastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return (0, _.lastDayOfMonth)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});