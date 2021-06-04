import ext_assert from "power-assert";
import { getISOYear as _getISOYear } from "./";

describe('getISOYear', function () {
  it('returns the ISO week-numbering year of the given date', function () {
    var result = _getISOYear(new Date(2007, 11 /* Dec */, 31))
    ext_assert(result === 2008)
  })

  it('accepts a string', function () {
    var result = _getISOYear(new Date(2005, 0 /* Jan */, 1).toISOString())
    ext_assert(result === 2004)
  })

  it('accepts a timestamp', function () {
    var result = _getISOYear(new Date(2005, 0 /* Jan */, 1).getTime())
    ext_assert(result === 2004)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var result = _getISOYear(initialDate)
    ext_assert(result === 8)
  })
})
