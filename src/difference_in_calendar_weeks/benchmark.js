import imp_differenceInCalendarWeeks from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInCalendarWeeks = imp_differenceInCalendarWeeks

suite('differenceInCalendarWeeks', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarWeeks(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
