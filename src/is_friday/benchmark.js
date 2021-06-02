import imp_isFriday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isFriday = imp_isFriday

suite('isFriday', function () {
  benchmark('date-fns', function () {
    return isFriday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
