import ext_assert from "power-assert";
import { getYear as _getYear } from "./";

describe('getYear', function () {
  it('returns the year of the given date', function () {
    var result = _getYear(new Date(2014, 6 /* Jul */, 2))
    ext_assert(result === 2014)
  })

  it('accepts a string', function () {
    var result = _getYear(new Date(700, 6 /* Jul */, 2).toISOString())
    ext_assert(result === 700)
  })

  it('accepts a timestamp', function () {
    var result = _getYear(new Date(20000, 3 /* Apr */, 2).getTime())
    ext_assert(result === 20000)
  })
})
