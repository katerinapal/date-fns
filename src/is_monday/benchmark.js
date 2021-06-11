'use strict';

var _ = require('./');

suite('isMonday', function () {
  benchmark('date-fns', function () {
    return (0, _.isMonday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});