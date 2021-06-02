import imp_lastDayOfMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfMonth = imp_lastDayOfMonth

suite('lastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return lastDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
