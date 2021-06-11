'use strict';

var _ = require('./');

suite('isPast', function () {
  benchmark('date-fns', function () {
    return (0, _.isPast)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});