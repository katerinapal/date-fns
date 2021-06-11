'use strict';

var _ = require('./');

suite('isThisYear', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisYear)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});