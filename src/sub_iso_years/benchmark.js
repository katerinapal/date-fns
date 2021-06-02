import imp_subISOYears from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subISOYears = imp_subISOYears

suite('subISOYears', function () {
  benchmark('date-fns', function () {
    return subISOYears(this.date, 7)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
