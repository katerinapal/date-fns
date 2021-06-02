import imp_isThisQuarter from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisQuarter = imp_isThisQuarter

suite('isThisQuarter', function () {
  benchmark('date-fns', function () {
    return isThisQuarter(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
