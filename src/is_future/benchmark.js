'use strict';

var _ = require('./');

suite('isFuture', function () {
  benchmark('date-fns', function () {
    return (0, _.isFuture)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});