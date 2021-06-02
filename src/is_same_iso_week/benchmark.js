import imp_isSameISOWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameISOWeek = imp_isSameISOWeek

suite('isSameISOWeek', function () {
  benchmark('date-fns', function () {
    return isSameISOWeek(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
