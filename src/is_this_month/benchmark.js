'use strict';

var _ = require('./');

suite('isThisMonth', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisMonth)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});