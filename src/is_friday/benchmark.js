'use strict';

var _ = require('./');

suite('isFriday', function () {
  benchmark('date-fns', function () {
    return (0, _.isFriday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});