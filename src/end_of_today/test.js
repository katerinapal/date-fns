import imp_endOfToday from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */
/* global sinon */

var assert = ext_powerassert
var endOfToday = imp_endOfToday

describe('endOfToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns the current date with the time setted to 23:59:59.999', function () {
    var result = endOfToday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25, 23, 59, 59, 999))
  })
})
