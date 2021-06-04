'use strict';

var _ = require('./');

suite('isThisISOYear', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisISOYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});