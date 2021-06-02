import imp_startOfToday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfToday = imp_startOfToday

suite('startOfToday', function () {
  benchmark('date-fns', function () {
    return startOfToday()
  })
})
