import imp_addISOYears from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addISOYears = imp_addISOYears

suite('addISOYears', function () {
  benchmark('date-fns', function () {
    return addISOYears(this.date, 7)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
