import ext_assert from "power-assert";
import { getISOWeeksInYear as _getISOWeeksInYear } from "./";

describe('getISOWeeksInYear', function () {
  it('returns the number of ISO weeks in the ISO week-numbering year of the given date', function () {
    var result = _getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))
    ext_assert(result === 53)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 1 /* Feb */, 11).toISOString()
    var result = _getISOWeeksInYear(date)
    ext_assert(result === 52)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2003, 11 /* Dec */, 30).getTime()
    var result = _getISOWeeksInYear(date)
    ext_assert(result === 53)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(4, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    var result = _getISOWeeksInYear(initialDate)
    ext_assert(result === 53)
  })
})
