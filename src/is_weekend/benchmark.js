import imp_isWeekend from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isWeekend = imp_isWeekend

suite('isWeekend', function () {
  benchmark('date-fns', function () {
    return isWeekend(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
