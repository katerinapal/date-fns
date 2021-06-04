'use strict';

var _ = require('./');

suite('differenceInCalendarQuarters', function () {
  benchmark('date-fns', function () {
    return (0, _.differenceInCalendarQuarters)(this.dateA, this.dateB);
  });
}, {
  setup: function setup() {
    this.dateA = new Date();
    this.dateB = new Date(this.dateA.getTime() + 604800000);
  }
});