'use strict';

var _ = require('./');

suite('isTuesday', function () {
  benchmark('date-fns', function () {
    return (0, _.isTuesday)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});