import imp_startOfYesterday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfToday = imp_startOfYesterday

suite('startOfYesterday', function () {
  benchmark('date-fns', function () {
    return startOfToday()
  })
})
