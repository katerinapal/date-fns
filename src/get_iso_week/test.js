import ext_assert from "power-assert";
import { getISOWeek as _getISOWeek } from "./";

describe('getISOWeek', function () {
  it('returns the ISO week of the given date', function () {
    var result = _getISOWeek(new Date(2005, 0 /* Jan */, 2))
    ext_assert(result === 53)
  })

  it('accepts a string', function () {
    var result = _getISOWeek(new Date(2008, 11 /* Dec */, 29).toISOString())
    ext_assert(result === 1)
  })

  it('accepts a timestamp', function () {
    var result = _getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    ext_assert(result === 1)
  })

  describe('edge cases', function () {
    it('returns the ISO week at 1 January 2016', function () {
      var result = _getISOWeek(new Date(2016, 0 /* Jan */, 1))
      ext_assert(result === 53)
    })

    it('returns the ISO week at 1 May 2016', function () {
      var result = _getISOWeek(new Date(2016, 4 /* May */, 1))
      ext_assert(result === 17)
    })

    it('returns the ISO week at 2 May 2016', function () {
      var result = _getISOWeek(new Date(2016, 4 /* May */, 2))
      ext_assert(result === 18)
    })

    it('returns the ISO week at 31 May 2016', function () {
      var result = _getISOWeek(new Date(2016, 4 /* May */, 31))
      ext_assert(result === 22)
    })
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 30)
    initialDate.setHours(0, 0, 0, 0)
    var result = _getISOWeek(initialDate)
    ext_assert(result === 52)
  })
})
