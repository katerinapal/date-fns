'use strict';

var _ = require('./');

suite('isThursday', function () {
  benchmark('date-fns', function () {
    return (0, _.isThursday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});