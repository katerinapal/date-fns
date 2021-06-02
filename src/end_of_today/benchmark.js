import imp_endOfToday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfToday = imp_endOfToday

suite('endOfToday', function () {
  benchmark('date-fns', function () {
    return endOfToday()
  })
})
