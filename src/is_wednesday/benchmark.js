import imp_isWednesday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isWednesday = imp_isWednesday

suite('isWednesday', function () {
  benchmark('date-fns', function () {
    return isWednesday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
