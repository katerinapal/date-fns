import imp_endOfYesterday from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfYesterday = imp_endOfYesterday

suite('endOfYesterday', function () {
  benchmark('date-fns', function () {
    return endOfYesterday()
  })
})
