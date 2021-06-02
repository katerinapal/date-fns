import imp_lastDayOfYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfYear = imp_lastDayOfYear

suite('lastDayOfYear', function () {
  benchmark('date-fns', function () {
    return lastDayOfYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
