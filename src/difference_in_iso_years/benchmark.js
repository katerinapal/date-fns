import imp_differenceInISOYears from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInISOYears = imp_differenceInISOYears

suite('differenceInISOYears', function () {
  benchmark('date-fns', function () {
    return differenceInISOYears(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
