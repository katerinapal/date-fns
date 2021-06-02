import imp_lastDayOfISOYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfISOYear = imp_lastDayOfISOYear

suite('lastDayOfISOYear', function () {
  benchmark('date-fns', function () {
    return lastDayOfISOYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
