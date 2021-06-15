'use strict';

var _ = require('./');

suite('isSoLastWeek', function () {
  benchmark('date-fns', function () {
    return (0, _.isSoLastWeek)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});