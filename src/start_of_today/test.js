import imp_startOfToday from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */
/* global sinon */

var assert = ext_powerassert
var startOfToday = imp_startOfToday

describe('startOfToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns the current date with the time setted to 00:00:00', function () {
    var result = startOfToday()
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })
})
