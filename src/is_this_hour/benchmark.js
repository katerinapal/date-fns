import imp_isThisHour from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisHour = imp_isThisHour

suite('isThisHour', function () {
  benchmark('date-fns', function () {
    return isThisHour(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
