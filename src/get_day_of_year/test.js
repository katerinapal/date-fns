import ext_assert from "power-assert";
import { getDayOfYear as _getDayOfYear } from "./";

describe('getDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = _getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    ext_assert(result === 183)
  })

  it('accepts a string', function () {
    var result = _getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString())
    ext_assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = _getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    ext_assert(result === 2)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var result = _getDayOfYear(initialDate)
    ext_assert(result === 366)
  })
})
