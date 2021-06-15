'use strict';

var _ = require('./');

suite('isThisMinute', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisMinute)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});