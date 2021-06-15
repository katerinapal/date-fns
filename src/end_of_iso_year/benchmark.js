'use strict';

var _ = require('./');

suite('endOfISOYear', function () {
  benchmark('date-fns', function () {
    return (0, _.endOfISOYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});