import ext_assert from "power-assert";
import { getMonth as _getMonth } from "./";

describe('getMonth', function () {
  it('returns the month of the given date', function () {
    var result = _getMonth(new Date(2012, 1 /* Feb */, 29))
    ext_assert(result === 1)
  })

  it('accepts a string', function () {
    var result = _getMonth(new Date(2014, 6 /* Jul */, 2).toISOString())
    ext_assert(result === 6)
  })

  it('accepts a timestamp', function () {
    var result = _getMonth(new Date(2014, 3 /* Apr */, 2).getTime())
    ext_assert(result === 3)
  })
})
