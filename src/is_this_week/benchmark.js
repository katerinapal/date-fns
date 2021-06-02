import imp_isThisWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisWeek = imp_isThisWeek

suite('isThisWeek', function () {
  benchmark('date-fns', function () {
    return isThisWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
