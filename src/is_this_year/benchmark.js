import imp_isThisYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisYear = imp_isThisYear

suite('isThisYear', function () {
  benchmark('date-fns', function () {
    return isThisYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
