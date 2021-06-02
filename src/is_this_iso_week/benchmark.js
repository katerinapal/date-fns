import imp_isThisISOWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisISOWeek = imp_isThisISOWeek

suite('isThisISOWeek', function () {
  benchmark('date-fns', function () {
    return isThisISOWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
