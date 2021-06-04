'use strict';

var _ = require('./');

suite('isThisSecond', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisSecond)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});