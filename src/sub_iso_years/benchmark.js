'use strict';

var _ = require('./');

suite('subISOYears', function () {
  benchmark('date-fns', function () {
    return (0, _.subISOYears)(this.date, 7);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});