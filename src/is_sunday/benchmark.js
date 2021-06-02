import imp_isSunday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSunday = imp_isSunday

suite('isSunday', function () {
  benchmark('date-fns', function () {
    return isSunday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
