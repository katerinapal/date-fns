'use strict';

var _ = require('./');

suite('eachDay', function () {
  benchmark('date-fns', function () {
    return (0, _.eachDay)(this.dateA, this.dateB);
  });
}, {
  setup: function setup() {
    this.dateA = new Date();
    this.dateB = new Date(this.dateA.getTime() + 604800000);
  }
});