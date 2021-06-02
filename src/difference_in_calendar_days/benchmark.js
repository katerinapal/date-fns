import imp_differenceInCalendarDays from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInCalendarDays = imp_differenceInCalendarDays

suite('differenceInCalendarDays', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarDays(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
