'use strict';

var _ = require('./');

suite('isLastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return (0, _.isLastDayOfMonth)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});