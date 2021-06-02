import imp_lastDayOfWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfWeek = imp_lastDayOfWeek

suite('lastDayOfWeek', function () {
  benchmark('date-fns', function () {
    return lastDayOfWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
