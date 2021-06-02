import imp_isTuesday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isTuesday = imp_isTuesday

suite('isTuesday', function () {
  benchmark('date-fns', function () {
    return isTuesday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
