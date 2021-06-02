import imp_endOfTomorrow from "./";
// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfTomorrow = imp_endOfTomorrow

suite('endOfTomorrow', function () {
  benchmark('date-fns', function () {
    return endOfTomorrow()
  })
})
