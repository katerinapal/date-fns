'use strict';

var _ = require('./');

suite('isWeekend', function () {
  benchmark('date-fns', function () {
    return (0, _.isWeekend)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});