'use strict';

var _ = require('./');

suite('isSaturday', function () {
  benchmark('date-fns', function () {
    return (0, _.isSaturday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});