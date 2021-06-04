'use strict';

var _ = require('./');

suite('lastDayOfISOYear', function () {
  benchmark('date-fns', function () {
    return (0, _.lastDayOfISOYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});