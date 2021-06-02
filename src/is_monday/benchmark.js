import imp_isMonday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isMonday = imp_isMonday

suite('isMonday', function () {
  benchmark('date-fns', function () {
    return isMonday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
