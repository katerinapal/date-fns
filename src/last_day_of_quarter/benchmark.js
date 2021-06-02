import imp_lastDayOfQuarter from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfQuarter = imp_lastDayOfQuarter

suite('lastDayOfQuarter', function () {
  benchmark('date-fns', function () {
    return lastDayOfQuarter(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
