import imp_isSoLastWeek from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isSoLastWeek = imp_isSoLastWeek

suite('isSoLastWeek', function () {
  benchmark('date-fns', function () {
    return isSoLastWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
