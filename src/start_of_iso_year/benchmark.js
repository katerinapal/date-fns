import imp_startOfISOYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfISOYear = imp_startOfISOYear

suite('startOfISOYear', function () {
  benchmark('date-fns', function () {
    return startOfISOYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
