'use strict';

var _ = require('./');

suite('isThisHour', function () {
  benchmark('date-fns', function () {
    return (0, _.isThisHour)(this.date);
  });
}, {
  setup: function setup() {
    this.date = new Date();
  }
});