'use strict';

var _ = require('./');

suite('isWednesday', function () {
  benchmark('date-fns', function () {
    return (0, _.isWednesday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});