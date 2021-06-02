import imp_isThisMinute from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisMinute = imp_isThisMinute

suite('isThisMinute', function () {
  benchmark('date-fns', function () {
    return isThisMinute(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
