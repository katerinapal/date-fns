'use strict';

var _ = require('./');

suite('closestTo', function () {
  benchmark('date-fns', function () {
    return (0, _.closestTo)(this.date, this.array);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.array = [new Date(this.date.getTime() + 604800001), new Date(this.date.getTime() - 604800000)];
  }
});