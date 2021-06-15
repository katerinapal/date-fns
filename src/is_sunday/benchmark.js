'use strict';

var _ = require('./');

suite('isSunday', function () {
  benchmark('date-fns', function () {
    return (0, _.isSunday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});