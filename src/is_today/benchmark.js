'use strict';

var _ = require('./');

suite('isToday', function () {
  benchmark('date-fns', function () {
    return (0, _.isToday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});