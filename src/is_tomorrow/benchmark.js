import imp_isTomorrow from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isTomorrow = imp_isTomorrow

suite('isTomorrow', function () {
  benchmark('date-fns', function () {
    return isTomorrow(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
