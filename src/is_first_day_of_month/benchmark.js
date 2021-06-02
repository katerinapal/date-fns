import imp_isFirstDayOfMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isFirstDayOfMonth = imp_isFirstDayOfMonth

suite('isFirstDayOfMonth', function () {
  benchmark('date-fns', function () {
    return isFirstDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
