'use strict';

var _ = require('./');

suite('isThisWeek', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisWeek)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});