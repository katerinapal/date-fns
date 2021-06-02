import imp_isThisSecond from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisSecond = imp_isThisSecond

suite('isThisSecond', function () {
  benchmark('date-fns', function () {
    return isThisSecond(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
