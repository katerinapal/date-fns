'use strict';

var _ = require('./');

suite('addISOYears', function () {
  benchmark('date-fns', function () {
    return (0, _.addISOYears)(this.date, 7);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});