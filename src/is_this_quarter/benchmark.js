'use strict';

var _ = require('./');

suite('isThisQuarter', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisQuarter)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});