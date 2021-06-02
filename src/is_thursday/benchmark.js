import imp_isThursday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThursday = imp_isThursday

suite('isThursday', function () {
  benchmark('date-fns', function () {
    return isThursday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
