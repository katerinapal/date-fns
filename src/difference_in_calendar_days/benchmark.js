'use strict';

var _ = require('./');

suite('differenceInCalendarDays', function () {
  benchmark('date-fns', function () {
    return (0, _.differenceInCalendarDays)(this.dateA, this.dateB);
  });
}, {
  setup: function setup() {
    this.dateA = new Date();
    this.dateB = new Date(this.dateA.getTime() + 604800000);
  }
});