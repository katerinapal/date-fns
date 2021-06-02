import imp_isSaturday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSaturday = imp_isSaturday

suite('isSaturday', function () {
  benchmark('date-fns', function () {
    return isSaturday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
