import imp_getDayOfYear from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var getDayOfYear = imp_getDayOfYear

describe('getDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('accepts a string', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    assert(result === 2)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var result = getDayOfYear(initialDate)
    assert(result === 366)
  })
})
