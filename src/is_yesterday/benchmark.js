'use strict';

var _ = require('./');

suite('isYesterday', function () {
  benchmark('date-fns', function () {
    return (0, _.isYesterday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});