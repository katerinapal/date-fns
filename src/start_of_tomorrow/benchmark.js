import imp_startOfTomorrow from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfTomorrow = imp_startOfTomorrow

suite('startOfTomorrow', function () {
  benchmark('date-fns', function () {
    return startOfTomorrow()
  })
})
