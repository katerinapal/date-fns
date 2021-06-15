'use strict';

var _ = require('./');

suite('isFirstDayOfMonth', function () {
  benchmark('date-fns', function () {
    return (0, _.isFirstDayOfMonth)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});