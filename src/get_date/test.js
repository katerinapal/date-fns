import ext_assert from "power-assert";
import { getDate as _getDate } from "./";

describe('getDate', function () {
  it('returns the day of the month of the given date', function () {
    var result = _getDate(new Date(2012, 1 /* Feb */, 29))
    ext_assert(result === 29)
  })

  it('accepts a string', function () {
    var result = _getDate(new Date(2014, 6 /* Jul */, 2).toISOString())
    ext_assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = _getDate(new Date(2014, 11 /* Dec */, 31).getTime())
    ext_assert(result === 31)
  })
})
