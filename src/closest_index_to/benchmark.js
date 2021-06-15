'use strict';

var _ = require('./');

suite('closestIndexTo', function () {
  benchmark('date-fns', function () {
    return (0, _.closestIndexTo)(this.date, this.array);
  });
}, {
  setup: function setup() {
    this.date = new Date();
    this.array = [new Date(this.date.getTime() + 604800001), new Date(this.date.getTime() - 604800000)];
  }
});