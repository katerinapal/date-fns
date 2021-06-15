'use strict';

var _ = require('./');

suite('lastDayOfYear', function () {
  benchmark('date-fns', function () {
    return (0, _.lastDayOfYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});