import imp_isLastDayOfMonth from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isLastDayOfMonth = imp_isLastDayOfMonth

suite('isLastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return isLastDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
