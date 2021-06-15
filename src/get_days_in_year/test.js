import ext_assert from "power-assert";
import { getDaysInYear as _getDaysInYear } from "./";

describe('getDaysInYear', function () {
  it('returns the number of days in the year of the given date', function () {
    var result = _getDaysInYear(new Date(2014, 6 /* Jul */, 2))
    ext_assert(result === 365)
  })

  it('works for a leap year', function () {
    var result = _getDaysInYear(new Date(2012, 6 /* Jul */, 2))
    ext_assert(result === 366)
  })

  it('works for the years divisible by 100 but not by 400', function () {
    var result = _getDaysInYear(new Date(2100, 6 /* Jul */, 2))
    ext_assert(result === 365)
  })

  it('works for the years divisible by 400', function () {
    var result = _getDaysInYear(new Date(2000, 6 /* Jul */, 2))
    ext_assert(result === 366)
  })

  it('accepts a string', function () {
    var date = new Date(2012, 6 /* Jul */, 2).toISOString()
    var result = _getDaysInYear(date)
    ext_assert(result === 366)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2012, 6 /* Jul */, 2).getTime()
    var result = _getDaysInYear(date)
    ext_assert(result === 366)
  })
})
