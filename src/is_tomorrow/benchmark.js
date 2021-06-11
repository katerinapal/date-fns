'use strict';

var _ = require('./');

suite('isTomorrow', function () {
  benchmark('date-fns', function () {
    return (0, _.isTomorrow)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});