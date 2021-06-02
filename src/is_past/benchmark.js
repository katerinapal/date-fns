import imp_isPast from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isPast = imp_isPast

suite('isPast', function () {
  benchmark('date-fns', function () {
    return isPast(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
