import imp_compareDesc from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var compareDesc = imp_compareDesc

suite('compareDesc', function () {
  benchmark('date-fns', function () {
    return compareDesc(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
