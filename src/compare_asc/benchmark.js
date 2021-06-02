import imp_compareAsc from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var compareAsc = imp_compareAsc

suite('compareAsc', function () {
  benchmark('date-fns', function () {
    return compareAsc(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
