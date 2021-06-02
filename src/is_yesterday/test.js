import imp_isYesterday from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */
/* global sinon */

var assert = ext_powerassert
var isYesterday = imp_isYesterday

describe('isYesterday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Aug */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is yesterday', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if the given date is not yesterday', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isYesterday(new Date(2014, 8 /* Sep */, 24).getTime())
    assert(result === true)
  })
})
