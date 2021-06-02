import imp_isSameMonth from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var isSameMonth = imp_isSameMonth

describe('isSameMonth', function () {
  it('returns true if the given dates have the same month (and year)', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different months', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })
})
