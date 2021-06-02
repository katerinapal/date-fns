import imp_getDaysInYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var getDaysInYear = imp_getDaysInYear

suite('getDaysInYear', function () {
  benchmark('date-fns', function () {
    return getDaysInYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
