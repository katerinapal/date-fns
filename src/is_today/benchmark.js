import imp_isToday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isToday = imp_isToday

suite('isToday', function () {
  benchmark('date-fns', function () {
    return isToday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
