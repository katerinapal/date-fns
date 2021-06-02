import imp_isLeapYear from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var isLeapYear = imp_isLeapYear

describe('isLeapYear', function () {
  it('returns true if the given date is in the leap year', function () {
    var result = isLeapYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if the given date is not in the leap year', function () {
    var result = isLeapYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for the years divisible by 100 but not by 400', function () {
    var result = isLeapYear(new Date(2100, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for the years divisible by 400', function () {
    var result = isLeapYear(new Date(2000, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('accepts a string', function () {
    var date = new Date(2012, 6 /* Jul */, 2).toISOString()
    var result = isLeapYear(date)
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2012, 6 /* Jul */, 2).getTime()
    var result = isLeapYear(date)
    assert(result === true)
  })
})
