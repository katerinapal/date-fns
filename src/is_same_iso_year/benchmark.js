import imp_isSameISOYear from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSameISOYear = imp_isSameISOYear

suite('isSameISOYear', function () {
  benchmark('date-fns', function () {
    return isSameISOYear(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
