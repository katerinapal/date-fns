'use strict';

var _ = require('./');

suite('startOfISOYear', function () {
  benchmark('date-fns', function () {
    return (0, _.startOfISOYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});