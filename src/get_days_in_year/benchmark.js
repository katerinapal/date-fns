'use strict';

var _ = require('./');

suite('getDaysInYear', function () {
  benchmark('date-fns', function () {
    return (0, _.getDaysInYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});